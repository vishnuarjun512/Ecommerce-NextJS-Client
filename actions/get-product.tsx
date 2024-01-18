import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productId: string): Promise<Product> => {
  const completeUrl = `${URL}/${productId}`;

  const res = await fetch(completeUrl, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};

export default getProduct;
