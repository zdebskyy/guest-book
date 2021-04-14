import axios from "axios";
import postActions from "./postActions";

axios.defaults.baseURL =
  "http://frozen-harbor-43166.herokuapp.com/api/guest-book";

const addPost = (post) => (dispatch) => {
  dispatch(postActions.addPostRequest());
  axios
    .post("/", post)
    .then((res) => dispatch(postActions.addPostSuccess(res.data)))
    .catch((err) => dispatch(postActions.addPostError(err)));
};

const postOperations = {
  addPost,
};

export default postOperations;
