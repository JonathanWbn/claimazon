import Link from 'next/link'

import CartIcon from '../icons/cart.svg'
import styles from '../styles/layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props): React.ReactElement {
  function handleOpenCart() {
    window.alert(
      'This online shop is still in its beta-phase. You cannot use the cart, yet.'
    )
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/">
          <h1>CLAIMAZON</h1>
        </Link>
        <CartIcon onClick={handleOpenCart} />
      </header>
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Copyright © 2020 Jonathan Wieben.</p>
          <a href="https://github.com/jonathanwbn/claimazon" target="blank">
            Source
          </a>
          <a href="http://jonathanwieben.com/" target="blank">
            About
          </a>
        </div>
      </footer>
    </div>
  )
}
