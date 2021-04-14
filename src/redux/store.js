import { configureStore } from "@reduxjs/toolkit";
import posts from "./postReducer";

const store = configureStore({
  reducer: {
    items: posts,
  },
});
export default store;
