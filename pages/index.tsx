import type { NextPage } from 'next'
import Head from 'next/head'
import { Alert } from '../components/Alert/Alert'
import { Background } from '../components/Background/Background'
import { Education } from '../components/Education/Education'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { FeaturedProjects } from '../components/Projects/FeaturedProjects'
import { Skills } from '../components/Skills/Skills'
import styles from '../styles/BaseLayout.module.css'

const Home: NextPage = () => {
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
            <FeaturedProjects/>
            <Skills />
            <Background/>
            <Education />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
