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
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- HTML Meta Tags --> */}
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta name="keywords" content="web3, 0xreeko" />
        <meta name="author" content="0xreeko" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://portfoliojul.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="0xreeko &middot; Fullstack Web3 Developer" />
        <meta property="og:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta property="og:image" content="/OG-Image--main.png" />
        <meta property="og:image:secure_url" content="p/OG-Image--main.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="portfoliojul.vercel.app" />
        <meta property="twitter:url" content="https://portfoliojul.vercel.app/" />
        <meta name="twitter:title" content="0xreeko &middot; Fullstack Web3 Developer" />
        <meta name="twitter:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <meta name="twitter:image" content="/OG-Image--main.png" />
        <meta property="twitter:image:secure_url" content="/OG-Image--main.png" />
        <meta property="twitter:image:type" content="image/png" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
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
