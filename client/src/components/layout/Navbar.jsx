import { useState } from "react";
import logo from "../../assets/logo.png";
import "../components.css";
import SideNav from "./SideNav";

import { LuAlignJustify } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-40"
      > 
        <div className="mx-auto h-20 flex justify-between max-w-340 items-center px-6 py-12">
          <div
            onClick={() => setIsOpen(true)}
          >
            <LuAlignJustify className="nav-btns" />
          </div>

          <img 
            src={logo} 
            alt="logo"  
            className="w-fit h-20 cursor-pointer"
          />

          <div className="flex gap-4 items-center">
            <LuSearch className="nav-btns" />
            <LuHeart className="nav-btns" />
            <LuShoppingCart className="nav-btns" />
          </div>
        </div>

      </nav>

      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
};

export default Navbar;
