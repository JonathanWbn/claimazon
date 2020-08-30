import Link from 'next/link'

import { useProducts } from '../data-hooks/products'
import styles from '../styles/product-list.module.css'
import { formatPrice } from '../utils'
import Spinner from './spinner'

export default function ProductList(): React.ReactElement {
  const { products, isLoading } = useProducts()

  if (isLoading) return <Spinner />
  if (!products) return null

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
