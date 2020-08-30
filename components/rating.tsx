import styles from '../styles/rating.module.css'

type Props = {
  score: number
  max?: number
}

export default function Rating({ score, max = 5 }: Props): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {renderNTimes(score, FilledStar)}
      {renderNTimes(max - score, EmptyStar)}
    </div>
  )
}

function renderNTimes(n: number, Element: React.ComponentType) {
  return Array.from(Array(n), (_, index) => <Element key={index} />)
}

function FilledStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  )
}

function EmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" />
    </svg>
  )
}
