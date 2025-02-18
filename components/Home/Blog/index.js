import React from "react";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>From Our Blog</h3>
        <h1>Latest News</h1>
      </div>
        <div className={styles.blogs}>
            
        </div>
    </div>
  );
};

export default Blog;
