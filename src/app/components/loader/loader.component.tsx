"use client";

import styles from "./loader.module.css";

// I initially built this using useInterval hook to adjust the messages, it worked nicely and the timing could be more exact
// It also would give control over checking network status etc before showing the button to reload
// Unfortunately it didn't work when rendered as a fallback component with Suspense and I didn't have time to debug it but I liked the effect
// So I rebuilt it quick and dirty with CSS animations
export default function Loader() {
  return (
    <div className={styles.container} role="alert" aria-busy="true">
      <div className={styles.loader}></div>

      <ol className={styles.messages}>
        <li className={styles.message1}>
          {"Please wait while we find you the best deals..."}
        </li>
        <li className={styles.message2}>{"Checking hotel availibility..."}</li>
        <li className={styles.message3}>{"Comparing flight prices..."}</li>
        <li className={styles.message4}>{"Asking Richard..."}</li>
        <li className={styles.message5}>
          {
            "Hmm, this seems to be taking longer than expected. Give it a minute but if nothing happens you may wan't to refresh the page..."
          }
        </li>
      </ol>

      <button className={`btn ${styles.btn}`} onClick={() => location.reload()}>
        Reload page
      </button>
    </div>
  );
}
