import Image from 'next/image';
import brandIcon from '../../public/punk4596.png'
import Link from 'next/link';
import { RuiButton } from 'ruskelui';
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react';

export const Hero = () => {
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
            <div className="flex flex-col-reverse items-center gap-6 py-12 sm:justify-around sm:flex-row">
                {/* @ts-ignore */}
                <div ref={el => hero = el} className="flex flex-col w-full">
                    {/* neon street light flicker every 6s ? */}
                    <h6 className='text-center sm:text-left text-m-sub2 sm:text-d-sub2'>GM anon👾, I&apos;m </h6>
                    <h1 className='tracking-widest text-center sm:text-left text-m-hero sm:text-d-hero text-amethyst-400 hover:text-amethyst-400/20'>0xreeko</h1>
                    <h5 className='text-center sm:text-left text-m-sub1 sm:text-d-sub1'>Digital Craftsman </h5>
                    <p className='max-w-lg mt-4 text-center sm:text-left text-m-base md:text-d-base'>I&apos;m a creative based in London and I enjoy solving problems and materialising visions into <span className='italic text-amethyst-400'>tangible products</span>. Currently, I&apos;m building an UI library for rapid Web3 development at <span className='text-amethyst-400'>RuskelUI</span>.</p>
                    <div className="flex justify-center w-full gap-6 pt-12 sm:justify-start">
                        <a href={'/about'}><RuiButton size='sm' variant='filled' color='amethyst'>More about me</RuiButton></a>
                        <a href={'/blog'}><RuiButton size='sm' variant='filled' color='russian'>Read the blog</RuiButton></a>
                    </div>
                </div>

                {/* @ts-ignore */}
                <div className='relative inline-block p-2 rounded-full bg-gradient-to-tr from-amethyst-400/60 to-transparent w-fit' ref={el => punkLogo = el}>
                    <div className="flex p-2 rounded-full bg-russian-600">
                        <Image width={172} height={172} layout={'fixed'} placeholder="blur" src={brandIcon} alt="0xreeko NFT headshot" className="rounded-full bg-amethyst-500" />
                    </div>
                </div>
            </div>
        </>
    )
};
