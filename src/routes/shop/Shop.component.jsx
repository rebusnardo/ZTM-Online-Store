import { Routes, Route } from "react-router-dom";
// import { CategoriesProvider } from "../../contexts/Categories.context";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCategoriesMap } from "../../store/categories/category.action";
// import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/Category.component";

import "./shop.styles.scss";

const Shop = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments("categories");
  //     dispatch(setCategoriesMap(categoryMap));
  //   };

  //   getCategoriesMap();
  // }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
