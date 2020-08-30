import styles from '../styles/review-list.module.css'
import List from './list'
import Rating from './rating'

type Props = {
  reviews: Client.Review[]
}

export default function ReviewList({ reviews }: Props): React.ReactElement {
  return (
    <List>
      {reviews.map((review) => (
        <div className={styles.review} key={review.id}>
          <Rating score={review.rating} />
          {review.message ? (
            <span>{review.message}</span>
          ) : (
            <i>No review message</i>
          )}
        </div>
      ))}
    </List>
  )
}
