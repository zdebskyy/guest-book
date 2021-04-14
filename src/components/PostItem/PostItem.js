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
            Author : <p className={styles.text}>{item.name}</p>
          </p>
          <p className={styles.comment}>
            Comment : <p className={styles.text}>{item.comment}</p>
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
