import "./pages.css";
import { useStatem, useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import CategoryCard from "../components/ui/CategoryCard.jsx";

// datas
import tapestry from "../data/tapestry.json";
import { categories1 } from "../data/categories.js";
import banners from "../data/banners.js";

// icons
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";


const Home = () => {

  const scrollRef = useRef(null);

  const handleCardScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 304; // w-72 (288px) + gap-4 (16px)

    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;

    if( direction === "right") {

      // move to begining if clicked right on end
      if(isAtEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }

    else { // direction === "left"

      // if the card is at start but clicked on left move to end
      if(isAtStart) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  }
  
  return (
    <div className="overflow-hidden w-full">

      {/* home banners */}
      
      <div className="flex gap-2 overflow-x-auto scrollbar-none">
        {
          banners.map((banner, id) => (
            <img 
              key={id}
              src={banner}
              alt={`banner - ${id}`}
              className="w-94 h-screen object-cover"
            />
          ))
        }
      </div>
      
      {/* Tapestries */}
      <div className="container relative">
        <h2 className="product-heading">Tapestries</h2>

        <div 
          ref={scrollRef}
          className="relative py-4 flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 gap-4"  
        >
          {
            tapestry.map((product, id) => (
              <ProductCard 
                key={id}
                product={product}
              />
            ))
          }
        </div>

        {/* direction control btns */}
        <button 
          onClick={() => handleCardScroll("left")}
          className="scroll-btn top-80 left-12"
        >
          <LuArrowLeft />
        </button>

        <button 
          onClick={() => handleCardScroll("right")}
          className="scroll-btn top-80 right-12"
        >
          <LuArrowRight />
        </button>
      </div>

      {/* Categories 1 */}
      <div className="container">
        <CategoryCard categories={categories1} />
      </div>

    </div>
  );
};

export default Home;
