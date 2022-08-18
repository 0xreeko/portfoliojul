import type { NextPage } from 'next'
import Head from 'next/head';
import { BaseLayout } from '../Layouts/Base';


const InitCard = () => {
    return (
        <div className="w-full p-4 border rounded-lg h-44">adasdasd</div>
    )
}

const Initiatives: NextPage = () => {
    return (
        <>
            <Head>
                <title>Initiatives &middot; 0xreeko</title>
            </Head>
            <BaseLayout>
                <main className="flex-grow">
                    <div className="w-full px-8 mt-12 sm:px-16 md:px-32 lg:px-64">
                        <div className="relative flex flex-col items-center justify-center">
                            <h1 className='font-bold text-m-h1 md:text-d-h1'>0xreeko&apos;s Initiatives</h1>
                            <div className='w-full mt-12'>
                                <div className="grid w-full grid-cols-3 gap-6 justify-items-center">
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                   <InitCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </BaseLayout>
        </>
    )
};

export default Initiatives