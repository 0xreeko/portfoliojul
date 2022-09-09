import { RuiButton, RuiInput } from 'ruskelui';
import { discordIcon, indieIcon, linkedInIcon, twitterIcon } from '../Icons';
import styles from './Contact.module.css'
import { useEffect, useRef } from 'react';

export const Contact = () => {

    return (
        <section id='contact' className={styles.contactWrapper}>
            <div className="flex items-baseline gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>7.0</span>
                <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>Contact</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 mt-8">
                <p className='max-w-lg text-center'>Although I&apos;m building my own Web3 projects, my inbox is open for opportunities in the Web3 space. Whether you have a question or just want to say GM, reach out and I&apos;ll do my best to get back to you ASAP!</p>
                <a href={`mailto:enric_trillo@outlook.com`}><RuiButton size='large' color='amethyst'>Send a GM</RuiButton></a>
            </div>
            <div className="flex flex-col-reverse flex-wrap justify-center w-full gap-4 mt-8 lg:flex-row">
                <a href={`https://twitter.com/intent/follow?screen_name=0xreeko`} target={`_blank`} rel={`noreferrer`}>
                    <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                        <span className='text-sylver-100 duration-300 group-hover:text-[#36D8FF]'>{twitterIcon}</span>
                    </div>
                </a>
                <a href={`https://discord.com/users/0xreeko#1744`} target={`_blank`} rel={`noreferrer`}>
                    <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                        <span className='duration-300 text-sylver-100 group-hover:text-amethyst-500 '>{discordIcon}</span>
                    </div>
                </a>
                <a href="https://linkedin.com/in/enrictrillo" target={'_blank'} rel={`noreferrer`}>
                    <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                        <span className='text-sylver-100 duration-300 group-hover:text-[#00A0DC]'>{linkedInIcon}</span>
                    </div>
                </a>
                <a href="https://www.indiehackers.com/0xreeko" target={`_blank`} rel={`noreferrer`}>
                    <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                        <span className='duration-300 stroke-sylver-100 group-hover:stroke-sunstone-500'>{indieIcon}</span>
                    </div>
                </a>
            </div>
        </section>
    )
};