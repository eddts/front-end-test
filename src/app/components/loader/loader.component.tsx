import styles from "./loader.module.css";

export default async function Loader({
  message = "Loading, please wait",
}: {
  message?: string;
}) {
  return (
    <div className={styles.loader} role="alert" aria-busy="true">
      <h1>{message}</h1>
    </div>
  );
}
