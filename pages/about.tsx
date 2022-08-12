import type { NextPage } from 'next'
import { BaseLayout } from '../Layouts/Base';
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <BaseLayout>
        <div className="h-full px-8 text-sylver-100 sm:px-16 md:px-32 lg:px-64">
        <div id={`aboutRico`} className="flex flex-col w-full max-w-2xl py-8 ml-auto gap-y-6">
                <p>Que lo que mi gente! I'm known as Rico - a Fullstack Web3 Developer with 4+ years of experience
                    solving problems and materialising visions into tangible
                    products. I made the switch to Web3 in Jan 2021, and I have
                    worked as a freelance creative for the past 8 years and counting,
                    covering areas like Djing, GFX, UI/UX & Motion Design, Video Editing,
                    Web development and more. I take pride in delivering quality digital
                    products with true impact.</p>
                <p>I've embarked on my indie hacker journey to leverage my skills and develop products that solve your problems - currently working on RuskelUI to bring forth many out of my 23 biz ideas
                    that tap into 1T USD in TAM combined. Check out the official RuskelUI repo <a href="https://github.com/0xreeko/ruskelui" target={`_blank`}><span className='underline text-amethyst-400 underline-offset-4'>here.</span></a></p>
                <p>Apart from Web3, my current interests are: Machine Learning & AI,
                    Robotics, Internet of Things and the Mixed Reality umbrella. I've already developed in ML & AI before, but my goal is to eventually get deep in my dev bag and learn these themes thoroughly.</p>
            </div>
            <div className="py-12">
                <h2 className="text-m-h2 sm:text-d-h2"></h2>
                <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 justify-items-center">
                    <div className={styles.mainSkillItem}>
                        {/* <SiNextdotjs className='duration-300 w-14 h-14 fill-russian-400' /> */}
                        <p>NextJS</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiTypescript className='w-14 h-14 duration-300 fill-[#007acc]' /> */}
                        <p>Typescript</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiTailwindcss className='w-14 h-14 duration-300 fill-[#00b4b6]' /> */}
                        <p>Tailwind</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiNodedotjs className='w-14 h-14 duration-300 fill-[#215732]' /> */}
                        <p>Node & Express</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiGraphql className='w-14 h-14 duration-300 fill-[#E10098]' /> */}
                        <p>GraphQL</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiJsonwebtokens className='duration-300 w-14 h-14 fill-scarlet-500' /> */}
                        <p>JWT</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiJest className='w-14 h-14 duration-300 fill-[#C63D14]' /> */}
                        <p>Jest</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiGithubactions className='duration-300 w-14 h-14 fill-azure-500' /> */}
                        <p>GitHub Actions</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiPython className='w-14 h-14 duration-300 fill-[#4B8BBE]' /> */}
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
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiAdobephotoshop className='w-14 h-14 duration-300 fill-[#40D0FB]' /> */}
                        <p>Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
        </BaseLayout>
    )
};

export default About