import type { NextPage } from 'next'
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const Store: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>store</title>
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <p>
                        under construction🛠
                    </p>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Store