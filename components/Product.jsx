import React from "react";
import ProductButton from "./ProductButton";

const Product = ({ id, title, price }) => {
  return (
    <div className="border border-white m-10 p-5 flex justify-between cursor-pointer rounded-3xl">
      <div>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <ProductButton id={id} />
    </div>
  );
};

export default Product;
