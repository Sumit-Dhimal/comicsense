import "./pages.css";
import { useStatem, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import CategoryCard from "../components/ui/CategoryCard.jsx";

// datas
import tapestry from "../data/tapestry.json";
import { categories1 } from "../data/categories.js";
import banners from "../data/banners.js";

// icons
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { SlArrowLeft } from "react-icons/sl";


const Home = () => {

  const homeScrollRef = useRef(null);
  const isHovered = useRef(false);
  const scrollRef = useRef(null);

  //handles hero section animation
  useEffect(() => {
    const container = homeScrollRef.current;
    if(!container) return;

    let animationId;
    const speed = 1; //px per frame

    const animate = () => {
      if(!isHovered.current) {
        container.scrollLeft += speed;

        // Total width is duplicated so reset at halfway
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);


  // handles product card scroll animation
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
      <div className="relative">
        <div 
          ref={homeScrollRef}
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
          className="flex gap-1.5 overflow-x-auto scrollbar-none"
        >
          {
            [...banners, ...banners].map((banner, idx) => (
              <img 
                key={idx}
                src={banner}
                alt={`banner - ${idx}`}
                className="w-120 h-screen object-cover shrink-0"
              />
            ))
          }
        </div>
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
