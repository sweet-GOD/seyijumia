import React from "react";
import Link from "next/link";

export default function Recommended() {
  return (
    <div className="pt-5  reco">
      {/* carousel carousel-center */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0 w-full text-black bg-white pb-3 shadow-lg rounded-lg">
        <div className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px] ">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Artboard_13.png"
            className="rounded-box"
            alt="image"
          />

          <span className="justify-center text-center pb-2">Clearance Sale</span>
        </div>
        <div className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/5k_store.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">N5,000 Store</span>
        </div>
        <Link href={'/category/smartphones'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Smartphone.jpg"
            className="rounded-box"
            alt="image"
          />

          <span className="justify-center text-center pb-2">Phones & Tablets</span>
        </Link>
        <Link href={'/category/groceries'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Groceries.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Groceries</span>
        </Link>
        <Link href={'/category/laptops'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/conmputing.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Computing Deals</span>
        </Link>
        
        <Link href={'/category/electronics'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/tv.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Televisions</span>
        </Link>
        <Link href={'/category/appliances'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Fridge.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Refridgerators</span>
        </Link>
        <Link href={'/category/smartphones'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/mobile_appliances.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Mobile Accessories</span>
        </Link>
        <Link href={'/category/othercategories'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/generators.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Generators</span>
        </Link>
        <Link href={'/category/othercategories'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/mens_sneakers.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Men's Sneakers</span>
        </Link>
        <Link href={'/category/othercategories'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Artboard_12.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Official Stores</span>
        </Link>
        <Link href={'/category/othercategories'} className="carousel-item rounded-lg  flex flex-col w-[100%] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Artboard_14.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center pb-2">Global Bestseller</span>
        </Link>
      </div>
    </div>
  );
}
