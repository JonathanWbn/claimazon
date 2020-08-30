import StarEmptyIcon from '../icons/star-empty.svg'
import StarFullIcon from '../icons/star-full.svg'
import styles from '../styles/rating.module.css'

type Props = {
  score: number
  max?: number
}

export default function Rating({ score, max = 5 }: Props): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {renderNTimes(score, StarFullIcon)}
      {renderNTimes(max - score, StarEmptyIcon)}
    </div>
  )
}

function renderNTimes(n: number, Element: React.ComponentType) {
  return Array.from(Array(n), (_, index) => <Element key={index} />)
}
