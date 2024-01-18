"use client";
import { Product } from "@/types";
import React from "react";
import Currency from "./ui/Currency";

import { ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import useCart from "@/hooks/useCart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 whitespace-nowrap">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-3 my-3">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <div>Medium</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color</h3>
          <div className="h-5 w-5 rounded-full border border-gray-600 bg-red-500" />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          onClick={addToCart}
          className="flex whitespace-nowrap gap-1 items-center"
        >
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
