import bgImg from "../assets/bg.jpg";
import ProductCard from "../components/ui/ProductCard";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <img src={bgImg} alt="bg-image" className="w-full h-screen" />

      <div className="container mt-8">
        <div className="flex justify-between">
          <h2 className="font-semibold text-2xl">New Arrivals</h2>
          <Link to="shop" className="hover:underline">
            View more
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
