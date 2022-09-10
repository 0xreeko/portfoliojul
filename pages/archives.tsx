import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Alert } from '../components/Alert/Alert';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'
import archiveStyles from '../styles/Archives.module.css'
import { ArchivesType } from '../@types/archives';
import { getArchives } from '../controller/archives-controller';

const Archives: NextPage = ({ archives }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Archives &middot; 0xreeko</title>
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>Archives</h1>
                        <span className='tracking-widest text-amethyst-300/80'>A list of dev projects I&apos;ve worked on in the past in chronological order.</span>
                    </div>
                    <table>
                        {/* list all relevant projects here */}
                        <thead>
                            <tr className='text-left'>
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
                                    <td className='p-3 text-d-base'>{(item.tools.join().replaceAll(',', ', '))}</td>
                                    <td className='p-3'>{item.devLink !== '' ? item.devLink : null}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
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