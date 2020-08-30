import ProductList from '../components/product-list'
import Spinner from '../components/spinner'
import { useProducts } from '../data-hooks/products'
import styles from '../styles/home.module.css'

export default function Home(): React.ReactElement {
  const { products, isLoading } = useProducts()

  return (
    <>
      <header className={styles.header}>
        <h1>{`It's still claim one.`}</h1>
        <p>
          This is where you <strong>claim</strong> your products
          <br />
          instead of just buying them.
        </p>
      </header>
      {isLoading && <Spinner />}
      {products && <ProductList products={products} />}
    </>
  )
}
