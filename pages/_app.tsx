import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MDXComponents from '../components/MDX/MDXComponents'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <MDXProvider components={MDXComponents}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
