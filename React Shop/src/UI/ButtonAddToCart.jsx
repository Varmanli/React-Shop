import React, { useContext, useState } from "react";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { ContextProvider } from "../feature/context/Context";

function ButtonAddToCart({ id, price, title, image }) {
  const { addToCart, removeFromCart, cartItems } = useContext(ContextProvider);
  return (
    <div>
      {!cartItems?.filter((row) => row.id === id)[0]?.count ? (
        <button
          className="ml-[80px] text-white text-[18px] bg-[#703BF7] py-1 px-4 rounded-lg"
          onClick={() => addToCart(id, title, price, image)}
        >
          Add To Cart
        </button>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center shadow-xl  px-2 rounded-lg  p-1">
            <button
              className="text-[26px] text-[#703BF7] rounded-lg "
              onClick={() => addToCart(id, title, price, image)}
            >
              <FaRegPlusSquare />
            </button>
            <h1 className="text-[20px] mx-4">
              {cartItems?.filter((row) => row.id === id)[0]?.count}
            </h1>
            <button
              className="text-[26px] text-[#703BF7] rounded-lg"
              onClick={() => removeFromCart(id)}
            >
              {cartItems?.filter((row) => row.id === id)[0]?.count > 1 ? (
                <FaRegMinusSquare />
              ) : (
                <MdDeleteForever />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonAddToCart;
