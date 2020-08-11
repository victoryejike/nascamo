import { GET_POST } from "../actions/types";

const initialState = {
  post: [],
  loading: false,
  hasErrors: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      console.log("reducer");
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default postReducer;
