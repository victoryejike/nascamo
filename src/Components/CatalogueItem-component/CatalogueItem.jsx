import React from "react";
//import "./Testimony.css";

const CatalogueItem = (props) => {
  const { image, category, numberOfArticles } = props;
  return (
    <div>
      <p className="testy">
        {image}
        <br></br>
        <p>Category: {category}</p>
        <p>{numberOfArticles}</p>
      </p>
    </div>
  );
};

export default CatalogueItem;
