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
      <div className="">

      </div>
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