import Link from "next/link";
import styles from "./no-results.module.css";

export default function NoResults({ onClear }: { onClear: () => void }) {
  return (
    <>
      <p className={styles.message} role="alert">
        {"Uh oh, looks like we don't have any holidays to show you."}
      </p>
      <button className={`btn ${styles.btn}`} onClick={onClear}>
        Clear filters
      </button>

      <Link href="/">Restart booking</Link>
    </>
  );
}
