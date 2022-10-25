import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import {gaMeasurementId} from '../constants'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <Script id='google-analytics' strategy='afterInteractive'>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${gaMeasurementId}');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
