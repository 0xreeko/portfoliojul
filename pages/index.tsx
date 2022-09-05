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
import { Experience } from '../components/Experience/Experience'
import { getExperiences } from '../controller/experience-controller'


const Home: NextPage = ({ posts, expBlocks}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
        {/* <!-- HTML Meta Tags --> */} 
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta name="keywords" content="web3, 0xreeko" />
        <meta name="author" content="0xreeko" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://portfoliojul.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="0xreeko &middot; Fullstack Web3 Developer" />
        <meta property="og:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta property="og:image" content="https://portfoliojul.vercel.app/ogmain.png" />
        <meta property="og:image:secure_url" content="https://portfoliojul.vercel.app/ogmain.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="portfoliojul.vercel.app" />
        <meta property="twitter:url" content="https://portfoliojul.vercel.app/" />
        <meta name="twitter:title" content="0xreeko &middot; Fullstack Web3 Developer" />
        <meta name="twitter:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta name="twitter:image" content="https://portfoliojul.vercel.app/ogmain.png" />
        <meta property="twitter:image:secure_url" content="https://portfoliojul.vercel.app/ogmain.png" />
        <meta property="twitter:image:type" content="image/png" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
      </Head>
      <div className={styles.container}>
        <Alert />
        <Header />
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <CopyHero />
            {/* <Hero /> */}
            <div className="flex items-center justify-center gap-4 py-12 sm:hidden">
              <span className='text-teal-500 animate-bounce'>{touch}</span>
              <p className='tracking-widest'>swipe down</p>
            </div>
            <div className="items-center justify-center hidden gap-4 py-12 lg:flex">
              <span className='text-teal-500 animate-bounce'>{mouse}</span>
              <p className='tracking-widest'>scroll down</p>
            </div>

            <USP />
            <Skills />
            <Experience props={expBlocks} />
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
  const expBlocks = await getExperiences()

  return {
    props: {
      posts,
      expBlocks
    },
    revalidate: 135
  }
}