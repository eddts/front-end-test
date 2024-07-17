"use client";

import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container} role="alert" aria-busy="true">
      <div className={styles.loader}></div>

      <ol className={styles.messages}>
        <li className={styles.message1}>
          {"Please wait while we find you the best deals..."}
        </li>
        <li className={styles.message2}>{"Comparing offers..."}</li>
        <li className={styles.message3}>{"Packing suncream..."}</li>
        <li className={styles.message4}>{"Asking Richard..."}</li>
        <li className={styles.message5}>
          {
            "Hmm, this seems to be taking longer than expected. You may wan't to refresh the page..."
          }
        </li>
      </ol>

      <button className={`btn ${styles.btn}`} onClick={() => location.reload()}>
        Reload page
      </button>
    </div>
  );
}
