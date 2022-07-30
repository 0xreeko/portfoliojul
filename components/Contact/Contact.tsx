import styles from './Contact.module.css'
import {SiDiscord, SiTwitter, SiMicrosoftoutlook} from 'react-icons/si'
 
export const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.wrapperItem} group`}>
                <SiTwitter className='w-8 h-8 duration-300 fill-blue-500 group-hover:scale-110' />
                <p>Follow me on Twitter</p>
            </div>
            <div className={`${styles.wrapperItem} group`}>
                <SiDiscord className='w-8 h-8 duration-300 fill-amethyst-500 group-hover:scale-110'/>
                <p>Message me on Discord</p>
            </div>
            <div className={`${styles.wrapperItem} group`}>
                <SiMicrosoftoutlook className='w-8 h-8 duration-300 fill-azure-500 group-hover:scale-110'/>
                <p>Email me via Outlook</p>
            </div>
        </div>
    )
};