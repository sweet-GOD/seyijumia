import React, { useState } from "react";
import Breadcrumbs from "./breadcrumbs";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Moredetails from "./moredetails";
import Delivery from "./delivery";
import { NGnaira } from "@/lib/help";
import { useRecoilState } from "recoil";
import { cartState } from "../../atom/cartAtom";

export default function ProductDetail({ details }) {
  const [cart, setCart] = useRecoilState(cartState);
  // console.log(details);

  const addToCart = () => {
    const newCart = [...cart, details];
    setCart(newCart);
  };

  if (!details) {
    return null;
  }

  return (
    <div className="text-black prodDet">
      <Breadcrumbs
        category={details.category}
        brand={details.brand}
        title={details.title}
      />

      <div className="flex flex-col lg:flex-row p-3 space-x-4">
        <div className="w-[100%] lg:w-[70%]">
          <div className="grid grid-cols-5 bg-white p-2 rounded-lg shadow-lg">
            <div className="md:col-span-2 col-span-5 border-b md:border-none">
              <img
                src={
                  details.images.length > 10
                    ? details.images
                    : details.images[0]
                }
                alt="Product Detail"
                className="w-[100%] rounded mb-2"
              />

              {/* <div className="grid grid-cols-4 mt-2 gap-2">
                {details.images.map((detail) => (
                  <div className="h-[60px] overflow-hidden rounded">

                  <img
                  src={detail}
                  alt="Product Detail"
                  className="w-full  detailImg "
                  />
                  </div>
                  
                  ))}
              </div>  */}

              <span className="text-lg p-2 ">SHARE THIS PRODUCT</span>
              <p className="space-x-5 p-2">
                <FacebookOutlinedIcon className="text-gray-500" />
                <TwitterIcon className="text-gray-500" />
              </p>
            </div>

            <div className="md:col-span-3 col-span-5 md:p-4">
              {/* <div className="badge badge-accent">{details.brand}</div> */}

              <p className="text-2xl mt-3">{details.title}</p>
              <p>
                Brand :
                <span className="hover:underline cursor-pointer text-blue-500">
                  {details.brand} || Similar products form {details.brand}
                </span>
              </p>
              <div className="divider"></div>
              <b className="text-2xl text-black">
                {NGnaira.format(details.price)}
              </b>

              <p className="text-gray-400 text-sm underline">
                {details.units === 0 ? (
                  <span className="text-red-700">Out of Stock</span>
                ) : (
                  <>In Stock</>
                )}
              </p>

              <p>
                {!details.deliveryPrice ? (
                  <span className="text-green-800">Free Delivery</span>
                ) : (
                  <span className="text-gray-500">
                    + shipping from {NGnaira.format(details.deliveryPrice)}
                  </span>
                )}
              </p>

              <h5>Rating: {details.rating}</h5>

              <button
                onClick={addToCart}
                className="btn  border-0 w-full mt-5 bg-yellow-500 text-white text-sm"
              >
                ADD TO CART
              </button>
            </div>
          </div>

          <Moredetails
            specifications={details.specifications}
            details={details.description}
            features={details.features}
          />

          <div className="p-4 bg-white rounded-lg shadow-lg mt-2">
            <h1>Similar Products</h1>

            
          </div>
        </div>

        <div className="hidden lg:inline lg:w-[30%]">
          <Delivery />
        </div>
      </div>
    </div>
  );
}
