import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>From Our Blog</h3>
        <h1>Latest News</h1>
      </div>
      <div className={styles.blogs}>
        <div className={styles.blogCard}>
          <div className={styles.image}>
            <Image src="/images/main/needy6.jpg" alt="blog1" width={360} height={260}/>
          </div>
          <div className={styles.content}>
            <h3>Best and less published their supplier lists.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="chipInfo">
              <Image
                src={"/images/main/author.jpg"}
                alt="author"
                width={30}
                height={30}
              />
              <span className={styles.author}>Author</span> |
              <span className={styles.author}>Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
