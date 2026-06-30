import { useDispatch } from "react-redux";
import { Plus, Minus, Trash2} from "lucide-react";
import { addToCart, removeFromCart, decreaseQty, increaseQty, updateQty } from "../../redux/cartSlice";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleInputInsideCart = (e) => {
    dispatch(updateQty(
      {
        id: item.id,
        qty: Number(e.target.value),
      }
    ));
  }

  return (
    <div className="flex items-center gap-4 border-b border-gray-300 py-4">
      <img 
        src={item.image}
        alt={item.name}
        className="h-20 w-20 object-cover"
      />

      <div className="flex-1">
        <h3> {item.name} </h3>
        <p> {item.price} </p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            className="cursor-pointer"
          >
            <Minus size={16} />
          </button>

          <input 
            type="text"
            inputMode="numeric"
            value={item.qty}
            className="border p-2 w-12 text-center"
            onChange={handleInputInsideCart}
          />

          <button
            onClick={() => dispatch(increaseQty(item.id))}
            className="cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>  
      </div>

      <button
        className="cursor-pointer text-red-400 hover:text-red-600 h-fit"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default CartItem;
