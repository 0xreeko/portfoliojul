import type { NextPage } from 'next'
import Head from 'next/head';
import { BaseLayout } from '../Layouts/Base';

const Store: NextPage = () => {
    return (
        <>
            <Head>
                <title>Store &middot; 0xreeko</title>
            </Head>
            <BaseLayout>
                <main className='flex-grow'>
                    <div className="px-8 sm:px-16 md:px-24 lg:px-64">
                        this is store
                    </div>
                </main>
            </BaseLayout>
        </>
    )
};

export default Store