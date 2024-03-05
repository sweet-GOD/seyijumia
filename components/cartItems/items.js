import { fetchProductById } from "@/lib/fetchData";
import { NGnaira } from "@/lib/help";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Items({ item, index, removeItem }) {
  return (
    <div
      className="flex space-x-5 p-3"
      style={{ borderBottom: "2px solid #ededed" }}
    >
      <img
        className="w-[150px] h-[150px]"
        src={item.images.length > 10 ? item.images : item.images[0]}
        alt={item.title}
      />

      <div>
        <span className="text-sm line-clamp-2">
          <Link href={item.id.length > 4 ? `/productfir/${item.id}` : `/product/${item.id}`} className="hover:underline">
            {item.title}
          </Link>
        </span>

        <p className="text-gray-400 text-sm capitalize">
          {item.units === 0 ? (
            <span className="text-red-700 text-sm">Out of Stock</span>
          ) : (
            <>In Stock</>
          )}
        </p>

        <p>
          {!item.deliveryPrice ? (
            <span className="text-green-800 text-sm">{NGnaira.format(item.price)}</span>
          ) : (
            <span className="text-gray-500 text-sm">
             {NGnaira.format(item.price)} + shipping fee {NGnaira.format(item.deliveryPrice)} 
            </span>
          )}
        </p>

        <button
          className="btn btn-warning btn-sm btn-outline mt-4"
          onClick={() => removeItem(index)}
        >
          <DeleteIcon /> REMOVE
        </button>
        <div className="mt-2">
          <button
            className="btn btn-warning btn-sm btn-outline"
            // onClick={() => removeItem(index)}
          >
            +
          </button>
          <button
            className="btn btn-warning btn-sm btn-outline ms-3"
            // onClick={() => removeItem(index)}
          >
            -
          </button>
        </div>
      </div>

      <div className="hidden md:inline">
        <b className="text-xl">{NGnaira.format(item.price)}</b>
      </div>
    </div>
  );
}
