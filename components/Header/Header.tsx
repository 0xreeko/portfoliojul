import Link from 'next/link';
import { menu } from '../Icons';
import styles from './Header.module.css'
import { discordIcon, linkedInIcon, twitterIcon, youtubeIcon } from '../Icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RuiButton, RuiDropdown } from 'ruskelui';


export const Header = () => {
    const router = useRouter()

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.nav}>
            <div className="flex items-center">
                {
                    router.route === '/' ?
                        (
                            <Image src={'/punk4596.png'} layout={'fixed'} width={32} height={32 } className={'-translate-y-0.5'} alt={'smaller 0xreeko NFT headshot'} />
                        ) : (
                            <Link href={'/'}>
                                <Image src={'/punk4596.png'} layout={'fixed'} width={32} height={32} className='hover:cursor-pointer -translate-y-0.5' alt={'smaller 0xreeko NFT headshot'} />
                            </Link>
                        )
                }
            </div>
            <div className={styles.headerNavigation}>
                <div className="flex items-center gap-4 pr-6">
                    <a aria-label="twitter profile link" href="https://twitter.com/intent/follow?screen_name=0xreeko" target={`_blank`} rel="noreferrer"><span className='hover:text-amethyst-400'>{twitterIcon}</span></a>
                    <a aria-label="discord profile link" href="https://discord.com/users/0xreeko#1744" target={`_blank`} rel="noreferrer"><span className='hover:text-amethyst-400'>{discordIcon}</span></a>
                    <a aria-label="linkedin profile link" href="https://www.linkedin.com/in/enrictrillo/" target={`_blank`} rel="noreferrer"><span className='hover:text-amethyst-400'>{linkedInIcon}</span></a>
                    {/* <a aria-label="youtube channel link" href="https://www.youtube.com/channel/UCov6heLQcDoSUD2rwhyGdUA/" target={'_blank'} rel="noreferrer"><span className='hover:text-amethyst-400'>{youtubeIcon}</span></a> */}
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
                <a href={'/0xbits-newsletter'}>
                    <RuiButton color='amethyst' variant='filled' size='sm'>
                        <span className='font-medium'>Join the 0xBits newsletter</span>
                    </RuiButton>
                </a>
            </div>
            <div className={styles.headerMenu}>
                {menu}
            </div>
            </nav>
        </header>
    )
};