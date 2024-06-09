import React, { useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

function Category() {
  const [active, setActive] = useState(window.location.pathname);
  return (
    <div className="justify-start  border border-[#262626] rounded-lg  w-[95%] lg:w-[15%] m-auto mt-10 items-center">
      <div className="flex items-center m-5 gap-1 text-left">
        <TbCategoryPlus className="text-[24px] text-[#8254F8] " />
        <h1 className="text-[20px]">Category :</h1>
      </div>
      <div className="flex flex-col gap-4 m-4 text-left items-start">
        <Link to={"/"}>
          <button
            className={active === "/" ? "border-b-[3px] border-[#8254F8]" : ""}
          >
            All Product
          </button>
        </Link>
        <Link to={"/Electronics"}>
          <button
            className={
              active === "/Electronics" ? "border-b-[3px] border-[#8254F8]" : ""
            }
          >
            Electronics
          </button>
        </Link>
        <Link to={"/Jewelery"}>
          <button
            className={
              active === "/Jewelery" ? "border-b-[3px] border-[#8254F8]" : ""
            }
          >
            Jewelery
          </button>
        </Link>
        <Link to={"/MensClothing"}>
          <button
            className={
              active === "/MensClothing"
                ? "border-b-[3px] border-[#8254F8]"
                : ""
            }
          >
            Men's clothing
          </button>
        </Link>
        <Link to={"/WomensClothing"}>
          <button
            className={
              active === "/WomensClothing"
                ? "border-b-[3px] border-[#8254F8]"
                : ""
            }
          >
            Women's clothing
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
