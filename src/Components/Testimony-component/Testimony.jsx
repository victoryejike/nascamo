import React from "react";

const Testimony = (props) => {
  const { image, testimony, author } = props;
  return (
    <div className="testimony">
      <p>
        {image}
        <br></br>
        {testimony}
        <br></br>
        <span>--{author}</span>
      </p>
    </div>
  );
};

export default Testimony;
