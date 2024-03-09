import Link from "next/link";

export default function SidebarMenuItem({ link, text, Icon, active }) {
  return (
    <div className="hoverEffect flex items-center text-black justify-start text-sm space-x-3 hover:bg-yellow-100 rounded-lg rounded-t-none">
      <Link href={`/category/${link}`} className="m-1 ps-1">
        <Icon className="h-7 me-1" />
        <span className={`${active && "font-bold"} inline`}>{text}</span>
      </Link>
    </div>
  );
}
