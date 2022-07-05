import Link from 'next/link';
import styles from './Header.module.css'
 
export const Header = () => {
    return (
        <header className={styles.container}>
            <p>0xreeko</p>
            <div className={styles.navigation}>
                <Link href={'/portfolio'}>Portfolio</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/store'}>Store</Link>
            </div>
            <div className={styles.cart}>
                <p>&copy;</p>
            </div>
        </header>
    )
};