import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReekoPost } from '../../@types/schema';
import { tagsType } from '../../@types/tags';
import NotionController from '../../controller/notion-controller';
import { BaseLayout } from '../../Layouts/Base';


const Tags: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    return (
        <>
            <Head>
                {/* @ts-ignore */}
                <title> {(router.query.tags)}| Blog | 0xreeko</title>
                <meta name="0xreeko&pos;s blog" />
            </Head>
            <BaseLayout>
                <main className='flex-grow'>
                    {/* @ts-ignore */}
                    {posts.map((item: ReekoPost) => {
                        console.log(item)
                    })}
                </main>
            </BaseLayout>
        </>
    )
};

export default Tags

export async function getStaticPaths() {
    const paths = tagsType.map(p => {
        return `/tags/${p}`
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const notionController = new NotionController()
    // @ts-ignore
    const posts = await notionController.getTagPosts(ctx?.params.tags)

    return {
        props: {
            posts
        },
        revalidate: (60 * 3)
    }
}
