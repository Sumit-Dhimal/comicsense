import { useState } from "react";
import {Link} from "react-router-dom";

import { LuHeart } from "react-icons/lu";

const ProductCard = ({product}) => {
  const discount = 23;
  const [sizeSelected, setSizeSelected] = useState(null);

  function handleSizeSelection(index) {
    if(index == sizeSelected) {
      setSizeSelected(null);
    } else {
      setSizeSelected(index);
    }
  }

  return (
    <div className="relative w-72 shrink-0 border border-gray-300 shadow-lg">

      {/* product image */}
      <div className="overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={`Img - ${product.name}`} 
          className="w-full h-96 object-cover cursor-pointer transition-transform duration-500 hover:scale-110"
        />

      </div>

      {/* heart button */}
      <div 
        className="
          absolute top-3 right-3
          w-8 h-8
          rounded-full cursor-pointer
          flex justify-center items-center
          bg-white/90 backdrop-blur-sm
          hover:bg-pink-500 hover:text-gray-50
          transition-colors ease-in-out
        "
        >
        <LuHeart />
      </div>
        
      {/* product details */}
      <div className="py-4">
        <h3 className="text-gray-500 text-center text-sm">{product.name}</h3>

        {/* product size */}
        <div className="flex justify-center gap-2 w-full my-2">  
          {
            product.size?.map((size, index) => (
              <button 
                key={index}
                onClick={() => handleSizeSelection(index)}
                className={`
                  border-2 border-gray-300 hover:border-pink-600 transition-colors ease-in-out  px-2 py-1 rounded-sm text-xs  cursor-pointer
                  ${
                    sizeSelected === index ? 
                    "bg-pink-600 text-gray-50" : "text-gray-800"}
                `}
              > 
                {size} 
              </button>
            ))
          }
        </div>
        
        {/* product name and price */}
        <div className="text-sm mt-4 px-2 py-2 flex items-center justify-between border-y border-gray-200">
          {/* rupee sign: &#8377; */}
          <p> 
            <span className="mr-2"> &#8377; {Math.floor(discount/100 * product.price)} </span>
            <span className="line-through text-gray-400"> &#8377; {product.price} </span>
            <br />
            <span className="font-semibold text-green-600"> {discount}% Off </span>
          </p>
          
          {
            sizeSelected === null ? 
            <button  
              className="cursor-pointer border-l border-gray-300 w-36 h-12"
            > Select size </button>
            :
            <button  
              className="cursor-pointer border-l border-gray-300 w-36 h-12"
            >
              Add to cart
            </button>
          }
         
        </div>
      </div>
      
    </div>
  )
};

export default ProductCard;
