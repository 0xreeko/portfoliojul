import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Alert } from '../components/Alert/Alert'
import { Background } from '../components/Background/Background'
import { Education } from '../components/Education/Education'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { FeaturedProjects } from '../components/FeaturedProjects/FeaturedProjects'
import { Skills } from '../components/Skills/Skills'
import styles from '../styles/BaseLayout.module.css'
import { USP } from '../components/USP/USP'
import { LatestBlogs } from '../components/LatestBlogs/LatestBlogs'
import { getPublishedPosts } from '../controller/notion-controller'


const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(posts)
  return (
    <>
      <Head>
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
      </Head>
      <div className={styles.container}>
        <Alert />
        <Header />
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Hero />
            <Skills />
            <FeaturedProjects />
            
            <LatestBlogs props={posts} />
            <Education />
            <USP/>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPublishedPosts()

  return {
    props: {
      posts
    },
    revalidate: 135
  }
}