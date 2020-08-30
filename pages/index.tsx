import ProductList from '../components/product-list'
import styles from '../styles/home.module.css'

export default function Home(): React.ReactElement {
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
      <ProductList />
    </>
  )
}
