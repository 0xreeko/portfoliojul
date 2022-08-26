import Image from 'next/image';
import brandIcon from '../../public/punk4596.png'
import { RuiButton } from 'ruskelui';
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react';

export const CopyHero = () => {
    let punkLogo = useRef(null)
    let hero = useRef(null)

    useEffect(() => {
        gsap.fromTo(punkLogo, {
            y: -45,
            opacity: 0,
        }, { y: 0, delay: .9, duration: 5, opacity: 1, ease: 'elastic' })
        gsap.fromTo(hero, {
            y: -45,
            opacity: 0,
        }, { y: 0, delay: .3, duration: 5, opacity: 1, ease: 'elastic' })
    }, [])

    return (
        <>
            <div className="flex flex-col-reverse items-center gap-6 py-12 text-center md:flex-row md:text-left">
                {/* @ts-ignore */}
                <div ref={el => hero = el} className="flex flex-col justify-center w-full">
                    <h6 className='text-center md:text-left text-m-sub2 sm:text-d-sub2'>GM anon👾, I&apos;m</h6>
                    <h1 className='tracking-widest text-m-hero md:text-d-hero text-amethyst-400 hover:text-amethyst-400/20'>0xreeko </h1>
                    <h3 className='italic text-m-hero md:text-d-hero'>building cool <span>sh*t</span> in public</h3>
                    <h5 className='mt-4 text-m-sub1 sm:text-d-sub1'>Fullstack Web3 Developer</h5>
                    <p className='max-w-lg mt-4 text-m-base md:text-d-base'>I&apos;m a creative based in London and I enjoy solving problems and materialising visions into <span className='italic text-amethyst-400'>tangible products</span>. Currently, I&apos;m building an UI library for rapid Web3 development at <span className='text-amethyst-400'>RuskelUI</span>.</p>
                    <div className="flex justify-center w-full gap-6 pt-12 sm:justify-start">
                        <a href={'/about'}><RuiButton size='base' color='amethyst'>More about me</RuiButton></a>
                        <a href={'/blog'}><RuiButton size='base' color='russian'>Read the blog</RuiButton></a>
                    </div>
                </div>
                {/* @ts-ignore */}
                <div className="flex flex-col items-center gap-6" ref={el => punkLogo = el}>
                    <div className='relative inline-block p-2 transition-all duration-300 rounded-full bg-gradient-to-tr from-amethyst-500/80 to-transparent w-fit h-fit' >
                        <div className="flex p-2 rounded-full bg-russian-600">
                            <Image width={172} height={172} layout={'fixed'} placeholder="blur" src={brandIcon} alt="0xreeko NFT headshot" className="rounded-full bg-amethyst-500" />
                        </div>
                    </div>
                    {/* <h6 className='tracking-widest text-m-sub1 sm:text-d-hero text-amethyst-400 hover:text-amethyst-400/20'>0xreeko </h6>  */}
                </div>

            </div>
        </>
    )
};
