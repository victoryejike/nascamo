import React from "react";
import "./Testimony.css";

const Testimony = (props) => {
  const { image, testimony, author } = props;
  return (
    <div>
      <p className="testimony">
        {image}
        <br></br>
        <blockquote>
          <p>{testimony}</p>
          <cite>--{author}</cite>
        </blockquote>
      </p>
    </div>
  );
};

export default Testimony;
