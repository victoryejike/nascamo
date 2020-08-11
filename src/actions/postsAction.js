import { GET_POSTS } from "./types";

export function fetchPosts() {
  return function (dispatch) {
    console.log("fetching");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: GET_POSTS,
          payload: posts,
        })
      );
  };
}
