import { ReactNode } from 'react';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Alert />
            <Header />
            <div className="flex-grow border border-red-400">
                <main className="px-8 sm:px-16 md:px-24 lg:px-64">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
};