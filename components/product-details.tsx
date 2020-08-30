import CheckIcon from '../icons/check.svg'
import TagIcon from '../icons/tag.svg'
import WarningIcon from '../icons/warning.svg'
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
            <WarningIcon /> Out Of Stock
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
