import React, { useContext, useState } from "react";
import { ContextProvider } from "../feature/context/Context";
import ShoppingCartProduct from "../UI/ShoppingCartProduct";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cartItems } = useContext(ContextProvider);

  return (
    <div className="flex justify-around items-center m-10 flex-col border border-[#262626]  rounded-xl">
      {cartItems
        ?.map((i) => i.count)
        ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >
      0 ? (
        <>
          <h4 className="text-[#703BF7]  text-4xl m-auto mt-10 mb-5 font-bold">
            Shopping Cart
          </h4>
          {cartItems?.map(
            (item) =>
              item.count > 0 && (
                <ShoppingCartProduct
                  title={item.title}
                  price={item.price}
                  count={item.count}
                  image={item.image}
                  id={item.id}
                  key={item.id}
                />
              )
          )}
          <button className="rounded-lg text-white text-[20px] my-10 font-bold py-4 w-[250px] border bg-[#703BF7] border-[#262626]">
            Check out
          </button>
        </>
      ) : (
        <>
          <h4 className="text-[#703BF7]  text-4xl m-auto mt-10 mb-5 font-bold">
            Shopping Cart empty
          </h4>
          <Link to={"/"}>
            <button className="rounded-lg text-white text-[20px] my-10 font-bold py-4 w-[250px] border bg-[#703BF7] border-[#262626]">
              Back to products page
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
