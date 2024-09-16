import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Menu({ toggle, darkmod }) {
  return (
    <div
      className={
        darkmod
          ? "fixed top-0 left-0 w-full h-full bg-[#141414] text-white "
          : "fixed top-0 left-0 w-full h-full bg-white text-black"
      }
    >
      <button
        className="text-[38px] text-[#8254F8] m-5 "
        onClick={() => toggle()}
      >
        <RiMenu2Line className="border p-1 rounded-md border-[#2F2F2F]" />
      </button>
      <div className="flex flex-col justify-center mt-[150px] items-center gap-7 text-2xl">
        <Link to={"/"}>
          <a className=" cursor-pointer" onClick={() => toggle()}>
            Products
          </a>
        </Link>
        <Link to={"/login"}>
          <a className=" cursor-pointer" onClick={() => toggle()}>
            Login
          </a>
        </Link>
        <Link to={"/About"}>
          <a className=" cursor-pointer" onClick={() => toggle()}>
            About
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Menu;

<div>
  <h4></h4>
</div>;
