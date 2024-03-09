import NumberFormat from "react-number-format";
import Link from "next/link";

export default function Post({ title, image, price, id, discountPercentage }) {
  return (
    <>
      <div className=" relative  flex flex-col w-full md:w-[200px] p-4 md:p-2 ">
        
        <div className="badge border-0 bg-transparent px-8 text-yellow-400 mt-2 backdrop-blur shadow font-bold">{discountPercentage ? <> -{discountPercentage}% </> : "InStock"}</div>
        <Link href={`/product/${id}`} className="hover:underline  ">
          <img
            src={image}
            className="mx-2 w-[100%] h-[120px] md:h-[200px]   rounded-t-none rounded-2xl"
            alt={title}
          />
          <div className="py-3 ps-1">
            <p className="justify-center text-start ps-2  md:text-sm  text-gray-800 line-clamp-1">
              {title}
            </p>
            <h6 className="font-bold text-start ps-2  md:text-sm  text-gray-800">{price}</h6>
          </div>
        </Link>
      </div>
    </>
  );
}
