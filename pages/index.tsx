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
import { mouse, touch } from '../components/Icons'
import { Contact } from '../components/Contact/Contact'
import { CopyHero } from '../components/CopyHero/CopyHero'


const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            {/* <CopyHero /> */}
            <Hero />
            <div className="flex items-center justify-center gap-4 py-12 sm:hidden">
              <span className='text-teal-500 animate-bounce'>{touch}</span>
              <p className='tracking-widest'>swipe down</p>
            </div>
            <div className="items-center justify-center hidden gap-4 pb-12 lg:flex">
              <span className='text-teal-500 animate-bounce'>{mouse}</span>
              <p className='tracking-widest'>scroll down</p>
            </div>
            
            <Skills />
            <USP />
            <Education />
            <FeaturedProjects />
            <LatestBlogs props={posts} />
            <Contact />
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