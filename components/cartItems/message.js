import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Link from "next/link";

export default function Message() {
  return (
    <div
      align="center"
      className="absolute h-[300px] flex items-center justify-center flex-col gap-8 w-[90%] top-[20%] left-[5%] md:w-[50%] md:top-[30%] md:left-[25%]  lg:w-[30%] lg:top-[30%] lg:left-[33%] bg-white p-5  rounded-lg"
    >
      <span className="bg-yellow-200 shadow-lg font-bold text-gray-800  p-3 px-5 align-center rounded-3xl">
        <ShoppingCartIcon className="h-12 mr-3" />
        Order Received Successfully
      </span>
      <h2 className="my-3 text-xl">Congraulations Your Order has been Placed</h2>

      <Link href="/" className="btn btn-warning w-full text-white">
        Go Home
      </Link>
    </div>
  );
}
