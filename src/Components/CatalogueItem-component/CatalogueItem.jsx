import React from "react";
import { Link } from "react-router-dom";
import "./CatalogueItem.css";

const CatalogueItem = (props) => {
  const { image, category, numberOfArticles } = props;
  return (
    <div>
      <Link className="nascamLinks" to="/blog">
        <div className="catalogueitemcard">
          {image}
          <br></br>
          <div className="categoryName">
            <p>{category}</p>
            <p>{numberOfArticles}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatalogueItem;
