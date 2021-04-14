import axios from "axios";
import postActions from "./postActions";

axios.defaults.baseURL =
  "https://frozen-harbor-43166.herokuapp.com/api/guest-book";

const addPost = (post) => (dispatch) => {
  dispatch(postActions.addPostRequest());
  axios
    .post("/", post)
    .then((res) => dispatch(postActions.addPostSuccess(res.data)))
    .catch((err) => dispatch(postActions.addPostError(err)));
};

const currentItems = () => (dispatch) => {
  dispatch(postActions.currentPostRequest());
  axios
    .get("/current")
    .then((res) => dispatch(postActions.currentPostSuccess(res.data)))
    .catch((err) => dispatch(postActions.currentPostError(err)));
};

const postOperations = {
  addPost,
  currentItems,
};

export default postOperations;
