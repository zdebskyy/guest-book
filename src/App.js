import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./components/PostItem/PostItem";
import { items } from "./redux/postSelectors";
import postOperations from "./redux/postOperations";
import styles from "./App.module.css";
import "./base.css";

function App() {
  const [start, setStart] = useState(true);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector(items);
  // console.log(posts);
  const onStart = () => {
    setStart(false);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const post = {
      name,
      comment,
    };
    setName("");
    setComment("");
    dispatch(postOperations.addPost(post));
  };
  return (
    <div className={styles.container}>
      {start ? (
        <div className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>Wellcome to Guest Book</h1>
          <button className={styles.welcomeBtn} onClick={onStart}>
            Get started
          </button>
        </div>
      ) : (
        <>
          <h2 className={styles.mainTitle}>Guest Book</h2>
          <div className={styles.postContainer}>
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={submitForm}>
                <h3 className={styles.formTitle}>Name</h3>
                <input
                  type="text"
                  value={name}
                  className={styles.input}
                  onChange={nameHandler}
                />
                <h3 className={styles.formTitle}>Comment :</h3>
                <textarea
                  value={comment}
                  className={styles.textarea}
                  onChange={commentHandler}
                />
                <button type="submit" className={styles.submitBtn}>
                  Send
                </button>
              </form>
            </div>
            <div className={styles.commentContainer}>
              {posts.length < 1 ? (
                <p className={styles.noContent}>No comments yet</p>
              ) : (
                <ul className={styles.postList}>
                  {posts.map((item) => (
                    <PostItem item={item} key={item._id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
