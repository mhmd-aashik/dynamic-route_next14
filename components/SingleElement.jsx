"use client";
import React, { useState } from "react";

const SingleElement = ({ id, title, price, description, image }) => {
  const [amount, setAmount] = useState(1);

  return (
    <section>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
        <img
          src={image.image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full flex items-center justify-self-center"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>

          <p className="mt-3 text-xl">${price}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <div className="mt-4 flex items-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  if (amount < 2) return setAmount(1);
                  setAmount((pre) => pre - 1);
                }}
              >
                -
              </button>
              <span className="text-lg font-semibold w-9 space-x-4 text-center">
                {amount}
              </span>
              <button
                className="bg-blue-500 text-white px-2.5 py-1 rounded "
                onClick={() => {
                  setAmount((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => console.log("add to cart")}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleElement;
