import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { X } from 'lucide-react';
import Button from "./Button"

const CartModal = ({isOpen, onClose}) => {

  const cartItems = useSelector((state) => state.cart.items);

  // array.reduce((accumulator, currentValue) => accumulator + currentvalue, initialvalue,)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  if(!isOpen) return null;

  return (
    <>
      {/* overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-0 right-0 h-full w-96 bg-white z-50 p-4 flex flex-col">
        <div className="flex justify-between items-center border-b pb-3">
          <h2>Shopping cart</h2>
           
          <button onClick={onClose} >
            <X 
              size={32} 
              className="cursor-pointer" 
            />
          </button>
        </div>

        <div className='flex-1'>
          {
            cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  item={item}
                />
              ))
            )
          }
        </div>

        <div className='flex flex-col gap-4 border-t'>
          <div className='flex justify-between mt-4'>
            <span> Subtotal: </span>
            <span> {subtotal.toFixed(2)} </span>
          </div>

          <Button variant='danger'> Checkout </Button>

          <Button
            variant='outline'
            onClick={onClose}
          > 
            Continue shopping 
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
