import React from "react";

import { Product as ProductType } from "@/types";
import Noresults from "./ui/no-results";
import Productcard from "./ui/product-card";

interface ProductProps {
  title: string;
  data: ProductType[];
}

const Product: React.FC<ProductProps> = ({ title, data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {data.length == 0 ? (
        <Noresults />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.map((product) => (
            <Productcard key={product._id} item={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
