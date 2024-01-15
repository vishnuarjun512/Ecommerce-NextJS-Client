import { getBillboard } from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Products from "@/components/Product";
import Container from "@/components/ui/Container";
import React from "react";

const HomePage = async () => {
  const billboard = await getBillboard("65a5568bab3e08a39d673f77");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Products title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
