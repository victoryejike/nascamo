import React from "react";
import { Link } from "react-router-dom";
//import "./Testimony.css";

const BlogItem = (props) => {
  const { postId, title, postBody } = props;
  return (
    <div>
      <Link to={`/blog/${postId}`}>
        <div id={postId} className="testy">
          <div style={{ alignContent: "center" }}></div>
          <br></br>
          <h2>{title}</h2>
          <p>{postBody}</p>
          <p></p>
          <cite></cite>
        </div>
        <br></br>
      </Link>
    </div>
  );
};

export default BlogItem;
