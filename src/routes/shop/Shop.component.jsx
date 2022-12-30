import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/Product.component";

import { ProductsContext } from "../../contexts/Products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
