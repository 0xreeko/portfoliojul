import Link from 'next/link';
import styles from './Footer.module.css'
 
export const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>&copy; 0xreeko, All rights reserved</p>
            <p>Made with 👾 by <span className={styles.link}><Link href={"https://github.com/0xreeko"} target="_blank">0xreeko</Link></span></p>
        </footer>
    )
};