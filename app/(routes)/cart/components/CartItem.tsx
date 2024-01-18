import { Product } from "@/types";
import React from "react";

interface CartItemProps {
  item: Product;
}

import Image from "next/image";
import useCart from "@/hooks/useCart";
import IconButton from "@/components/ui/icon-button";
import { X } from "lucide-react";
import Currency from "@/components/ui/Currency";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(item._id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={item.images[0].url}
          alt={item.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6 ">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{item.name}</p>
          </div>

          <div className="mt-1 flex text-sm gap-2">
            <p className="text-gray-400">Red</p>

            <p className="text-gray-500 pl-2 border-l border-gray-200">
              Medium Large
            </p>
          </div>

          <Currency value={item.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
