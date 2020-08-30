import styles from '../styles/list.module.css'

type Props = {
  children?: React.ReactNode
}

export default function List({ children }: Props): React.ReactElement {
  return <div className={styles.list}>{children}</div>
}
