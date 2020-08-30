import '../styles/globals.css'

import Head from 'next/head'

type Props = {
  pageProps: { [key: string]: unknown }
  Component: React.ComponentType
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Claimazon</title>
        <link rel="icon" href="/claimsforce-thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
