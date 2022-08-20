import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About &middot; 0xreeko</title>
                <meta name="description" title="description" content="I&apos;m 0xreeko, a Fullstack Web3 Developer with a mission to solve problems and materialise visions in to tangible products. I&apos;m glad you're here!" />
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <div className="flex items-center justify-center">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>About</h1>
                    </div>

                    <div id={`about-rico`} className="flex flex-col w-full py-8 gap-y-6 text-d-base">
                        <p>Que lo que mi gente! I&apos;m Rico, a Fullstack Web3 Developer with a mission to solve problems and materialise visions into tangible products. Born in southwest Madrid, and I've been living in London for the past 12 years.</p>
                        <p>I&apos;ve been in the creative industry for 8 years as a freelance Digital Developer, covering: Djing, GFX, UI/UX, Motion Design, plus more.</p>
                        <p>I narrowed down on web development in 2018, two years after writing my first line of code and offering a bunch of services in the niches I was operating in, to direct that experience towards my own projects (kinda selfish, I know😂). </p>
                        <p>I graduated from university in 2020. After graduation, I spent a few months learning about the dev side of blockchain, leading to my full switch to Web3 in Jan 2021.</p>
                        <p>Since then, I&apos;ve helped and guided many individuals who wanted to transition from their Web2 role, to greener pastures (Ou la la mon ami😂).</p>
                        <p>I&apos;ve now embarked on my indie hacker journey to leverage my skills and experience to develop products that solve your problems - a journey that&apos;s starting with my very own UI library called <a className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' href='https://github.com/0xreeko/ruskelui' target={'_blank'} rel={'noreferrer'}>RuskelUI</a>, which I&apos;ve been building since July 2022.</p>
                        <p>I plan to use RuskelUI to bring forth many out of my 33 Web3 biz initiatives that, combined, amount to over 1T in estimated Total Addressable Market (yes, I did the research anon📊).</p>
                        <p>Prior to RuskelUI, I worked as a Web3 contractor with CWJ Capital, where I helped develop their UI and integrate Web3 tooling, managing to solve their biggest technical challenge within the first two weeks of being active in the role.</p>
                        <p>Before CWJ Capital, I temporarily worked as an SDR/BDR Hybrid for European Gateway helping our tech clients with tasks like prospecting and cold calling, writing scripts for the team and more. It helped in building the business & sales acumen I needed to acquire as I wanted to ship my own products in the Web3 space.</p>
                        <p>My current interests are: Machine Learning & AI, Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve already developed in ML & AI before <a href="https://medium.com/swlh/an-image-classifier-with-keras-2f0e9b868a36" target={'_blank'} rel={'noreferrer'} className={'underline underline-offset-4 italic decoration-amethyst-400 duration-300 hover:text-amethyst-400'}>(An Image Classifier With Keras, 2020)</a>, but my goal is to eventually get deeper in my dev bag, build on these domains and mesh 'em with Web3, using my experience as a foundation.</p>
                        <p>I like to travel, so who knows, maybe we'll cross paths in the mediterranean and have a chat over some margaritas.</p>
                        <div className="flex flex-col items-center gap-6 first-letter:justify-between md:flex-row">
                            <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-400/60 to-transparent w-fit'>
                                <div className="flex p-2 rounded-full bg-russian-600">
                                    <Image src={'/linkedinHeadshot.jpeg'} layout={"fixed"} width={200} height={200} className={'rounded-full'} />
                                </div>
                            </div>
                            <p className=''>You can find me on <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={'_blank'} rel={'noreferrer'} className={'decoration-amethyst-400 underline underline-offset-4 duration-300 hover:text-amethyst-400'}>Twitter</a> where I share my progress and build cool sh*t in public, follow me on <a href="https://github.com/0xreeko" className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>Github</a>, or connect with me on <a href='https://www.linkedin.com/in/enrictrillo/' className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>LinkedIn</a>. I intend to post often about my findings, tutorials, the entire dev process of building the 33 Web3 biz initiatives and more.</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default About