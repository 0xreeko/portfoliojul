import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { ReekoPost } from '../@types/schema';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import NotionController from '../controller/notion-controller';

const Blog: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  posts.map((item: ReekoPost) => {
    console.log(item)
  })
  return (
    <>
    <Head>
      <title>0xreeko Blog</title>
      <meta name="0xreeko&pos;s blog"/>
    </Head>
      <Alert />
      <Header />
      <main className="min-h-screen text-sylver-100">
        <div className="w-full px-8 mt-12 sm:px-16 md:px-32 lg:px-64">
          <div className="flex items-center justify-center">
            <h1 className='font-bold text-m-h1 md:text-d-h1'>0xreeko&apos;s Corner</h1>
          </div>
          <ol className="w-full border">
            {posts.map((item: ReekoPost) => (
              <li key={item.id} className="w-full h-20 border">
                {item.author === 'enric trillo'? "0xreeko": item.author}
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
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