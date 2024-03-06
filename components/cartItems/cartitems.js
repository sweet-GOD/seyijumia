import { cartState } from "../../atom/cartAtom";
import { useRecoilState } from "recoil";
import Items from "./items";
import { useEffect, useState } from "react";
import { NGnaira } from "@/lib/help";
import { serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { uploadOrder } from "@/lib/uploadOrder";
import { Modal } from "@mui/material";
import Message from "./message";
import { useFlutterwave } from "flutterwave-react-v3";
import emailjs from "@emailjs/browser";

export default function CartItems() {
  const { data: session } = useSession();
  // React Recoil
  const [cart, setCart] = useRecoilState(cartState);
  const [cartSum, setCartSum] = useState();
  const [loading, setLoading] = useState(false);
  const [deliverySum, setDeliverySum] = useState();
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    deliveryAddress: "",
    fullName: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    var Sum = 0;
    for (var i = 0; i < cart.length; i++) {
      Sum += parseInt(cart[i].price);
    }
    setCartSum(Sum);

    var Summ = 0;
    for (var i = 0; i < cart.length; i++) {
      Summ += parseInt(cart[i].deliveryPrice);
    }
    setDeliverySum(Summ);
  }, [cart]);

  const config = {
    public_key: "FLWPUBK_TEST-d5bf583900dc8fdd264c19fcede65f68-X",
    tx_ref: Date.now(),
    amount: cartSum + deliverySum,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phoneNumber,
      name: formData.fullName,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const submitFrom = async (event) => {
    event.preventDefault();

    if (!formData.phoneNumber || !formData.deliveryAddress) {
      alert("Please fill in your phone number and delivery address");
      return;
    }
    if (cart.length === 0) {
      alert("Cart cannot be empty dumbo!");
      return;
    }
    setLoading(true);

    const result = await uploadOrder(
      formData.phoneNumber,
      formData.deliveryAddress,
      formData.fullName,
      formData.email,
      // session.user.name,

      cartSum,
      deliverySum,
      cart
    );

    emailjs.send(
      "service_wj253ot",
      "template_1a4fcut",
      {
        Subject: "New Order!",
        message: `Fullname: ${formData.fullName} \n\n Email: ${formData.email} \n\n Number: ${formData.phoneNumber} \n\n Address: ${formData.deliveryAddress} \n\n CartSum: ${cartSum}`,
        To: "onasanyaoluwaseyi40@gmail.com",
        From: "thehello397@gmail.com",
      },
      "xS09tGWE1Hhi4yAUf"
    );

    setLoading(false);

    if (result) {
      // success
      useFlutterwave(config);

      setCart([]);
      handleOpen();
    } else {
      // failure
      alert("Error uploading order");
    }
  };

  const removeItem = (index) => {
    const newcart = [...cart];
    newcart.splice(index, 1);

    setCart(newcart);
  };

  return (
    <div className="p-3 md:flex md:space-x-5">
      <div className="bg-white shadow-lg p-3 rounded-t-lg text-xl text-black uppercase w-[100%] md:w-[65%]">
        <span>Cart ({cart.length})</span>
        <div className="divider"></div>
        {cart.length === 0 && <div className="capitalize">Cart is Empty</div>}
        {cart.map((item, index) => (
          <Items
            key={item.id + Math.random()}
            item={item}
            index={index}
            removeItem={removeItem}
            cartSum={cartSum}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>

      <div className="mt-3 text-xl text-black md:w-[35%]">
        <div className="bg-white w-full p-3 rounded-t-lg shadow-lg">
          <span className="text-black p-3 rounded-t-lg text-sm uppercase">
            Cart Summary
          </span>
          <div className="divider"></div>
          <div>
            Sub Total :{" "}
            {deliverySum
              ? NGnaira.format((cartSum + deliverySum) * quantity)
              : NGnaira.format(cartSum * quantity)}
          </div>
          <p className="text-sm text-gray-400  py-2">
            {!deliverySum ? (
              <>Delivery Fee : FREE </>
            ) : (
              <>Delivery Fee : {NGnaira.format(deliverySum)}</>
            )}
          </p>

          <div className="mt-3">
            <input
              type="text"
              // value={session?.user.name}
              placeholder="Fullname"
              // disabled
              className="input input-bordered input-warning w-full"
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              // value={session?.user.name}
              placeholder="Email"
              // disabled
              className="input input-bordered input-warning w-full"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-warning w-full"
              onChange={(event) =>
                setFormData({ ...formData, phoneNumber: event.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <textarea
              className="textarea textarea-warning w-full"
              placeholder="Delivery Address, Please add landmark areas near your location."
              onChange={(event) =>
                setFormData({
                  ...formData,
                  deliveryAddress: event.target.value,
                })
              }
            ></textarea>
          </div>

          <button
            onClick={submitFrom}
            className={`${
              session ? "btn-disabled" : ""
            } text-white btn btn-warning  w-full ${loading ? "loading" : ""}`}
          >
            Checkout (
            {deliverySum
              ? NGnaira.format((cartSum + deliverySum) * quantity)
              : NGnaira.format(cartSum * quantity)}
            )
          </button>
          {/* {!session && (
            <p className="text-sm text-gray-300" align="center">
              Please Login to be able to checkout
            </p>
          )} */}
        </div>

        <div></div>

        {/* <PaymentComponent cartSum={cartSum} formData={formData} /> */}

        <div className="bg-white w-full p-3  text-sm rounded-b-lg shadow-lg mt-3">
          Returns are easy Free return within 15 days for Official Store items
          and 7 days for other eligible items
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Message />
          </Modal>
        </div>
      </div>
    </div>
  );
}
