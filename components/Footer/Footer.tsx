import Link from 'next/link';
import styles from './Footer.module.css'
 
export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>&copy; 2022 0xreeko, All rights reserved</p>
            <p>Made with 👾 by <span className={styles.footerLink}><Link href={"https://github.com/0xreeko"} target="_blank">0xreeko</Link></span></p>
        </footer>
    )
};