import type { NextPage } from 'next'
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const Initiatives: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Initiatives - 0xreeko</title>
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <p>this is initiatives</p>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Initiatives