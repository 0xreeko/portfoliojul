import styles from './Contact.module.css'
import {SiDiscord, SiTwitter, SiMicrosoftoutlook} from 'react-icons/si'
 
export const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <a href={`https://twitter.com/intent/follow?screen_name=0xreeko`} target={`_blank`} rel={`origin`}>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <SiTwitter className='w-8 h-8 duration-300 fill-blue-500 group-hover:scale-110' />
                <p className='group-hover:text-blue-300'>Follow me on Twitter</p>
            </div>
            </a>
            <a href={`https://discord.com/users/0xreeko#1744`} target={`_blank`} rel={`noreferrer `}>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <SiDiscord className='w-8 h-8 duration-300 fill-amethyst-500 group-hover:scale-110'/>
                <p className='group-hover:text-amethyst-300'>Message me on Discord</p>
            </div>
            </a>
            <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                <SiMicrosoftoutlook className='w-8 h-8 duration-300 fill-azure-500 group-hover:scale-110'/>
                <p className='group-hover:text-azure-300'>Email me via Outlook</p>
            </div>
        </div>
    )
};