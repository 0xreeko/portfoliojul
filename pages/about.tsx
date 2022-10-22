import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { RuiPill } from 'ruskelui';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const About: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>About &middot; 0xreeko</title>
            <meta name="description" title="description" content="Hey there, anon! I&apos;m 0xreeko, a Fullstack Web3 Developer solving problems and materialising visions into tangible products." />
        </Head>
        <Header />
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='mt-12 font-bold text-m-h1 md:text-d-h2'>About</h1>
                    <h5 className='tracking-widest text-amethyst-300/80'>Here&apos;s My Story</h5>
                    <p className='text-sylver-800'>Estimated Read Time: 1 min, 45 sec</p>
                </div>
                <div id='about' className="flex flex-col w-full pt-8 gap-y-12 text-d-base">
                    <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
                        <div id="content" className='w-full'>
                            <p className='text-m-sub1 md:text-d-sub1'>Hey anon👾,</p>
                            <div className='mt-2'>I&apos;m 0xreeko, or formally Enric Trillo, a 23 year old Fullstack Web3 Developer solving problems and materialising visions into tangible products. Born in southwest Madrid, and I&apos;ve been living in London for the past 12 years. Currently focused on building RuskelUI using <span className='inline-flex'><RuiPill color={'blue'}>Reactjs</RuiPill></span>, <span className="inline-flex"><RuiPill color={'teal'}>TailwindCSS</RuiPill></span> and <span className="inline-flex"><RuiPill color='ruby'>Storybook</RuiPill></span>, and a portfolio of Web3 products.</div>
                        </div>
                        <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-500/60 to-transparent w-fit'>
                            <div className="flex p-2 rounded-full bg-russian-600">
                                <Image priority src={'/punk4596.png'} alt={'0xreeko LinkedIn headshot'} layout={"fixed"} width={200} height={200} className={'transform bg-amethyst-500 rounded-full'} />
                            </div>
                        </div>
                    </div>
                    <div id="background" className="relative flex flex-col">
                            <div className="flex flex-col items-center w-full gap-8 py-1 justify-cesnter xl:flex-row">
                                <p>I&apos;ve been in the creative industry for 8 years as a freelance Digital Developer, starting as a DJ, then covering: GFX, UI/UX, Motion Design, Web Development plus more. I graduated from the University of Northampton in 2020, having studied BSc Computing (Graphics & Visualisation).</p>
                                <div><Image priority src={'/UoN-full--logo.png'} width={317.38} height={180} layout={'fixed'} alt={'uni logo'} /></div>
                                <p>Post graduation, I spent some months learning about the dev side of Web3, leading to me transferring my skills to Web3 in Jan 2021. Since then, I&apos;ve freelanced most of the time and helped many devs transition from Web2 to blockchain.</p>
                        </div>
                    </div>
                    <div id="experience">
                        <p>Recently, I worked as a Web3 contractor with <span className={"underline decoration-amethyst-500 underline-offset-4"}>CWJ Capital</span>, where I helped develop their UI and integrate Web3 tooling, managing to solve their biggest technical challenge within the first two weeks of being active in the role.</p>
                        <p className='mt-8'>Prior to CWJ Capital, I worked as an SDR/BDR Hybrid for <span className={"underline decoration-amethyst-500 underline-offset-4"}>European Gateway</span> helping our tech clients with tasks like prospecting, cold calling, writing scripts for the team and more. It helped build the business & sales acumen I needed to acquire as I wanted to ship my own products in the Web3 space.</p>
                    </div>
                    <div id="interests">
                        <p>Aside from Web3, my current interests are: Machine Learning & AI, Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve developed in ML before <a href="https://medium.com/swlh/an-image-classifier-with-keras-2f0e9b868a36" className='italic underline duration-300 underline-offset-4 decoration-amethyst-400 hover:text-amethyst-400/60 text-amethyst-400' target={'_blank'} rel="noreferrer">(An Image Classifier with Keras)</a>, but my goal is to get deeper in my dev bag, build on these domains and mesh &apos;em with Web3 to ship the products of your tomorrow, today.</p>
                    </div>
                    <p className='italic font-black text-center text-m-h4 md:text-d-h4'>&quot;building cool <span>sh*t</span> in public&quot;</p>
                    <div id='outro' className="flex flex-col items-center gap-6 first-letter:justify-between md:flex-row">
                        <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-500/60 to-transparent w-fit'>
                            <div className="flex p-2 rounded-full bg-russian-600">
                                <Image loading={'lazy'} src={'/linkedinHeadshot.jpeg'} alt={'0xreeko LinkedIn headshot'} layout={"fixed"} width={200} height={200} className={'rounded-full'} />
                            </div>
                        </div>
                        <p className=''>You can find me on <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={'_blank'} rel={'noreferrer'} className={'decoration-amethyst-400 underline underline-offset-4 duration-300 hover:text-amethyst-400'}>Twitter</a> where I share my progress and build cool sh*t in public, follow me on <a href="https://github.com/0xreeko" className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>Github</a>, or connect with me on <a href='https://www.linkedin.com/in/enrictrillo/' className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>LinkedIn</a>. I intend to post often about my findings, tutorials, the entire dev process of building Web3 biz initiatives and more.</p>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
);

export default About