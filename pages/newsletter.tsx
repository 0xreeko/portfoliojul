import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { RuiButton } from 'ruskelui';
import styles from '../styles/BaseLayout.module.css'

const Newsletter: NextPage = () => {
    const router = useRouter()
    return (<>
        {/* <Header /> */}
        <div className={styles.containers}>
            <div className={`${styles.wrapper}`}>
                <main className={styles.main}>
                    <div className="flex flex-col justify-center mx-8 mt-12 text-center">
                        <div className="flex justify-center mb-3">
                            <div className="w-32 h-32 border">
                                <div className="w-full h-full rounded-full bg-gradient-to-tr from-rose-500 to-amethyst-500"></div>
                            </div>
                        </div>
                        <span className='font-bold text-m-h3 sm:text-d-h3'>Woze <span className=' text-amethyst-500'>by 0xreeko</span></span>
                        <h1 className='font-black text-m-h2 sm:text-d-h2'>Ride digital waves before the many.</h1>
                        <div className="mt-6 sm:mx-20">
                            <p>
                                Woze is a fresh newsletter covering the latest scoop in Web3, Metaverse, Mixed Reality
                                and more - all from a developer&apos;s unique perspective. You also get dev updates on products
                                I build in public, which you can get involved in as an early adopter! Launching soon.
                            </p>
                        </div>
                        <div className={`flex flex-col items-center gap-3 text-center rounded-3xl mt-8 px-4 h-80 md:h-64 subscribe`}>
                            <span className='mt-6 font-bold text-m-h2 sm:text-d-h2'>Join Woze</span>
                            <p className='max-w-2xl'>
                                Daily scoop on emerging tech industries for techies and non-techies. Trends, discussions, reviews, how-to&apos;s & more. All from a developer&apos;s perspective.
                            </p>
                            <iframe src="https://embeds.beehiiv.com/d14ef743-b3cc-4b5f-bb97-049375add901?slim=true"
                                data-test-id="beehiiv-embed"
                                frameBorder="0"
                                scrolling="no"
                                style={{ margin: '0', borderRadius: '0px !important', backgroundColor: 'transparent' }}>
                            </iframe>
                        </div>
                        {/* INFO: inc. social proof section with feedback from members  */}
                        <div className="flex justify-center my-6">
                            <a href={'/'}>
                                <RuiButton size='sm' variant="text" color="azure">
                                    Return to 0xreeko.com
                                </RuiButton>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        {/* <Footer /> */}
    </>
    )
};

export default Newsletter