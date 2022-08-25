import styles from './AboutMe.module.css'

export const AboutMe = () => {
    return (
        <div className='flex flex-col items-start justify-between gap-6 py-12'>
            <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">aboutMe.</h3>
                <p>I&apos;m 0xreeko, a Fullstack Web3 Developer and I enjoy solving problems and materialising visions into tangible products. Born in Madrid, and have been living in London for the past 12 years.</p>
                <p>I started my journey off as a freelance Digital Developer back in 2014, covering: Djing, GFX/UI/UX design, Video Editing, Web development and much more. I wrote my first line of code in 2016 and niched down to web development in 2018, to use the experience I built over the years for my web projects.</p>
                <p>After graduating from UoN in 2020, I spent some months learning about the dev side of Web3, leading to transferring my skills to Web3 in Jan 2021. Since then, I&apos;ve helped many devs make the transition from Web2 to Web3. Currently, I&apos;m building RuskelUI, a component library for rapid Web3 development using React, TailwindCSS and Storybook.</p>
        </div>
    )
};