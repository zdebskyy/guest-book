import React from "react";
import styles from "./Post.module.css";

const PostItem = ({ item }) => {
  const date = Date.now();

  return (
    <>
      <li className={styles.postItem}>
        <div className={styles.userSection}>
          <p className={styles.author}>
            Author : <p className={styles.text}>{item.name}</p>
          </p>
          <p className={styles.comment}>
            Comment : <p className={styles.text}>{item.comment}</p>
          </p>
        </div>
        <div className={styles.dateSection}>
          <span>Date : {date}</span>
        </div>
      </li>
    </>
  );
};

export default PostItem;
