import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '../components/Main/Main'
import { BaseLayout } from '../Layouts/Base'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>0xreeko &middot; Fullstack Web3 Developer</title>
        <meta name="author" content="0xreeko | Enric Trillo" />
        <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <Main />
      </BaseLayout>
    </>
  )
}

export default Home
