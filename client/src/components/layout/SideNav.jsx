import { LuUser, LuX } from "react-icons/lu";
import '../components.css';
import { Link } from "react-router-dom";

import {FaDiscord, FaInstagram, FaYoutube, FaGithub} from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";

const categories = [
  {
    title: "Cosplay"
  }, 
  {
    title: "Clothing"
  }, 
  {
    title: "Jewellery"
  }, 
  {
    title: "Accessories"
  }, 
  {
    title: "Collectibles & Decor"
  },
  {
    title: "Bizzare Anime Finds"
  } 
];
const supports = ["Coupons & Offers", "Photos & Reviwes", "Track Order", "Need Help?", "About Us"];

const SideNav = ({isOpen, onClose}) => {
  return (
    <>

      {/* overlay */}
      <div 
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          ${isOpen? "opacity-100 visible": "opacity-0 invisible"}
        `}
      />

      {/* side navigation */}
      <aside
        className={`
          fixed top-0 left-0
          min-w-lg h-screen shadow-xl bg-indigo-700 z-50
          transition-transform duration-300
          ${isOpen? "translate-x-0": "-translate-x-full"}
        `}
          
      > 

        {/* close btn */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-50 border-2 border-gray-50 hover:border-pink-500 transition-colors ease-in-out rounded-md p-1"
          >
            <LuX className="text-2xl cursor-pointer" />
          </button>
        </div>
        
        {/* social btns */}
        <div className="flex gap-3 mx-8 mt-8 border-b-2 border-gray-50 pb-4">
          <FaDiscord className="sidebar-btns" />
          <FaInstagram  className="sidebar-btns" />
          <FaYoutube className="sidebar-btns" />
          <FaGithub className="sidebar-btns" />
        </div>
        
        {/* Navigation btns */}
        <div className="flex gap-1 mx-8 mt-4">
          <button className="sidebar-black-btns">New Arrivals</button>
          <button className="sidebar-black-btns">Best Sellers</button>
          <button className="sidebar-black-btns">Clearance Sale</button>
        </div>
        
        {/* Categories links */}
        <div className="py-8 mx-8 border-b-2 border-gray-50">
          <ul className="flex flex-col gap-2">
          {
            categories.map((cateory, idx) => (
              <li 
                key={idx}
                className="sidebar-links"
              >
                <Link to="123">
                  {cateory.title}
                </Link>
              </li>
            )
            )
          }
          </ul>
        </div>

        {/* login and others */}
        <div className="py-6 mx-8">

          {/* login */}
          <Link to="/login" onClick={onClose}>
            <div className="
              pb-8 w-fit flex items-center gap-2 
              text-sm text-gray-50 hover:text-pink-600 cursor-pointer
            ">
              
              <LuCircleUserRound size={24} />

              <p className="uppercase font-extralight">
                Login/Register
              </p>
            </div>
          </Link>
          

          {/* other links */}
          <div className="flex flex-col gap-1">
            {
              supports.map((item, idx) => (
                <Link
                  key={idx}
                  to="123"
                  className="sidebar-links text-sm"
                >
                  { item }
                </Link>
              ))
            }
          </div>
        </div>

      </aside>
    </>
  );
};

export default SideNav;
