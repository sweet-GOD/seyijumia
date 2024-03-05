import { fetchProductByIdFir, fetchProducts } from "@/lib/fetchData";
import ProductDetailfir from "@/components/productDetails/indexfir";

export default function ProductDetailsFir(props) {
  return (
    <div className="md:max-w-7xl mx-auto">
      <ProductDetailfir details={props.selectedProduct} />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productID;
  console.log(productId);

  const product = await fetchProductByIdFir(productId);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const products = await fetchProducts();

  const paths = products.map((product) => ({
    params: { productID: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
