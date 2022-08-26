import Document, { Html, NextScript, Head, Main, DocumentContext } from "next/document";

class MyDoc extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    {/* <!-- HTML Meta Tags --> */}
                    <meta name="description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
                    <meta name="keywords" content="web3, 0xreeko" />
                    <meta name="author" content="0xreeko" />

                    {/* <!-- Facebook Meta Tags --> */}
                    <meta property="og:url" content="https://portfoliojul.vercel.app/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="0xreeko &middot; Fullstack Web3 Developer" />
                    <meta property="og:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
                    <meta property="og:image" content="https://portfoliojul.vercel.app/ogmain.png" />
                    <meta property="og:image:secure_url" content="https://portfoliojul.vercel.app/ogmain.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />

                    {/* <!-- Twitter Meta Tags --> */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="portfoliojul.vercel.app" />
                    <meta property="twitter:url" content="https://portfoliojul.vercel.app/" />
                    <meta name="twitter:title" content="0xreeko &middot; Fullstack Web3 Developer" />
                    <meta name="twitter:description" content="The Coolest Fullstack Web3 Developer Building Cool Sh*t In Public." />
                    <meta name="twitter:image" content="https://portfoliojul.vercel.app/ogmain.png" />
                    <meta property="twitter:image:secure_url" content="https://portfoliojul.vercel.app/ogmain.png" />
                    <meta property="twitter:image:type" content="image/png" />
                    <meta property="twitter:image:width" content="1200" />
                    <meta property="twitter:image:height" content="630" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin={'true'}
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDoc;