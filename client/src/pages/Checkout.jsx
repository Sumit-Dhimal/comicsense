import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  return (
    <div className="mt-20 w-full">
      <div className="mx-auto w-4/5 h-fit grid grid-cols-2 bg-gray-50 drop-shadow-md px-8 py-4">

        {/* --- Shipping and Payment ---- */}
        <div>
          
           Shipping & Payment
        </div>

        {/* ----- Order summary ----- */}
        <div>
           <h2 className="text-2xl font-semibold">Order Summary</h2>

           <div className="mt-4 border-b border-gray-400 pb-2">
            {
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <h3>{item.name}</h3>
                  <span>$ {item.price}</span>
                </div>
              ) )
            }
          </div>

          <div className="flex flex-col my-2">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span>Subtotal: </span>
              <span>{subTotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between">
              <span>Shipping: </span>
              <span>0</span>
            </div>

            {/* Tax */}
            <div className="flex justify-between">
              <span>Tax: </span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Checkout;
