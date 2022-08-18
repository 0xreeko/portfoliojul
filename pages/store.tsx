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
                    this is store
                </main>
            </BaseLayout>
        </>
    )
};

export default Store