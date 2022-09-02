import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { githubIcon, globeIcon } from '../components/Icons';
import styles from '../styles/BaseLayout.module.css'

interface Props {
    name: string,
    status: string,
    description: string
    isLive: boolean
    isDev: boolean
    liveLink: string
    devLink: string
}

const InitCard = (attributes: Props) => {
    return (
        <div className="flex flex-col w-full p-4 duration-300 border rounded-lg h-fit text-d-base border-sylver-100 bg-amethyst-400/5 hover:bg-amethyst-400/10 border-opacity-5 hover:border-opacity-10">
            <div className='flex justify-between text-m-sub2 md:text-d-sub2'>
                <p>{attributes.name}</p>
                <div className="flex gap-2">
                    {attributes.isDev === true && attributes.devLink !== "" ? <a href={attributes.devLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-blue-400'>{githubIcon}</span></a> : null}
                    {attributes.isLive === true && attributes.liveLink !== "" ? <a href={attributes.liveLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-amethyst-400'>{globeIcon}</span></a> : null}
                </div>
            </div>
            <p>Status: <span className={`${attributes.status === "Not Started" ? "text-sylver-800" : "text-green-600"}`}>{attributes.status}</span></p>
            <p>Description: <span className='text-sylver-800'>{attributes.description}</span></p>
        </div>
    )
}

let _data = [
    {
        name: "Web3Source",
        status: "Started",
        description: "Currently working on revamping its branding purpose.",
        isDev: false,
        isLive: true,
        devLink: "",
        liveLink: "https://web3source.co"
    },
    {
        name: "RuskelUI",
        status: "Started",
        description: "An UI library for rapid Web3 development.",
        isDev: true,
        isLive: true,
        devLink: "https://github.com/0xreeko/ruskelui",
        liveLink: "https://0xreeko.github.io/ruskelui/"
    },
]

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
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>Initiatives</h1>
                        <p className='mt-3'>I build cool sh*t in public and make live threads about my builds, so keep an eye out to be up to date with the latest by following me on Twitter. </p>
                        <div className='w-full mt-12'>
                            {/* <div className="">SECTION TO INCLUDE ALL COMBINED STATS ex. MRR</div> */}
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                                {
                                    _data.map((item, idx) => (
                                        <>
                                            <InitCard key={idx} name={item.name} status={item.status} description={item.description} isDev={item.isDev} isLive={item.isLive} liveLink={item.liveLink} devLink={item.devLink} />
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