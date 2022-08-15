import Link from 'next/link';
import { menu } from '../Icons';
import styles from './Header.module.css'
import { discordIcon, linkedInIcon, twitterIcon, youtubeIcon } from '../Icons';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gsap } from 'gsap';


export const Header = () => {
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') {
            gsap.fromTo('.nav',
                { x: -8, opacity: 0 },
                { x: 0, opacity: 1, stagger: .5, delay: .5 }
            )
        }
    }, [])

    return (
        <header className={styles.headerContainer}>
            {router.route === '/' ? <p className='cursor-pointer select-none'>0xreeko</p> : <Link href={'/'}>0xreeko</Link>}
            <div className={styles.headerNavigation}>
                <div className="flex items-center gap-4 pr-6">
                    <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={`_blank`}><span className='duration-300 nav hover:text-amethyst-400'>{twitterIcon}</span></a>
                    <a href="https://discord.com/users/0xreeko#1744" target={`_blank`}><span className='duration-300 nav hover:text-amethyst-400'>{discordIcon}</span></a>
                    <a href="https://www.linkedin.com/in/enrictrillo/" target={`_blank`}><span className='duration-300 nav hover:text-amethyst-400'>{linkedInIcon}</span></a>
                    <a href="https://www.youtube.com/channel/UCov6heLQcDoSUD2rwhyGdUA/" target={'_blank'}><span className='duration-300 nav hover:text-amethyst-400'>{youtubeIcon}</span></a>
                </div>
                <div className='relative group'>
                    <Link href={'/about'}>About </Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] w-0 ${router.route.split('/')[1] === "about" ? "w-full" : "group-hover:w-full"} duration-300 bg-amethyst-500`}></div>
                </div>
                <div className='relative group'>
                    <Link href={'/blog'}>Blog</Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] w-0 ${router.route.split('/')[1] === "blog" ? "w-full" : "group-hover:w-full"} duration-300 bg-amethyst-500`}></div>
                </div>
                <div className='relative group'>
                    <Link href={'/store'}>Store</Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] w-0 ${router.route.split('/')[1] === "store" ? "w-full" : "group-hover:w-full"} duration-300 bg-amethyst-500`}></div>
                </div>
            </div>
            <div className={styles.headerMenu}>
                {menu}
            </div>
        </header>
    )
};