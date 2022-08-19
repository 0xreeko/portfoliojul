import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Main/Main'
import styles from '../styles/BaseLayout.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
        <meta name="author" content="0xreeko | Enric Trillo" />
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Main />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
