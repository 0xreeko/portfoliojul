import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Tags: NextPage = () => {
    const router = useRouter()
    const {tags} = router.query
    return (
        <div className='h-screen text-sylver-100'>this is a page { tags}</div>
    )
};

export default Tags