import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Slug: NextPage = () => {

    const router = useRouter()
    console.log(router.isReady ? router.query : null)
    return (
        <div className='h-screen'>this is a {router.isReady ? router.query.slug : null}</div>
    )
};

export default Slug