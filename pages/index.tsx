import Head from 'next/head'

import ProductList from '../components/product-list'

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Claimazon</title>
        <link rel="icon" href="/claimsforce-thumbnail.png" />
      </Head>
      <ProductList />
    </>
  )
}
