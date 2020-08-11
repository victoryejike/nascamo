import { GET_POST } from "./types";

export function fetchPost(id) {
  return function (dispatch) {
    console.log("fetching");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) =>
        dispatch({
          type: GET_POST,
          payload: post,
        })
      );
  };
}
