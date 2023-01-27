import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/Category-preview.component";

// import { CategoriesContext } from "../../contexts/Categories.context";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  // const { categoriesMap } = useContext(CategoriesContext);

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
