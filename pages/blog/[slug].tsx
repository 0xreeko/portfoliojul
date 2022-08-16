import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import NotionController from '../../controller/notion-controller';
import { BaseLayout } from '../../Layouts/Base';

const Slug: NextPage = ({markdown, post}: InferGetStaticPropsType <typeof getStaticProps>) => {

    const router = useRouter()
    console.log(router.isReady ? router.query : null)
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='description' title='description' content={post.description} />
                <meta name='og:description' title='og:description' content={post.description} />
            </Head>
            <BaseLayout>
                <main className='flex-grow'>
                <article></article>
                </main>
            </BaseLayout>
        </>
    )
};

export default Slug


export async function getStaticPaths() {
    const notionController = new NotionController()
    const posts = await notionController.getPublishedPosts()

    const paths = posts.map(p => {
        return `/blog/${p.slug}`
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const _notionController = new NotionController()

    // @ts-ignore
    const _page = await _notionController.getSingleReekoPost(ctx.params?.slug)
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