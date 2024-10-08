import CategoryDetails from "@/components/category/categorydetails";
import { fetchProductsbyCategory, fetchProductsbyCategoryFir } from "@/lib/fetchData";
import React from "react";

export default function Category({ products }) {
  return (
    <div className="md:max-w-7xl mx-auto">
      <CategoryDetails products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const category = context.params.category;
  
  const products = await fetchProductsbyCategory(category);
  const productsfir = await fetchProductsbyCategoryFir(category);

  return {
    props: {
      products,
      productsfir
    },
  };
}
