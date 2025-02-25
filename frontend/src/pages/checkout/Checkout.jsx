import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import './checkout.css';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cartItems }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </label>
        <label>
          Phone Number:
          <input type="tel" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </label>
        <label>
          Address:
          <input type="text" required onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;