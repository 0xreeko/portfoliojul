import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { RuiPill } from 'ruskelui';
import { getPublishedPosts, getSingleReekoPost } from '../../controller/notion-controller';
import { variant } from '../../@types/tags';
import { Tag } from '../../@types/schema';
import dayjs from '../../utils/day'
import styles from './Slug.module.css'
import { Footer } from '../../components/Footer/Footer';
import { Alert } from '../../components/Alert/Alert';
import { Header } from '../../components/Header/Header';

const Slug: NextPage = ({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const router = useRouter()
    return (
        <div className={ styles.container}>
            <Head>
                <title>{`${post.title} · 0xreeko`}</title>
                <meta name='description' title='description' content={post.description} />
                <meta name='og:description' title='og:description' content={post.description} />
            </Head>
            <Alert />
            <Header/>
                <div className={styles.wrapper}>
                    <main className={styles.main}>
                        <div className="flex flex-col items-center text-center gap-y-3">
                            <h1 className="mt-6 font-bold text-m-h1 md:text-d-h1">{post.title}</h1>
                            <div className='flex items-center gap-3 mt-4 text-d-base'>
                                <span>{dayjs(post.date).format('LL - HH:mm')}</span>
                                <span>&middot;</span>
                                <span>Author: {post.author ? "0xreeko" : post.author}</span>
                                <span>&middot;</span>
                                <div className='flex gap-3'>{post.tags.map((tag: Tag) => (
                                    <RuiPill key={tag.id} color={variant[tag.name]}>{tag.name}</RuiPill>
                                ))}</div>
                            </div>
                            <p className='my-4 italic text-sylver-700 text-m-sub2 md:text-d-sub2'>{post.description}</p>
                        </div>
                        <div className="max-w-full prose">
                            <ReactMarkdown className={styles.reekoStyle}>{markdown}</ReactMarkdown>
                        </div>
                        <div className="py-12">
                            <a href={`https://twitter.com/intent/tweet?url=enrictrillo.com${router.asPath}&text=${post.title}&via=0xreeko`} target={'_blank'} rel="noreferrer"><p>Share on Twitter</p></a>
                        </div>
                    </main>
            </div>
            <Footer/>
        </div>
    )
};

export default Slug


export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPublishedPosts()

    const paths = posts.map(p => {
        return `/blog/${p.slug}`
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    // @ts-ignore
    const _page = await getSingleReekoPost(ctx.params?.slug)
    if (!_page) {
        throw "Error"
    }
    return {
        props: {
            markdown: _page.markdown,
            post: _page.post
        },
    }
}