import React, { useContext } from "react";
import { ContextProvider } from "../feature/context/Context";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./ButtonAddToCart";
import { BiLinkExternal } from "react-icons/bi";

function ProductList({ image, title, price, category, id }) {
  const { setProductId } = useContext(ContextProvider);
  return (
    <div
      className=" flex flex-col justify-center gap-4 items-center border border-[#262626]  w-[320px] p-4 rounded-lg m-auto mt-10"
      onClick={() => setProductId(id)}
    >
      <div>
        <Link to={"/Product"}>
          <img
            src={image}
            className="w-[288px] h-[288px] rounded-md lg:w-[382px] lg:h-[288px]"
          />
          <div className="flex flex-col mt-3 justify-start items-start my-4">
            <h1 className="text-[20px] font-bold">{title.slice(0, 20)}</h1>
          </div>
          <div>
            <button className="bg-[#1A1A1A] text-white text-[12px] p-2 my-4 items-start rounded-2xl border border-[#262626] ">
              {category}
            </button>
          </div>
        </Link>
        <div className="felx flex m-2 justify-between items-center">
          <div>
            <h1 className="text-[#a0a09e] text-[12px]">Price</h1>
            <h1 className="font-bold">${price}</h1>
          </div>
          <ButtonAddToCart title={title} price={price} id={id} image={image} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
