import React from "react";
import "./CatalogueItem.css";

const CatalogueItem = (props) => {
  const { image, category, numberOfArticles } = props;
  return (
    <div>
      <div className="catalogueitemcard">
        {image}
        <br></br>
        <div className="categoryName">
          <p>Category: {category}</p>
          <p>Article Number: {numberOfArticles}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogueItem;
