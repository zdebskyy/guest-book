import React from "react";
import { DateTime } from "luxon";
import styles from "./Post.module.css";

const PostItem = ({ item }) => {
  const currentTime = DateTime.now();
  const date = DateTime.fromISO(currentTime).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <>
      <li className={styles.postItem}>
        <div className={styles.userSection}>
          <p className={styles.author}>
            Author : <span className={styles.text}>{item.name}</span>
          </p>
          <p className={styles.comment}>
            Comment : <span className={styles.text}>{item.comment}</span>
          </p>
        </div>
        <div className={styles.dateSection}>
          <span>Date : </span>
          <p>{date}</p>
        </div>
      </li>
    </>
  );
};

export default PostItem;
