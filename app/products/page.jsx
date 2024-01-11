import Product from "@/components/Product";
import React from "react";

const url = "https://api.escuelajs.co/api/v1/products";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const Products = async () => {
  const products = await getProducts();
  return (
    <>
      <h1 className="text-5xl font-bold">Products</h1>
      {products.length > 0 &&
        products.map(({ id, title, price }) => {
          return <Product key={id} id={id} title={title} price={price} />;
        })}
    </>
  );
};

export default Products;
