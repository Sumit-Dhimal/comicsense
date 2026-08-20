import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components.css";
import SideNav from "./SideNav";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png"

import { LuAlignJustify } from "react-icons/lu";
import { IoCartSharp, IoHeartSharp, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
            ? "bg-gray-50 py-1"
            : "bg-transparent py-4"
          }

          ${
            isHome ? "" : "shadow-md"
          }

        `}
      > 
        <div className="relative max-w-340 mx-auto h-18 flex justify-between items-center px-6">
          
          {/* hamburger menu */}
          <div
            onClick={() => setIsOpen(true)}
          >
            <LuAlignJustify className="nav-btns" />
          </div>
           
           {/* logo icon */}
          <Link 
            to='/'
            className="absolute left-1/2 -translate-x-1/2 top-0" 
          >
            <img 
              src={` ${isScrolled? logo2: logo}`} 
              alt="logo"  
              className="h-18 w-auto cursor-pointer"
            />
          </Link>
          
          {/* btns */}
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
