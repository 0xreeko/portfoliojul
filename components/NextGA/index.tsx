import Script from "next/script"

interface NextGAProps {
    mId: string
}

const NextGA = ({ mId }: NextGAProps) => {

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${mId}`}
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${mId}');
                `}
            </Script>
        </>
    )
}

export default NextGA