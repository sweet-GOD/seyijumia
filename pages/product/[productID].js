import {
  fetchProductById,
  fetchProductByIdFir,
  fetchProducts,
} from "@/lib/fetchData";
import ProductDetail from "@/components/productDetails";

export default function ProductDetails(props) {
  return (
    <div className="md:max-w-7xl mx-auto">
      <ProductDetail details={props.selectedProduct} />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productID;
  console.log(productId);

  if (productId.length > 4) {
    const product = await fetchProductByIdFir(productId);

    return {
      props: {
        selectedProduct: product,
      },
      revalidate: 30,
    };
  } else {
    const product = await fetchProductById(productId);

    return {
      props: {
        selectedProduct: product,
      },
      revalidate: 30,
    };
  }
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
