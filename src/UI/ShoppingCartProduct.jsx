import React from "react";
import ButtonAddToCart from "./ButtonAddToCart";

function ShoppingCartProduct({ title, image, price, count, id }) {
  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row-reverse lg:justify-between lg:gap-[200px] border border-[#262626]  p-5 rounded-2xl  lg:items-center m-3">
      <div className="flex lg:flex-col justify-between lg:justify-center items-center gap-4">
        <ButtonAddToCart title={title} price={price} id={id} image={image} />
        <p>${price * count}</p>
      </div>
      <div className="flex  justify-center items-center gap-4">
        <img src={image} className="h-[100px] w-[100px]" />
        <p>{title.slice(0, 20)}</p>
      </div>
    </div>
  );
}

export default ShoppingCartProduct;
