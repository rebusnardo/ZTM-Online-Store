import { Routes, Route } from "react-router-dom";
import { CategoriesProvider } from "../../contexts/Categories.context";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/Category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
