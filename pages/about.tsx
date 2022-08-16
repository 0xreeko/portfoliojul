import type { NextPage } from 'next'
import Head from 'next/head';
import { BaseLayout } from '../Layouts/Base';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | 0xreeko</title>
            </Head>
            <BaseLayout>
                <main className="flex-grow px-8 mt-12 sm:px-16 md:px-32 lg:px-64">
                    <div className="flex items-center justify-center">
                        <h1 className='font-bold text-m-h1 md:text-d-h1'>About</h1>
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
            </BaseLayout>
        </>
    )
};

export default About