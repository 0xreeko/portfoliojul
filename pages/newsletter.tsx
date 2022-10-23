import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { RuiButton } from 'ruskelui';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const Newsletter: NextPage = () => {
    const router = useRouter()
    return (<>
        {/* <Header /> */}
        <div className={styles.containers}>
            <div className={`${styles.wrapper}`}>
                <main className={styles.main}>
                    <div className="flex flex-col justify-center mt-12 text-center">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 border"></div>
                        </div>
                        <h1 className='text-m-hero sm:text-d-hero'>0xBits <span className='italic text-amethyst-500'>by 0xreeko</span>.</h1>
                        <span className=' text-m-h3 sm:text-d-h3'>Ride digital waves before the many</span>
                        <div className="mx-20 mt-6">
                            <p>
                                0xBits is a fresh newsletter covering the latest scoop in Web3, Metaverse, Mixed Reality
                                and more - all from an unique developer's perspective. You also get dev updates on products
                                I build in public, which you can get involved in as an early adopter!
                            </p>
                        </div>
                        <div className={`flex flex-col mt-12 items-center gap-3 text-center rounded-3xl mx-8 h-72 md:h-64 subscribe`}>
                            <h2 className='mt-6 font-bold text-m-h2 sm:text-d-h2'>Join the 0xBits crew</h2>
                            <p className='max-w-2xl'>
                                Get the juiciest educational and actionable scoop on emerging tech industries.
                            </p>
                            <iframe src="https://embeds.beehiiv.com/d14ef743-b3cc-4b5f-bb97-049375add901?slim=true"
                                data-test-id="beehiiv-embed"
                                frameBorder="0"
                                scrolling="no"
                                style={{ margin: '0', borderRadius: '0px !important', backgroundColor: 'transparent' }}>
                            </iframe>
                        </div>
                        <div className="flex justify-center my-6">
                        <RuiButton size='sm' variant="text" color="azure" onClick={() => router.push('/')}>
                            Return to 0xreeko.com
                        </RuiButton>
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