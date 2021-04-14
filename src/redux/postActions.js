import { createAction } from "@reduxjs/toolkit";

const addPostRequest = createAction("postAdd/request");
const addPostSuccess = createAction("postAdd/success");
const addPostError = createAction("postAdd/error");

const postActions = {
  addPostRequest,
  addPostSuccess,
  addPostError,
};

export default postActions;
