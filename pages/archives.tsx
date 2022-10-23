import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'
import archiveStyles from '../styles/Archives.module.css'
import { ArchivesType } from '../@types/archives';
import { getArchives } from '../controller/archives-controller';
import { Footer } from '../components/Footer/Footer';
import { githubIcon, globeIcon } from '../components/Icons';

const Archives: NextPage = ({ archives }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Archives &middot; 0xreeko</title>
            </Head>
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='mt-12 font-bold text-m-h2 md:text-d-h2'>Archives</h1>
                        <span className='tracking-widest text-amethyst-300/80'>A list of relevant dev projects I&apos;ve worked on in the past.</span>
                    </div>
                    <table className='mt-8 mb-16'>
                        <thead>
                            <tr className='text-left text-sylver-600'>
                                <th className="w-1/6 p-3">Year</th>
                                <th className="w-2/5 p-3">Title</th>
                                <th className="w-2/5 p-3">Tools</th>
                                <th className="w-1/6 p-3">Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archives.map((item: ArchivesType, idx: number) => (
                                <tr className={archiveStyles.wrapper} key={idx}>
                                    <td className='p-3 text-amethyst-400'>{item.year}</td>
                                    <td className='p-3'>{item.title}</td>
                                    <td className='items-baseline p-3 text-d-copy'>{(item.tools.map(item => item.name).join().replaceAll(',', ', '))}</td>
                                    <td className='p-3'>
                                        <span className='flex gap-3'>
                                            {item.devLink !== "" ? <a aria-label="link to github repository" href={item.devLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-blue-400'>{githubIcon}</span></a> : null}
                                            {item.liveLink !== "" ? <a aria-label="link to live site" href={item.liveLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-amethyst-400'>{globeIcon}</span></a> : null}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Archives


export const getStaticProps: GetStaticProps = async (ctx) => {

    const archives = await getArchives()

    return {
        props: {
            archives
        }
    }
}
