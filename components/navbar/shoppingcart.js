import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Shoppingcart({ items }) {
  return (
    <Link href="/cart">
      <span className="relative">
        <ShoppingCartIcon className="h-12 mr-2" />
        <span className=" badge badge-warning text-white mr-5">{items}</span>
        Cart
      </span>
    </Link>
  );
}
