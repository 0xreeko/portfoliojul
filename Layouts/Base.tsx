import { ReactNode } from 'react';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
 
export const BaseLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
        <Alert/>
        <Header/>
        {children}
        <Footer/>
        </>
    )
};