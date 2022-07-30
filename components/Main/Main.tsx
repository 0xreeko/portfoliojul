import styles from './Main.module.css'
import brandIcon from '../../public/punk4596.png'
import Image from 'next/image';
import { SiGithubactions, SiGraphql, SiJest, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si';
 
export const Main = () => {

    const skillItems = [
        {"title": "NextJS","icon": <SiNextdotjs />}
    ]
    return (
        <div className={`${styles.container}`}>
            <div className="flex flex-col-reverse items-center py-12 gap-y-6 sm:justify-evenly sm:flex-row">
            <div className="flex flex-col w-full max-w-md ">
                {/* neon street light flicker every 6s ? */}
                <h1 className=' text-d-hero text-amethyst-400 hover:text-amethyst-400/20'>0xreeko</h1>
                <p className='text-d-h3'>Fullstack Web3 Developer, Hacker & MPE Investor</p>
            </div>
            <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-russian-400/40 to-transparent w-fit'>
                <div className="flex p-2 rounded-full bg-russian-600"><Image width={176}  height={176}  className="rounded-full bg-amethyst-500" src={brandIcon}></Image></div>
            </div>
            </div>
            <div className="w-full py-8 mx-auto text-center text-d-sub2">
                <p>Solving problems and materialising visions into tangible products.</p>
            </div>
            <div className="py-12">
                <h2 className="text-d-h2">Skills</h2>
                <div className="grid grid-cols-4 gap-4 mt-4 gap-y-8 justify-items-center">
                    <div className={styles.skillItem}>
                        <SiNextdotjs className='duration-300 w-14 h-14 fill-russian-400'/>
                        <p>NextJS</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiTypescript className='w-14 h-14 duration-300 fill-[#007acc]'/>
                        <p>Typescript</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiTailwindcss className='w-14 h-14 duration-300 fill-[#00b4b6]'/>
                        <p>Tailwind</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiNodedotjs className='w-14 h-14 duration-300 fill-[#215732]'/>
                        <p>Node & Express</p>
                        </div>
                    <div className={styles.skillItem}>
                        <SiGraphql className='w-14 h-14 duration-300 fill-[#E10098]'/>
                        <p>GraphQL</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiJsonwebtokens className='duration-300 w-14 h-14 fill-scarlet-500'/>
                        <p>JWT</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiJest className='w-14 h-14 duration-300 fill-[#C63D14]' />
                        <p>Jest</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiGithubactions className='duration-300 w-14 h-14 fill-azure-500' />
                        <p>GitHub Actions</p>
                        </div>
                    <div className={styles.skillItem}>
                        <SiPython className='w-14 h-14 duration-300 fill-[#4B8BBE]' />
                        <p>Python</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiSolidity className='duration-300 w-14 h-14 fill-sylver-800' />
                        <p>Solidity</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiMongodb className='w-14 h-14 duration-300 fill-[#4DB33D]' />
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.skillItem}>
                        <SiPostgresql className='w-14 h-14 duration-300 fill-[#0064a5]' />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-12 mx-auto portfolio">
                <h2 className="text-d-h2">Portfolio</h2>
                <div className="grid grid-cols-3 mx-auto justify-items-center">
                    <p>hey</p>
                    <p>hey</p>
                    <p>hey</p>
                </div>
            </div>
            <div className="">
                <h2 className="text-d-h2">Services</h2>
            </div>
            <div className="">
                <h2 className="text-d-h2">Services</h2>
            </div>
        </div>
    )
};