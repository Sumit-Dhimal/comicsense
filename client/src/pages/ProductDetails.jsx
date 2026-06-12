import { useParams } from "react-router-dom";
import products from "../data/products.json"
import Button from "../components/ui/Button"
import NotFound from "./NotFound"
import "../index.css";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if(!product) {
    return <NotFound />
  }

  return (
    <div className="container mt-20">
      <h2 className="text-xl font-medium mb-4">Product Details</h2>
      <div className="w-full flex gap-12 border-0 border-gray-200 shadow-2xl p-8 bg-purple-50">
        <div className="w-1/2">
          <img 
            src={product.images[0]}
            className="h-120 w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-8">
          <h3 className="font-semibold text-xl">{product.name}</h3>
          <p className="text-md font-medium">Price: ${product.price}</p>

          <Button variant="danger"> Add to cart </Button>

          <p>
            <strong>Description:</strong>
            <br />
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
