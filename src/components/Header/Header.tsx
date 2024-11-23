import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h1>tyander</h1>
      </div>
    </header>
  );
}