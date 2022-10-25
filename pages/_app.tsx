import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { gaMeasurementId } from '../constants/'
import NextGA from '../components/NextGA'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextGA mId={gaMeasurementId} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
