import type { NextPage } from 'next'
import Head from 'next/head';
import { BaseLayout } from '../Layouts/Base';

const Initiatives: NextPage = () => {
    return (
        <>
            <Head>
                <title>Initiatives - 0xreeko</title>
            </Head>
            <BaseLayout>
                <p>this is initiatives</p>
            </BaseLayout>
        </>
    )
};

export default Initiatives