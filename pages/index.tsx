import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0xreeko | Fullstack Web3 Developer & Sec Engineer</title>
        <meta name="author" content="0xreeko's Digital Portfolio | Fullstack Web3 Developer & Sec Engineer" />
        <meta name="description" content="Built with 👾 by 0xreeko using NextJS and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
