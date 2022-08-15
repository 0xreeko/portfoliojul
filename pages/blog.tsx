import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Header } from '../components/Header/Header';
import NotionController from '../controller/notion-controller';

const Blog: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
    <Head>
      <title>0xreeko Blog</title>
      <meta name="0xreeko&pos;s blog"/>
    </Head>
    <div className='border text-sylver-100'>
      <Alert />
      <Header />
      <main className="min-h-screen">
        <div className="w-full px-8 mt-12 sm:px-16 md:px-32 lg:px-64">
          <div className="flex items-center justify-center">
            <h1 className='font-bold text-m-h1 md:text-d-h1'>0xreeko&apos; Blog</h1>
          </div>
        </div>
      </main>
    </div>
    </>
  )
};

export default Blog

export const getStaticProps: GetStaticProps = async (ctx) => {
  const notionController = new NotionController()

  const posts = await notionController.getPublishedPosts()

  return {
    props: {
      posts
    }
  }
}