import React from "react";
//import "./CatalogueItem.css";

const CatalogueItem = (props) => {
  const { image, category, numberOfArticles } = props;
  return (
    <div>
      {image}
      <br></br>
      <p>Category: {category}</p>
      <p>Article Number: {numberOfArticles}</p>
    </div>
  );
};

export default CatalogueItem;
