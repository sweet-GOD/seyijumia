import NumberFormat from "react-number-format";
import Link from "next/link";

export default function Post({ title, image, price, id, discountPercentage }) {
  return (
    <>
      <div className="carousel-item relative flex flex-col w-[120px] md:w-[200px] p-2">
        
        <div className="badge border-0 bg-transparent px-8 text-orange-400 mt-2 backdrop-blur shadow font-bold">{discountPercentage ? <> -{discountPercentage}% </> : ""}</div>
        <Link href={`/product/${id}`} className="hover:underline  ">
          <img
            src={image}
            className="mx-2 w-[100%] h-[120px] md:h-[200px]"
            alt={title}
          />
          <div className="py-3 ps-1">
            <p className="justify-center text-start ps-2 text-black line-clamp-1">
              {title}
            </p>
            <h6 className="font-bold text-start ps-2 text-black">{price}</h6>
          </div>
        </Link>
      </div>
    </>
  );
}
