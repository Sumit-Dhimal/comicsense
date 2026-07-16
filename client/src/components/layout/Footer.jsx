import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let categories = ["Hoodie", "T-shirt", "Joggers", "Keychains"];
  let company = ["About", "Cateory"];

  return (
    <div className="bg-gray-800 text-gray-50 w-full h-64 py-4">
      <div className="max-w-350 mx-auto flex justify-between">
        {/* Description */}
        <div className="w-[30%]">
          <h2 className="font-bold text-2xl mb-4">Animart</h2>
          <p className="text-gray-400">Experience the Great Outdoors in style with Animart. Shop now and gear up for adventure in Animart</p>
        </div>    

        {/* Navigation */}
        <div className="flex gap-12">
          <div className="flex flex-col">

            <h3 className="font-semibold text-xl mb-4">Category</h3>
            {
              categories.map((item, idx) => (
                <Link id={idx} className="text-gray-400">
                  {item}
                </Link>
              ))
            }
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-xl mb-4">Company</h3>
            
            {company.map((item, index) => (
              <Link className="text-gray-400">{item}</Link>
            )) }
          </div>
        </div>

        {/* News letter */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Subscribe to our News letter</h3>
          <input 
            type="email"
            placeholder="Enter your email"
            className="bg-gray-50 text-gray-800  px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
      
    </div>
  )
};

export default Footer;
