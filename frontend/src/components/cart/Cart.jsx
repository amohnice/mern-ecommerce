import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId} className="cart-item">
              <span>
                {item.name} - KES {item.price.toFixed(2)} x {item.quantity}
              </span>
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </div>
          ))}
          <h3>Total: KES {calculateTotal()}</h3>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
