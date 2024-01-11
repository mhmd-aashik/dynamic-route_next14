"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductButton = ({ id }) => {
  const router = useRouter();
  return (
    <button
      className="p-2 bg-blue-600 rounded-xl"
      onClick={() => router.push(`/products/${id}`)}
    >
      Go to product
    </button>
  );
};

export default ProductButton;
