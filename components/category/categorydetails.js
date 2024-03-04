import React from "react";
import RecomHeader from "../recommended/header";
import Link from "next/link";
import { NGnaira } from "@/lib/help";
import Error from "../error";

export default function CategoryDetails({ products }) {
  // console.log(products);

  if (products.length == 0) return <Error />;
  return (
    <div className=" p-2 text-center">
      {/* <div className="w-full p-3 bg-white mb-3">
        <img
          src="https://ng.jumia.is/cms/0-6-anniversary/2023/Consumer-needs/CB_1152x252_4.jpg"
          className="w-full"
          alt="Image"
        />
      </div> */}

      <RecomHeader title={products[0].category}  color="bg-gray-900" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-0 gap-4 p-2 bg-white mx-auto">
        {products.map((product) => (
          <div className="p-2 shadow" key={product.id}>
            <img
              src={product.images[0]}
              alt="Product Image"
              className="w-full h-[200px]"
            />
            <Link href={`/product/${product.id}`} className="hover:underline py-3 ps-1">
              <span className="justify-center text-start text-black line-clamp-1">
                {product.title}
              </span>

              <h2 className="font-bold text-start text-black">
                {NGnaira.format(product.price)}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
