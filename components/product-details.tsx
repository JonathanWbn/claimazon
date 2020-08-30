import styles from '../styles/product-details.module.css'
import { formatPrice } from '../utils'
import Button from './button'
import Rating from './rating'

type Props = {
  product: Client.Product
}

export default function ProductDetails({ product }: Props): React.ReactElement {
  function onClaim() {
    window.alert(
      'This online shop is still in its beta-phase. You cannot claim products, yet.'
    )
  }

  return (
    <div className={styles.container}>
      <img src={product.image} />
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{product.title}</h1>

        <p className={styles.author}>By {product.author}</p>

        {product.hasRating && <Rating score={product.rating} />}

        <p className={styles.description}>{product.description}</p>

        {product.isInStock ? (
          <div className={styles.extraInfo}>
            <CheckIcon /> In Stock
          </div>
        ) : (
          <div className={styles.extraInfo}>
            <EmptyBoxIcon /> Out Of Stock
          </div>
        )}

        {product.hasTags && (
          <div className={styles.extraInfo}>
            <TagIcon /> {product.tags.map((tag) => tag.name).join(' | ')}
          </div>
        )}

        <div className={styles.priceRow}>
          <p className={styles.price}>
            {formatPrice(product.price, product.currency)}
          </p>
          <Button label="CLAIM" handleClick={onClaim} />
        </div>
      </div>
    </div>
  )
}

function TagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
    >
      <path d="M9.776 2l11.395 11.395-7.78 7.777-11.391-11.391v-7.781h7.776zm.829-2h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-3.191 7.414c-.781.782-2.046.782-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.783.781 2.047 0 2.829z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  )
}

function EmptyBoxIcon() {
  return (
    <svg
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z" />
    </svg>
  )
}
