import type { NextPage } from 'next'
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const InitCard = () => {
    return (
        <div className="flex flex-col w-full p-4 duration-300 border rounded-lg text-d-base border-sylver-100 h-44 bg-amethyst-400/5 hover:bg-amethyst-400/10 border-opacity-5 hover:border-opacity-10">
            <p className='text-m-sub2 md:text-d-sub2'>Initiative: #1</p>
            <p className='mt-4'>Status: <span className='text-sylver-800'>Not Started</span></p>
            <p>Description: <span className='text-sylver-800'>An API powered by X for Y and Z. </span></p>
        </div>
    )
}

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
                    <div className="relative flex flex-col items-center">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>0xreeko&apos;s Initiatives</h1>
                        <div className='w-full mt-12'>
                            {/* <div className="">SECTION TO INCLUDE ALL COMBINED STATS ex. MRR</div> */}
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                                <InitCard />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Initiatives