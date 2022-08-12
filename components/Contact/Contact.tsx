import styles from './Contact.module.css'
// import {SiDiscord, SiTwitter, SiMicrosoftoutlook} from 'react-icons/si'
 
export const Contact = () => {
    return (
        <section id='contact' className={styles.contactWrapper}>
            <a href={`https://twitter.com/intent/follow?screen_name=0xreeko`} target={`_blank`} rel={`origin`}>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00ACEE] to-[#36D8FF]'>Follow me on Twitter</p>
            </div>
            </a>
            <a href={`https://discord.com/users/0xreeko#1744`} target={`_blank`} rel={`noreferrer `}>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#7289da] to-kunzite-500'>Message me on Discord</p>
            </div>
            </a>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#0077b5] to-[#00A0DC]'>Connect with me via LinkedIn</p>
            </div>
            <a href="https://www.indiehackers.com/0xreeko" target={`_blank`}>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sunstone-500'>Follow me on Indie Hackers</p>
            </div>
            </a>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <p className='duration-300 group-hover:text-transparent bg-gradient-to-r from-[#0072C6] to-azure-500 bg-clip-text'>Email me via Outlook</p>
            </div>
        </section>
    )
};