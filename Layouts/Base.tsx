import { ReactNode } from 'react';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
 
export const BaseLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='flex flex-col min-h-screen'>
        <Alert/>
        <Header/>
        {children}
        <Footer/>
        </div>
    )
};