import type { NextPage } from 'next'
import Head from 'next/head'
import { Alert } from '../components/Alert/Alert'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import styles from '../styles/BaseLayout.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
        <meta name="author" content="0xreeko | Enric Trillo" />
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta name='og:image' content="/OG-Image--main.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert />
      <Header />
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
