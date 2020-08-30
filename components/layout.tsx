import Link from 'next/link'

import CartIcon from '../icons/cart.svg'
import styles from '../styles/layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props): React.ReactElement {
  function onOpenCart() {
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
        <CartIcon onClick={onOpenCart} />
      </header>
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Copyright © 2020 Jonathan Wieben. All rights reserved.</p>
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
