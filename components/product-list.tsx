import Link from 'next/link'

import styles from '../styles/product-list.module.css'
import { formatPrice } from '../utils'

type ProductListProps = {
  products: Client.Product[]
}

export default function ProductList({
  products,
}: ProductListProps): React.ReactElement {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductItem key={product.sku} product={product} />
      ))}
    </div>
  )
}

type ProductItemProps = {
  product: Client.Product
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <Link as={`/${product.sku}`} href="/[sku]">
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
  )
}
