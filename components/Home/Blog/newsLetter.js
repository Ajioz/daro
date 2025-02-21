import React from "react";
import styles from "./news.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <h1>Subscribe our Newsletter</h1>
      <p>
       Stay updated with the latest news and exclusive offers. Join our community and never miss out!
      </p>
      <section className={styles.Wrapper}>
        <form action="#" method="post" className={styles.formWrapper}>
          <input type="text" placeholder="Enter Your Email" />
          <div className={styles.donateBtn}>
            <span>Subcribe</span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewsLetter;
