"use client";
import { Product } from "@/types";
import { ExpandIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import Currency from "./Currency";
import { useRouter } from "next/navigation";

interface productCardProps {
  item: Product;
}

const Productcard: React.FC<productCardProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${item?._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={item.images?.[0]?.url} fill alt="Product Image" />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-4">
          <div className="flex gap-x-3 justify-end">
            <IconButton onClick={() => {}} icon={<ExpandIcon size={15} />} />
            <IconButton onClick={() => {}} icon={<ShoppingBag size={15} />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.categoryId.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={item.price} />
      </div>
    </div>
  );
};

export default Productcard;
