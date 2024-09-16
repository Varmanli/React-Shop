import React, { useContext, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdLightMode, MdOutlineLogin } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { ContextProvider } from "../feature/context/Context";

function Header() {
  const [menu, setMenu] = useState(false);
  const [darkmod, setDarkmod] = useState(true);
  const { cartItems } = useContext(ContextProvider);
  function setMenuHandler() {
    setMenu(!menu);
  }
  return (
    <header className="felx flex justify-between p-3 items-center border-b border-[#262626]">
      {menu && <Menu toggle={setMenuHandler} darkmod={darkmod} />}
      <button className="text-[38px] text-[#8254F8] ">
        <RiMenu2Line
          className="border p-1 rounded-md border-[#2F2F2F] "
          onClick={() => setMenuHandler()}
        />
      </button>
      <div>
        <h1 className="lg:text-[44px]  text-[24px] font-bold">React Shop</h1>
      </div>
      <div className="flex justify-between  items-center gap-4 md:mr-[180px] m-2">
        <Link to={"/login"}>
          <button className="felx flex gap-2 justify-between items-center  p-1 lg:text-[32px] text-[22px]">
            <MdOutlineLogin />
          </button>
        </Link>
        <button className="lg:text-[32px] text-[22px]">
          {darkmod ? (
            <CiDark
              onClick={() => (
                (document.body.style.background = "#fff"),
                (document.body.style.color = "black"),
                setDarkmod(false)
              )}
            />
          ) : (
            <MdLightMode
              onClick={() => (
                (document.body.style.background = "black"),
                (document.body.style.color = "#fff"),
                setDarkmod(true)
              )}
            />
          )}
        </button>
        <Link to={"/ShoppingCart"}>
          <button className=" lg:text-[26px] text-[22px] text-[#8254F8] mt-2">
            <FiShoppingCart className="relative" />
            <button className="absolute rounded-sm top-12 left-88 bg-[#8254F8] text-white text-[13px] px-1 text-center">
              {cartItems
                ?.map((i) => i.count)
                ?.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )}
            </button>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
