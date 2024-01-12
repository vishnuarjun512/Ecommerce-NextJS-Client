import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Info from "@/components/Info";
import Product from "@/components/Product";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";

interface productPageProps {
  params: {
    productId: string;
  };
}

const productPage: React.FC<productPageProps> = async ({ params }) => {
  const productInfo = await getProduct(params.productId);

  const relatedProducts = await getProducts({
    categoryId: productInfo.categoryId._id,
    isFeatured: true,
  });

  const filteredRelatedProducts = relatedProducts.filter(
    (product) => product._id != productInfo._id
  );

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={productInfo?.images} />
            {/* Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={productInfo} />
            </div>
            {/* Related Items */}
          </div>
          <hr className="mt-10" />
          <Product title="Related items" data={filteredRelatedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default productPage;
