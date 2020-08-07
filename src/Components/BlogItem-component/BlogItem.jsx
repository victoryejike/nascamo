import React from "react";
//import { Link } from "react-router-dom";
//import "./Testimony.css";

const BlogItem = (props) => {
  const { image, category, article, author } = props;
  return (
    <div>
      <div className="testy">
        <div style={{ alignContent: "center" }}>{image}</div>
        <br></br>
        <p>{article}</p>
        <p>Category: {category}</p>
        <cite>--{author}</cite>
      </div>
      <br></br>
    </div>
  );
};

export default BlogItem;
