import React from "react";
import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/Category-preview.component";

import { CategoriesContext } from "../../contexts/Categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
