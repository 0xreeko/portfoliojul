import styles from './Main.module.css'
import Image from 'next/image';
import brandIcon from '../../public/punk4596.png'
import Link from 'next/link';
import { RuiButton } from 'ruskelui';

export const Main = () => {

    return (
        <div className={`${styles.mainContainer}`}>
            <div className="flex flex-col-reverse items-center py-12 gap-y-6 sm:justify-around sm:flex-row">
                <div className="flex flex-col w-full max-w-2xl">
                    {/* neon street light flicker every 6s ? */}
                    <h1 className='text-m-h1 sm:text-d-h1 text-amethyst-400 hover:text-amethyst-400/20'>0xreeko</h1>
                    <p className='text-d-h2'>The coolest Fullstack Web3 Dev building cool sh*t in public!</p>
                </div>

                <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-400/40 to-transparent w-fit'>
                    <div className="flex p-2 rounded-full bg-russian-600">
                        <Image width={172} height={172} layout={'fixed'} placeholder="blur" src={brandIcon} alt="0xreeko punk" className="rounded-full bg-amethyst-500" />
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-6">
                <Link href={'/about'}><RuiButton size='base' color='amethyst'>More about me</RuiButton></Link>
                <Link href={'/blog'} className={`border-2`}><RuiButton size='base' color='russian'>Read the blog</RuiButton></Link>
            </div>
            
            {/* <div className="w-full py-12 mx-auto portfolio">
                <h2 className="text-d-h2">Portfolio</h2>
                <div className="grid grid-cols-3 mx-auto justify-items-center">
                    <p>hey</p>
                    <p>hey</p>
                    <p>hey</p>
                </div>
            </div> */}
            {/* <div className="">
                <h2 className="text-d-h2">Services</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <div className="flex flex-col justify-between h-40 p-4 w-80 rounded-2xl bg-russian-400/20">
                        <h3>Web Development</h3>
                        <p className='mt-2'>I use modern web tooling, like NextJs and Tailwind, to develop visually compelling fullstack applications.</p>
                    </div>
                    <div className="h-40 p-4 w-80 bg-russian-400/20 rounded-2xl">asdas</div>
                    <div className="h-40 p-4 w-80 bg-russian-400/20 rounded-2xl">asdas</div>
                </div>
            </div> */}
        </div>
    )
};