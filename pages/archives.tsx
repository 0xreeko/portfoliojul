import type { NextPage, GetStaticProps, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const Archives: NextPage = ({archives}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                        <span className='tracking-widest text-amethyst-300/80'>A list of web dev projects I&apos;ve worked on in the past in chronological order.</span>
                    </div>
                    <div className="">
                        {/* list all relevant projects here */}
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Archives


export const getStaticProps:GetStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}
