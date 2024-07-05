import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <div className={styles.item}>Completed Todos:&nbsp;{completedTodos}</div>
      <div className={styles.item}>Total Todos:&nbsp;{totalTodos}</div>
    </div>
  );
}
