import NumberFormat from "react-number-format";
import Link from "next/link";

export default function Post({ title, image, price, id }) {
  return (
    <>
      <div className="carousel-item  flex flex-col w-[120px] md:w-[200px] p-2">
        <img
          src={image}
          className="mx-2 w-[100%] h-[120px] md:h-[200px]"
          alt={title}
        />
        <Link href={`/product/${id}`}  className="hover:underline py-3 ps-1">
          <p  className="justify-center text-start ps-2 text-black line-clamp-1">
            {title}
          </p>
          <h6 className="font-bold text-start ps-2 text-black">{price}</h6>
        </Link>
      </div>
    </>
  );
}
