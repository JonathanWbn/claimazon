import styles from '../styles/button.module.css'

type Props = {
  label: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ label, onClick }: Props): React.ReactElement {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}
