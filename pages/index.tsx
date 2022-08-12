import type { NextPage } from 'next'
import Head from 'next/head'
import { Alert } from '../components/Alert/Alert'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0xreeko | Fullstack Web3 Developer</title>
        <meta name="author" content="0xreeko | Enric Trillo" />
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert/>
      <Header />
      <Main/>
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home
