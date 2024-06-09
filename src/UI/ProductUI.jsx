import React, { useState } from "react";
import ButtonAddToCart from "./ButtonAddToCart";

function ProductUI({ image, title, price, des, category, id }) {
  return (
    <div className=" p-4 border items-center border-[#262626] flex flex-col mx-5 my-5 rounded-xl lg:flex-row lg:mx-10 lg:my-10 lg:justify-around">
      <img
        src={image}
        className="w-[288px] h-[288px] rounded-md m-10 lg:w-[382px] lg:h-[288px]"
      />
      <div>
        <div className="felx flex-col justify-between my-5 lg:mt-[100px] ">
          <div>
            <p className="text-2xl mb-4 font-semibold lg:text-4xl ">{title}</p>
            <button className="bg-[#1a1a1a6f] text-white text-[12px] p-2  items-start rounded-2xl border border-[#262626] ">
              {category}
            </button>
          </div>
          <div className=" my-[50px]">
            <p className="text-[#a0a09e] text-sm lg:text-xl ">{des}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#a0a09e] text-lg lg:text-xl">Price</p>
              <p className="font-bold text-grayshade-300 text-2xl">$ {price}</p>
            </div>
            <ButtonAddToCart
              title={title}
              price={price}
              id={id}
              image={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUI;
