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
