import Head from 'next/head'

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Claimazon</title>
        <link rel="icon" href="/claimsforce-thumbnail.png" />
      </Head>
      <h1>{`Claimazon - It's still claim one.`}</h1>
    </>
  )
}
