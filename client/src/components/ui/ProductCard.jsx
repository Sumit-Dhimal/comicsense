import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  
  const product_id = product.id;
  return (
    <Link to={`/product/${product_id}`}> 
      <div className="overflow-hidden border rounded-xl bg-white shadow-sm transition hover:shadow-lg hover:cursor-pointer">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover"
          />
        </div>

        <div className="w-full inline-flex flex-col items-center gap-2 py-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p> Price: {product.price}</p>
          <Button variant="primary" size="md">
            Product Details
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
