import styles from '../styles/spinner.module.css'

export default function Spinner(): React.ReactElement {
  return (
    <div className={styles.spinner}>
      <div className="sk-circle">
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
      </div>
    </div>
  )
}
