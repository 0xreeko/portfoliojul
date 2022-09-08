import { RuiInput } from 'ruskelui';
import { discordIcon, indieIcon, linkedInIcon, twitterIcon } from '../Icons';
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <section id='contact' className={styles.contactWrapper}>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>7.0</span>
                <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>Contact</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <p className='max-w-lg mt-8'>Although I&apos;m building my own Web3 projects, my inbox is open for opportunities in the Web3 space. Whether you have a question or just want to say GM, I&apos;ll do my best to get back to you ASAP!</p>
            <div className="flex flex-col-reverse flex-wrap w-full gap-12 mt-8 mb-24 lg:flex-row dark">
                <div className="flex flex-col w-full max-w-lg gap-9">
                    <RuiInput name="name" floatingLabel='Name' color='amethyst' fullWidth />
                    <RuiInput name="subject" color='amethyst' floatingLabel='Email' fullWidth />
                    <RuiInput name="email" color='amethyst' floatingLabel='Subject' fullWidth />
                    <div className="flex flex-col gap-3">
                    <label htmlFor="msgInput">Message</label>
                    <textarea name="msgInput" id='msgInput' rows={5} cols={50} className='p-2 duration-300 border rounded-lg outline-none bg-white/5 border-sylver-100/80 backdrop-blur-sm focus:border-amethyst-400' />
                    </div>
                </div>
                <div>
                    <a href={`https://twitter.com/intent/follow?screen_name=0xreeko`} target={`_blank`} rel={`noreferrer`}>
                        <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                            <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00ACEE] to-[#36D8FF]'>Follow me on Twitter</p>
                            <span className='text-sylver-100 duration-300 group-hover:text-[#36D8FF]'>{twitterIcon}</span>
                        </div>
                    </a>
                    <a href={`https://discord.com/users/0xreeko#1744`} target={`_blank`} rel={`noreferrer`}>
                        <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                            <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#7289da] to-amethyst-500'>Message me on Discord</p>
                            <span className='duration-300 text-sylver-100 group-hover:text-amethyst-500 '>{discordIcon}</span>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/enrictrillo" target={'_blank'} rel={`noreferrer`}>
                        <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                            <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#0077b5] to-[#00A0DC]'>Connect w/ me on LinkedIn</p>
                            <span className='text-sylver-100 duration-300 group-hover:text-[#00A0DC]'>{linkedInIcon}</span>
                        </div>
                    </a>
                    <a href="https://www.indiehackers.com/0xreeko" target={`_blank`} rel={`noreferrer`}>
                        <div className={`${styles.wrapperItem} group hover:cursor-pointer`}>
                            <p className='duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sunstone-500'>Follow me on Indie Hackers</p>
                            <span className='duration-300 stroke-sylver-100 group-hover:stroke-sunstone-500'>{indieIcon}</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
};