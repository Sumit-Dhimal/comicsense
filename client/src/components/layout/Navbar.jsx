import { useEffect, useState } from "react";
import "../components.css";
import SideNav from "./SideNav";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png"

import { LuAlignJustify } from "react-icons/lu";
import { IoCartSharp, IoHeartSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll(); // set initial state

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <nav
        className={`
          w-full fixed top-0 left-0 z-50
          transition-all duration-300
          ${
            isScrolled
            ? "bg-gray-50 shadow-md py-1"
            : "bg-transparent py-6"
          }

        `}
      > 
        <div className="relative max-w-340 mx-auto h-20 flex justify-between items-center px-6">
          <div
            onClick={() => setIsOpen(true)}
          >
            <LuAlignJustify className="nav-btns" />
          </div>
           
          <Link 
            to='/'
            className="absolute left-1/2 -translate-x-1/2 top-0"
          >
            <img 
              src={` ${isScrolled? logo2: logo}`} 
              alt="logo"  
              className="h-20 w-auto cursor-pointer"
            />
          </Link>
          

          <div className="flex gap-4 items-center">
            <IoSearch className="nav-btns" />
            <IoHeartSharp className="nav-btns" />
            <IoCartSharp className="nav-btns" />
          </div>
        </div>

      </nav>

      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
};

export default Navbar;
