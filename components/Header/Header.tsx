import Link from 'next/link';
import styles from './Header.module.css'
import {HiMenu} from 'react-icons/hi'
 
export const Header = () => {
    return (
        <header className={styles.container}>
            <p className='bg-transparent'>0xreeko</p>
            <div className={styles.navigation}>
                <div className='relative group'>
                    <Link href={'/about'}>About</Link>
                    <div className="absolute -bottom-2 rounded-lg h-[1px] w-0 group-hover:w-full duration-300 bg-amethyst-500"></div>
                    </div>
                <div className='relative group'>
                    <Link href={'/blog'}>Blog</Link>
                    <div className="absolute -bottom-2 rounded-lg h-[1px] w-0 group-hover:w-full duration-300 bg-amethyst-500"></div>
                    </div>
                <div className='relative group'>
                    <Link href={'/store'}>Store</Link>
                <div className="absolute -bottom-2 rounded-lg h-[1px] w-0 group-hover:w-full duration-300 bg-amethyst-500"></div>
                </div>
            </div>
            <div className={styles.menu}>
                <HiMenu />
            </div>
        </header>
    )
};