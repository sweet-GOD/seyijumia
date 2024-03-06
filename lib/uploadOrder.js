import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const uploadOrder = async (
  phoneNumber,
  deliveryAddress,
  fullName,
  email,
  cartSum,
  deliverySum,
  cart
) => {
  const orderCollectionRef = collection(db, "orders");
  try {
    await addDoc(orderCollectionRef, {
      phoneNumber,
      deliveryAddress,
      fullName,
      email,
      cartSum,
      deliverySum,
      cart,
      // time: serverTimestamp()
    });
  } catch (error) {
    return false;
  }

  return true;
};


