// import { useParams } from "react-router-dom";
// import products from "../data/products.json";
// import Button from "../components/ui/Button";
// import NotFound from "./NotFound";
// import { addToCart } from "../redux/cartSlice";
// import { useDispatch } from "react-redux";
// import "../index.css";

// // import { Plus, Minus} from "lucide-react";
// import { useState } from "react";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   const product = products.find(
//     (product) => product.id === Number(id)
//   );

//   if(!product) {
//     return <NotFound />
//   }

//   const handleAddToCart = () => {
//     dispatch(addToCart({
//       ...product,
//       qty: quantity,
//     }));
//   }

//   return (
//     <div className="container mt-20">
//       <h2 className="text-xl font-medium mb-4">Product Details</h2>
//       <div className="w-full flex gap-12 border-0 border-gray-200 shadow-2xl p-8 bg-purple-50">
//         <div className="w-1/2">
//           <img 
//             src={product.image}
//             className="h-120 w-full"
//           />
//         </div>

//         <div className="w-1/2 flex flex-col gap-8">
//           <h3 className="font-semibold text-xl">{product.name}</h3>
//           <p className="text-md font-medium">Price: ${product.price}</p>
          
//           <div className="flex gap-2">
//             <button
//               onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1: 1))} // decrease quantity
//               className="cursor-pointer text-gray-400 hover:text-gray-600"
//             >
//               <Minus size={24} />
//             </button>

//             <input 
//               type="text"
//               value={quantity}
//               inputMode="numeric" // use this instead of type = "number" to get rid of default btns inside input
//               min="1"
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               className="border p-2 w-16 text-center"
//             />

//             <button
//               onClick={() => setQuantity((prev) => prev + 1)}
//               className="cursor-pointer text-gray-400 hover:text-gray-600"
//             >
//               <Plus size={24} />
//             </button>
//           </div>
          

//           <Button 
//             variant="danger" 
//             onClick={handleAddToCart}
//           > 
//             Add to cart 
//           </Button>

//           <p>
//             <strong>Description:</strong>
//             <br />
//             {product.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
