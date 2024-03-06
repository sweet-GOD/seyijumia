"use client";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Elementthree from "./elementthree";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import ShoppingCart from "./shoppingcart";
import { cartState } from "../../atom/cartAtom";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function Navbar() {
  const [acDrop, setAcDrop] = useState(true);
  const [helpDrop, setHelpDrop] = useState(true);

  const router = useRouter();
  const { data: session } = useSession();
  // React Recoil
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <>
      <div className="bg-warning  mb-0">
        <div className=" mx-auto w-full align-middle md:max-w-7xl ">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/free-delivery/2022/June/Free-delivery-top-strip.gif"
            alt="navimage"
          />
        </div>
      </div>

      <section
        id="smallHeader"
        className="hidden lg:inline justify-center align-center pl-5"
      >
        <div className="container flex pt-0 justify-start items-center">
          <p className="ml-10">
            
            <a style={{ color: "#ff9900" }} className="underLine" href="">
              Sell on Jumia
            </a>
          </p>
          <span className="flex justify-left align-center gap-6">
            <p>
              <a href="" className="text-dark fw-bold">
                JUMIA
              </a>
              <img
                src="asset/svg_.svg"
                style={{ width: "10px" }}
                className="jumiaLogo"
                alt=""
              />
            </p>
            <p className="hoverBlue">
              <ShieldRoundedIcon />
              <a href="" className="ms-1 fw-bold hoverBlue">
                PAY
              </a>
            </p>
            <p className="hoverOrange">
              <DinnerDiningIcon />
              <a href="" className="ms-1 fw-bold hoverOrange">
                FOOD
              </a>
            </p>
            <p className="hoverOrange">
              <LocalShippingIcon />
              <a href="" className="ms-1 fw-bold hoverOrange">
                LOGISTICS
              </a>
            </p>
          </span>
        </div>
      </section>

      <div className="bg-transparent backdrop-blur-3xl items-center  NavBarr ">
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2 pe-4">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>

          <div className="flex srcCon">
            <input
              type="text"
              placeholder="SEARCH"
              className="input border-0 input-bordered bg-white  w-full outline-none  my-auto hidden lg:inline"
            />

            <button className="ms-3 btn btn-warning text-white hidden md:inline srcBtn">
              SEARCH
            </button>
          </div>

        <div className="flex ">
          <span className="hidden md:inline pt-2 ">
            {session ? (
              <div className="flex items-center">
                <PermIdentityIcon className="h-10 my-auto" />
                <span className="my-auto pe-3 cursor-pointer" onClick={signOut}>
                  HI, {session.user.name.slice(0,10)}
                </span>
                
                <div className="position-relative">
                  <button
                    onClick={() => setHelpDrop((prev) => !prev)}
                    className="flex hoverOrange justify-center items-center px-3"
                  >
                    <h4>
                      <HelpOutlineIcon />
                    </h4>
                    <h6 className="px-2">HELP</h6>
                    <i>
                      <ExpandMoreIcon />
                    </i>
                  </button>
                  {helpDrop === false && (
                    <div className="AccountDrop shadow-sm rounded-2 bg-white ">
                      <div className="border-bottom pt-3">
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Help Center</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Place an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Payment options</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Track an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Cancel an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Returns & Refunds</p>
                        </span>
                      </div>
                      <div className="px-3">
                        <button className="btn my-3 shadow">
                          <i className="bi bi-chat-dots pe-2"></i> LIVE CHAT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="position-relative flex">
                <button
                  onClick={() => setAcDrop((prev) => !prev)}
                  className="flex AccBtn hoverOrange justify-center items-center px-3 "
                >
                  <h4>
                    <PermIdentityIcon />
                  </h4>
                  <h6 className="px-2">Account</h6>
                  <i>
                    <ExpandMoreIcon />
                  </i>
                </button>
                {acDrop === false && (
                  <div className="AccountDrop shadow-sm rounded-2 bg-white ">
                    <div className="px-3">
                      <button onClick={signIn} className="btn my-3 shadow">
                        SIGN IN
                      </button>
                    </div>
                    <div className=" pt-0">
                      <span className="flex items-center px-3 py-3">
                        <h4 className=" pe-2">
                          <PermIdentityIcon />
                        </h4>
                        <p style={{ fontSize: "14px" }}>My Account</p>
                      </span>
                      <span className="flex items-center px-3 py-3">
                        <h6 className="pe-3">
                          <InventoryIcon />
                        </h6>
                        <p style={{ fontSize: "14px" }}>Orders</p>
                      </span>
                      <span className="flex items-center px-3 py-3">
                        <h6 className="pe-3">
                          <FavoriteBorderIcon />
                        </h6>
                        <p style={{ fontSize: "14px" }}>Saved Items</p>
                      </span>
                    </div>
                  </div>
                )}

                <div className="position-relative">
                  <button
                    onClick={() => setHelpDrop((prev) => !prev)}
                    className="flex hoverOrange justify-center items-center px-3 "
                  >
                    <h4>
                      <HelpOutlineIcon />
                    </h4>
                    <h6 className="px-2">HELP</h6>
                    <i>
                      <ExpandMoreIcon />
                    </i>
                  </button>
                  {helpDrop === false && (
                    <div className="AccountDrop shadow-sm rounded-2 bg-white ">
                      <div className="border-bottom pt-3">
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Help Center</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Place an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Payment options</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Track an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Cancel an order</p>
                        </span>
                        <span className="flex px-3 pt-3">
                          <p style={{ fontSize: "14px" }}>Returns & Refunds</p>
                        </span>
                      </div>
                      <div className="px-3">
                        <button className="btn my-3 shadow">
                          <i className="bi bi-chat-dots pe-2"></i> LIVE CHAT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </span>

          <ShoppingCart items={cart.length} />
          </div>

        </div>
      </div>
    </>
  );
}
