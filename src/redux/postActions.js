import { createAction } from "@reduxjs/toolkit";

const addPostRequest = createAction("postAdd/request");
const addPostSuccess = createAction("postAdd/success");
const addPostError = createAction("postAdd/error");

const currentPostRequest = createAction("current/request");
const currentPostSuccess = createAction("current/success");
const currentPostError = createAction("current/error");

const postActions = {
  addPostRequest,
  addPostSuccess,
  addPostError,
  currentPostRequest,
  currentPostSuccess,
  currentPostError,
};

export default postActions;
