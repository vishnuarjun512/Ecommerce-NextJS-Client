import { getBillboard } from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Product from "@/components/Product";
import Container from "@/components/ui/Container";
import React from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const billboard = await getBillboard(
    `${products[0]?.categoryId?.billboardId}`
  );

  return (
    <div>
      <Container>
        <Billboard data={billboard} />
        <Product
          data={products}
          title={`Category > ${products[0].categoryId.name}`}
        />
      </Container>
    </div>
  );
};

export default CategoryPage;
