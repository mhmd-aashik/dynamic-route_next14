import SingleElement from "@/components/SingleElement";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return data.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProducts(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}

const ProductPage = async ({ params }) => {
  const product = await getProducts(params.id);
  const { title, price, category, description } = product;
  return (
    <div>
      <SingleElement
        title={title}
        price={price}
        image={category}
        description={description}
      />
    </div>
  );
};

export default ProductPage;
