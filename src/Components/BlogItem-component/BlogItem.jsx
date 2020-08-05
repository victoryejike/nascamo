import React from "react";
//import "./Testimony.css";

const BlogItem = (props) => {
  const { image, category, article, author } = props;
  return (
    <div>
      <p className="testy">
        {image}
        <br></br>
        <p>{article}</p>
        <p>Category: {category}</p>
        <cite>--{author}</cite>
      </p>
    </div>
  );
};

export default BlogItem;
