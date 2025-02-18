import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import { blog } from "@/data";
import NewsLetter from "./newsLetter";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>From Our Blog</h3>
        <h1>Latest News</h1>
      </div>
      <div className={styles.blogs}>
        {blog.map((item, _i) => (
          <div className={styles.blogCard}>
            <div className={styles.image}>
              <Image src={item.img} alt="blog1" width={360} height={260} />
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.chipInfo}>
                <Image
                  src={item.authorImg}
                  alt="author"
                  width={526}
                  height={526}
                />
                <span className={styles.author}>{item.author}</span> |
                <span className={styles.date}>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  );
};

export default Blog;
