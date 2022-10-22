import Image from 'next/image';
import brandIcon from '../../public/punk4596.png'
import { RuiButton } from 'ruskelui';

export const CopyHero = () => {

    return (
        <section id='hero'>
            {/* @ts-ignore */}
            <div className="flex flex-col-reverse items-center justify-center gap-6 py-12 lg:min-h-[60vh] text-center md:flex-row md:text-left">
                <div className="flex flex-col justify-center w-full">
                    <h6 className='text-center md:text-left text-m-sub2 sm:text-d-sub2'>GM anon👾, I&apos;m</h6>
                    <h1 className='tracking-widest text-m-hero md:text-d-hero text-amethyst-400 hover:text-amethyst-400/20'>0xreeko </h1>
                    <h2 className='italic text-m-hero md:text-d-hero'>building cool <span>sh*t</span> in public</h2>
                    <h3 className='mt-4 text-m-h4 sm:text-d-h4'>Digital Craftsman</h3>
                    <p className='max-w-lg mt-4 text-m-base md:text-d-base'>I&apos;m a creative based in London and I enjoy solving problems by materialising visions into <span className='italic text-amethyst-400'>tangible products</span>. Currently, I&apos;m building an UI library for rapid Web3 development at <span className='text-amethyst-400'>RuskelUI</span>.</p>
                    
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className='relative inline-block p-2 transition-all duration-300 rounded-full bg-gradient-to-tr from-amethyst-500/80 to-transparent w-fit h-fit' >
                        <div className="flex p-2 rounded-full bg-russian-600">
                            <Image priority width={172} height={172} layout={'fixed'} placeholder="blur" src={brandIcon} alt="0xreeko NFT headshot" className="rounded-full bg-amethyst-500" />
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://embeds.beehiiv.com/d14ef743-b3cc-4b5f-bb97-049375add901?slim=true" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{ margin: '0', borderRadius: '0px !important', backgroundColor: 'transparent' }}>
            </iframe>

        </section>
    )
};
