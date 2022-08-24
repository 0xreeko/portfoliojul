import Link from 'next/link';
import { menu } from '../Icons';
import styles from './Header.module.css'
import { discordIcon, linkedInIcon, twitterIcon, youtubeIcon } from '../Icons';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';


export const Header = () => {
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') {
            gsap.fromTo('.nav',
                { x: -8, opacity: 0 },
                { x: 0, opacity: 1, stagger: .5, delay: .5 }
            )
        }
    })

    return (
        <header className={styles.headerContainer}>
            <div className="flex items-center">
                <Image src={'/punk4596.png'} layout={'fixed'} width={24} height={24} className={'-translate-y-0.5'} alt={'smaller 0xreeko NFT headshot'} />
                {router.route === '/' ? <p className='cursor-pointer select-none'>0xreeko</p> : <Link href={'/'}>0xreeko</Link>}
            </div>
            <div className={styles.headerNavigation}>
                <div className="flex items-center gap-4 pr-6">
                    <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={`_blank`} rel="noreferrer"><span className='duration-300 nav hover:text-amethyst-400'>{twitterIcon}</span></a>
                    <a href="https://discord.com/users/0xreeko#1744" target={`_blank`} rel="noreferrer"><span className='duration-300 nav hover:text-amethyst-400'>{discordIcon}</span></a>
                    <a href="https://www.linkedin.com/in/enrictrillo/" target={`_blank`} rel="noreferrer"><span className='duration-300 nav hover:text-amethyst-400'>{linkedInIcon}</span></a>
                    <a href="https://www.youtube.com/channel/UCov6heLQcDoSUD2rwhyGdUA/" target={'_blank'} rel="noreferrer"><span className='duration-300 nav hover:text-amethyst-400'>{youtubeIcon}</span></a>
                </div>
                <div className='relative group'>
                    <Link href={'/initiatives'}>Initiatives </Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] ${router.route.split('/')[1] === "initiatives" ? "w-full bg-amethyst-500" : "w-[0%] bg-transparent group-hover:w-[100%] group-hover:bg-amethyst-500"} duration-300`}></div>
                </div>
                <div className='relative group'>
                    <Link href={'/about'}>About </Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] ${router.route.split('/')[1] === "about" ? "w-full bg-amethyst-500" : "w-[0%] bg-transparent group-hover:w-[100%] group-hover:bg-amethyst-500"} duration-300`}></div>
                </div>
                <div className='relative group'>
                    <Link href={'/blog'}>Blog</Link>
                    <div className={`absolute -bottom-2 rounded-lg h-[1px] ${router.route.split('/')[1] === "blog" ? "w-[100%] bg-amethyst-500" : "w-[0%] bg-transparent group-hover:w-[100%] group-hover:bg-amethyst-500"} duration-300`}></div>
                </div>
            </div>
            <div className={styles.headerMenu}>
                {menu}
            </div>
        </header>
    )
};