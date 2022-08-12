import type { NextPage } from 'next'
import { Alert } from '../components/Alert/Alert';
import { Header } from '../components/Header/Header';

const Blog: NextPage = () => {
    return (
        <div className='min-h-screen'>
            <Alert/>
            <Header/>
            this is blog page</div>
    )
};

export default Blog