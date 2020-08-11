import { GET_POSTS } from "../actions/types";

const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log("reducer");
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
