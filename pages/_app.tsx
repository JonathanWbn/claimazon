import '../styles/globals.css'

type Props = {
  pageProps: { [key: string]: unknown }
  Component: React.ComponentType
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
