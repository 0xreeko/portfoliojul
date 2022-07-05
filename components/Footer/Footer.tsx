import Link from 'next/link';
import styles from './Footer.module.css'
 
export const Footer = () => {
    return (
        <div className={styles.container}>
            <p>&copy; 0xreeko</p>
            <p>Made with 👾 by <span className={styles.link}><Link href={"https://twitter.com/0xreeko"} target="_blank">0xreeko</Link></span></p>
        </div>
    )
};