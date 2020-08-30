import '../styles/globals.css'

import Head from 'next/head'

import Layout from '../components/layout'

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
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/spinkit@2.0.1/spinkit.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
