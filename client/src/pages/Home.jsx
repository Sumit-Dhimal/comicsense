import { Link } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import tapestry from "../data/tapestry.json";
import "./pages.css";

import banner1 from "../assets/banner/banner1.jpeg";
import banner2 from "../assets/banner/banner2.webp";
import banner3 from "../assets/banner/banner3.webp";
import banner4 from "../assets/banner/banner4.webp";
import banner5 from "../assets/banner/banner5.webp";
import banner6 from "../assets/banner/banner6.webp";

const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full">

      {/* home banners */}
      <div className="flex gap-2">
        {
          banners.map((banner, id) => (
            <img 
              key={id}
              src={banner}
              alt={`banner - ${id}`}
              className="w-fit h-screen object-cover"
            />
          ))
        }
      </div>
      
      {/* Tapestries */}
      <div className="container">
        <h2 className="product-heading">Tapestries</h2>
        <div className="flex flex-nowrap overflow-x-auto gap-4">
          {
            tapestry.map((product, id) => (
              <ProductCard 
                key={id}
                product={product}
              />
            ))
          }
        </div>
      </div>
      

    </div>
  );
};

export default Home;
