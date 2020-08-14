import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import homeCommentsReducer from "./homeCommentsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentReducer,
  homeComments: homeCommentsReducer,
});

export default rootReducer;
