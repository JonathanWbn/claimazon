import Link from 'next/link'

import styles from '../styles/product-list.module.css'
import { formatPrice } from '../utils'
import List from './list'

type ProductListProps = {
  products: Client.Product[]
}

export default function ProductList({
  products,
}: ProductListProps): React.ReactElement {
  return (
    <List>
      {products.map((product) => (
        <Link key={product.sku} as={`/${product.sku}`} href="/[sku]">
          <div className={styles.product}>
            <img src={product.image}></img>
            <div className={styles.info}>
              <h2 className={styles.title} title={product.title}>
                {product.title}
              </h2>
              <p className={styles.author}>{product.author}</p>
              <p className={styles.price}>
                {formatPrice(product.price, product.currency)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </List>
  )
}
