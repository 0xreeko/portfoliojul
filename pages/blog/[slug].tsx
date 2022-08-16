import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Slug: NextPage = () => {

    const router = useRouter()
    console.log(router.query)
    return (
        <div className='h-screen'>this is a {router.query.slug}</div>
    )
};

export default Slug