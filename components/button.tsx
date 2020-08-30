import styles from '../styles/button.module.css'

type Props = {
  label: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  label,
  handleClick,
}: Props): React.ReactElement {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  )
}
