import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

interface Props {
    id: number,
    name: string,
    status: string,
    description: string
}

const InitCard = (attributes: Props) => {
    return (
        <div className="flex flex-col w-full p-4 duration-300 border rounded-lg h-fit text-d-base border-sylver-100 bg-amethyst-400/5 hover:bg-amethyst-400/10 border-opacity-5 hover:border-opacity-10">
            <p className='text-m-sub2 md:text-d-sub2'>Initiative: #{attributes.id}</p>
            <p className='mt-4'>Name: <span className={`text-sylver-800`}>{attributes.name}</span></p>
            <p>Status: <span className={`${attributes.status === "Not Started" ? "text-sylver-800" : "text-green-600"}`}>{attributes.status}</span></p>
            <p>Description: <span className='text-sylver-800'>{attributes.description}</span></p>
        </div>
    )
}

const Initiatives: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Initiatives - 0xreeko</title>
                <meta name="description" title="description" content="Displaying the 33 Web3 biz initiatives I&apos;m building and their combined numbers, including status, the description of the project, and a link to the landing page." />
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <div className="">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>0xreeko&apos;s Initiatives</h1>
                        <div className='w-full mt-12'>
                            {/* <div className="">SECTION TO INCLUDE ALL COMBINED STATS ex. MRR</div> */}
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                                {
                                    [{ id: 1, name: "RuskelUI", status: "Started", description: "An UI library for rapid Web3 development" }].map((item, idx) => (
                                        <>
                                            <InitCard key={idx} id={item.id} name={item.name} status={item.status} description={item.description} />
                                        </> 
                                    ))
                                }
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