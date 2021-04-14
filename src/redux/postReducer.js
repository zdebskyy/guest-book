import postActions from "./postActions";
import { createReducer } from "@reduxjs/toolkit";

const posts = createReducer([], {
  [postActions.addPostSuccess]: (state, { payload }) => [payload, ...state],
});

export default posts;
