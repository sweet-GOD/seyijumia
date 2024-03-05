import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import CableIcon from "@mui/icons-material/Cable";
import DiamondIcon from "@mui/icons-material/Diamond";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import CategoryIcon from "@mui/icons-material/Category";

import MenuIcon from "@mui/icons-material/Menu";
import SidebarMenuItem from "../header/SidebarMenuItem";
import { signIn } from "next-auth/react";

export default function Elementthree() {
  return (
    <>
      <div className="dropdown dropdown-bottom cursor-pointer md:hidden">
        <label tabIndex={0} className=" m-1">
          <MenuIcon className="my-auto ml-1 mt-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white mt-3 w-[60vw]"
        >
          <div className="items-start bg-white p-2 mx-2 h-[100%]">
            <SidebarMenuItem
              link="groceries"
              text="Supermarket"
              Icon={LocalGroceryStoreIcon}
              active
            />
            <SidebarMenuItem
              link="skincare"
              text="Health & Beauty"
              Icon={MedicationLiquidIcon}
            />
            <SidebarMenuItem
              link="home-decoration"
              text="Home & Office"
              Icon={HomeWorkIcon}
            />
            <SidebarMenuItem
              link="appliances"
              text="Appliances"
              Icon={MicrowaveIcon}
            />
            <SidebarMenuItem
              link="smartphones"
              text="Smartphones"
              Icon={PhoneAndroidIcon}
            />
            <SidebarMenuItem
              link="laptops"
              text="Computing"
              Icon={ComputerIcon}
            />
            <SidebarMenuItem
              link="electronics"
              text="Electronics"
              Icon={CableIcon}
            />
            <SidebarMenuItem link="fashion" text="Fashion" Icon={DiamondIcon} />
            <SidebarMenuItem
              link="babyproducts"
              text="Baby Products"
              Icon={ChildFriendlyIcon}
            />
            <SidebarMenuItem
              link="gaming"
              text="Gaming"
              Icon={SportsEsportsIcon}
            />
            <SidebarMenuItem
              link="sportinggoods"
              text="Sporting Goods"
              Icon={DownhillSkiingIcon}
            />
            <SidebarMenuItem
              link="othercategories"
              text="Other Categories"
              Icon={CategoryIcon}
            />
            <button onClick={signIn} className="btn my-3 w-full shadow">
              Sign In
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}
