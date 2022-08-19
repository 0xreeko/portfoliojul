import type { NextPage } from 'next'
import Head from 'next/head';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About &middot; 0xreeko</title>
            </Head>
            <Alert />
            <Header/>
                <div className={styles.wrapper}>
                    <main className={styles.main}>
                        <div className="flex items-center justify-center">
                            <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>About</h1>
                        </div>
                        <div id={`about-rico`} className="flex flex-col w-full max-w-2xl py-8 ml-auto gap-y-6">
                            <p>Que lo que mi gente! I&apos;m known as Rico - a Fullstack Web3 Developer with 4+ years of experience
                                solving problems and materialising visions into tangible
                                products. I made the switch to Web3 in Jan 2021, and I have
                                worked as a freelance creative for the past 8 years and counting,
                                covering areas like Djing, GFX, UI/UX & Motion Design, Video Editing,
                                Web development and more. I take pride in delivering quality digital
                                products with true impact.</p>
                            <p>I&apos;ve embarked on my indie hacker journey to leverage my skills and develop products that solve your problems - currently working on RuskelUI to bring forth many out of my 23 biz ideas
                                that tap into 1T USD in TAM combined. Check out the official RuskelUI repo <a href="https://github.com/0xreeko/ruskelui" target={`_blank`}><span className='underline text-amethyst-400 underline-offset-4'>here.</span></a></p>
                            <p>Apart from Web3, my current interests are: Machine Learning & AI,
                                Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve already developed in ML & AI before, but my goal is to eventually get deep in my dev bag and learn these themes thoroughly.</p>
                        </div>
                    </main>
            </div>
            <Footer/>
        </div>
    )
};

export default About