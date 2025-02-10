import React from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <img src="/images/logo/logo-3.png" alt="Daro Nigeria" className={styles.logo} />
    </div>
  );
};
export default Preloader;
