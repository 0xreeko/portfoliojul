import Image from 'next/image';
import brandIcon from '../../public/punk4596.png'
// @ts-ignore
import styles from './Hero.module.css'

export const Hero = () => {

    return (
        <section>
            <div className="flex flex-col mt-12 gap-6 min-h-[45vh]">
                <div id="0xreeko" className="flex flex-col items-center">
                    <div className='relative inline-block p-2 transition-all duration-300 rounded-full bg-gradient-to-tr from-amethyst-500/80 to-transparent w-fit h-fit' >
                        <div className="flex p-2 duration-700 rounded-full bg-russian-600 hover:scale-105 active:scale-105">
                            <Image priority width={172} height={172} layout={'fixed'} placeholder="blur" src={brandIcon} alt="0xreeko NFT headshot" className="overflow-hidden rounded-full bg-amethyst-500" />
                        </div>
                    </div>
                </div>
                <div id="landCopy" className="flex flex-col justify-center w-full text-center">
                    <span className='font-bold text-m-h5 sm:text-d-h5 '>GM, I&apos;m 0xreeko 👾</span>
                    <h1 className='italic text-m-hero md:text-d-hero'>building cool <span>sh*t</span> in public</h1>
                    <p className='py-6 mx-6 text-m-base md:text-d-base'>I&apos;m a <span className='text-amethyst-400'>Digital Craftsman</span> based in London and I enjoy solving problems by materialising visions into <span className='italic text-amethyst-400'>tangible products</span>. Currently, I&apos;m building an UI library for rapid frontend development at <span className='text-amethyst-400'>RuskelUI</span>.</p>
                    <p className='hidden mt-4 text-m-base md:text-d-base'>
                        I&apos;ve begun a brand new newsletter called <span className='text-amethyst-400'> Woze by 0xreeko</span>,
                        &nbsp;a newsletter where I publish the juiciest bits on emerging tech industries, from Web3, Mixed Reality to
                        AI & Machine Learning, and development updates on my solopreneur journey as I build cool sh*t in public.
                    </p>
                    <p className='hidden mt-4 text-center text-m-base md:text-d-base'>
                        a <span className='text-amethyst-400'>Digital Craftsman</span> based in London and I enjoy
                        solving problems by materialising visions into <span className='italic text-amethyst-400'>tangible products</span>.
                        <br />
                        <br />
                        Join my newsletter, <span className='text-amethyst-400'> Woze by 0xreeko</span>, where you get daily
                        bits🗞 on emerging tech industries, from Web3 to Mixed Reality, and dev updates
                        as carve out my solopreneur journey by building cool sh*t in public.
                    </p>
                </div>
            </div>
            <div className={`flex flex-col items-center gap-3 text-center rounded-3xl mx-8 px-4 h-80 md:h-64 subscribe`}>
                <span className='mt-6 font-bold text-m-h2 sm:text-d-h2'>Join Woze</span>
                <p className='max-w-2xl text-d-base'>
                    Get daily bits🗞 on emerging tech industries from a developer&apos;s perspective,
                    and become an early adopter as I drop updates on the products that carve my
                    solopreneur journey 👾
                </p>
                <iframe src="https://embeds.beehiiv.com/d14ef743-b3cc-4b5f-bb97-049375add901?slim=true" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{ margin: '0', borderRadius: '0px !important', backgroundColor: 'transparent' }}>
                </iframe>
            </div>

        </section>
    )
};
