import styles from './Skills.module.css'
import { ethers, githubActions, greensock, hardhat, jwt, mongodb, nextjs, node, photoshop, prisma, python, solidity, tailwind, trpc, typescript, vitest } from '../Icons';

export const Skills = () => {
    return (
        <section id='skills' className='py-16'>
            <div className="flex items-baseline gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>2.0</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">Skills</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-8 justify-items-center">
                <div className={styles.mainSkillItem}>
                    <span>{nextjs}</span>
                    <p>NextJS</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{typescript}</span>
                    <p>Typescript</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{tailwind}</span>
                    <p>Tailwind</p>
                </div>
                <div className={`${styles.mainSkillItem} relative`}>
                    <span>{greensock}</span>
                    <p>GSAP</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{photoshop}</span>
                    <p>Photoshop</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{node}</span>
                    <p>Node & Express</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span className='duration-300 hover:opacity-80'>{trpc}</span>
                    <p>tRPC</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{vitest}</span>
                    <p>Vitest</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span className='duration-300 fill-sylver-100 hover:fill-sylver-100/80'>{prisma}</span>
                    <p>Prisma</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{jwt}</span>
                    <p>JWT</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{mongodb}</span>
                    <p>MongoDB</p>
                </div>
                <div className={styles.mainSkillItem}>
                    {/* <SiEthereum className='duration-300 w-14 h-14 fill-azure-500' /> */}
                    <span>{ethers}</span>
                    <p>EthersJS</p>
                </div>
                <div className={styles.mainSkillItem}>
                    {/* <FaHardHat className='duration-300 w-14 h-14 fill-jasper-500' /> */}
                    <span>{hardhat}</span>
                    <p>Hardhat</p>
                </div>
                <div className={styles.mainSkillItem}>
                    {solidity}
                    <p>Solidity</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{python}</span>
                    <p>Python</p>
                </div>
                <div className={styles.mainSkillItem}>
                    <span>{githubActions}</span>
                    <p>GitHub Actions</p>
                </div>
                </div>
                <div className="mt-8">
                    <p className='text-m-sub2 md:text-d-sub2'>plus many more.</p>
                </div>
            </div>
        </section>
    )
};