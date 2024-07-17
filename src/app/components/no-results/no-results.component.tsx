import Link from "next/link";
import styles from "./no-results.module.css";

export default function NoResults({
  onClear,
  showClear,
}: {
  onClear: () => void;
  showClear: boolean;
}) {
  return (
    <div className={styles.noResults}>
      <h3>No results</h3>
      <p>{"Uh oh, looks like we don't have any holidays to show you."}</p>
      {showClear && <button onClick={onClear}>Clear filters</button>}
      <Link href="/">Restart booking</Link>
    </div>
  );
}
