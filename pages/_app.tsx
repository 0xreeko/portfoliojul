import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextGA from '../components/NextGA'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextGA mId={`${process.env.NEXT_GA}`} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
