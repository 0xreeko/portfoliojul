import type { NextPage } from 'next'
import Head from 'next/head';
import { githubActions, gql, gsap, jwt, mongodb, nextjs, node, photoshop, python, tailwind, typescript } from '../components/Icons';
import { BaseLayout } from '../Layouts/Base';
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | 0xreeko</title>
            </Head>
            <BaseLayout>
            <div className="h-full px-8 sm:px-16 md:px-32 lg:px-64">
                <div id={`aboutRico`} className="flex flex-col w-full max-w-2xl py-8 ml-auto gap-y-6">
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
                <div className="py-12">
                    <h2 className="text-m-h2 sm:text-d-h2"></h2>
                    <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 justify-items-center">
                        <div className={styles.mainSkillItem}>
                            {/* <SiNextdotjs className='duration-300 w-14 h-14 fill-russian-400' /> */}
                                <span>{ nextjs}</span>
                            <p>NextJS</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiTypescript className='w-14 h-14 duration-300 fill-[#007acc]' /> */}
                                <span>{ typescript}</span>
                            <p>Typescript</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiTailwindcss className='w-14 h-14 duration-300 fill-[#00b4b6]' /> */}
                                <span>{tailwind }</span>
                            <p>Tailwind</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiNodedotjs className='w-14 h-14 duration-300 fill-[#215732]' /> */}
                                <span>{ node}</span>
                            <p>Node & Express</p>
                        </div>

                        <div className={styles.mainSkillItem}>
                            {/* <SiGraphql className='w-14 h-14 duration-300 fill-[#E10098]' /> */}
                                <span>{ gql}</span>
                            <p>GraphQL</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiJsonwebtokens className='duration-300 w-14 h-14 fill-scarlet-500' /> */}
                                <span>{ jwt}</span>
                            <p>JWT</p>
                        </div>
                        <div className={`${styles.mainSkillItem} relative`}>
                            {/* <SiJest className='w-14 h-14 duration-300 fill-[#C63D14]' /> */}
                                <span>{ gsap}</span>
                            <p>GSAP</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiGithubactions className='duration-300 w-14 h-14 fill-azure-500' /> */}
                                <span>{ githubActions}</span>
                            <p>GitHub Actions</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiPython className='w-14 h-14 duration-300 fill-[#4B8BBE]' /> */}
                            <span>{python}</span>
                            <p>Python</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiEthereum className='duration-300 w-14 h-14 fill-azure-500' /> */}
                            <p>EthersJS</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <FaHardHat className='duration-300 w-14 h-14 fill-jasper-500' /> */}
                            <p>Hardhat</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiSolidity className='duration-300 w-14 h-14 fill-sylver-800' /> */}
                            <p>Solidity</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiMongodb className='w-14 h-14 duration-300 fill-[#4DB33D]' /> */}
                                <span>{mongodb}</span>
                            <p>MongoDB</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiAdobephotoshop className='w-14 h-14 duration-300 fill-[#40D0FB]' /> */}
                                <span>{ photoshop}</span>
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
        </>
    )
};

export default About