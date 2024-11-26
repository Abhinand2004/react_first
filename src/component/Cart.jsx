
import React, { useState, useEffect } from "react";
import './Cart.css'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      items.push(item);
    }
    setCartItems(items);
  }, []);

  const handleRemoveItem = (id) => {
   
    localStorage.removeItem(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return <h1>Your cart is empty.</h1>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h2>{item.title}</h2>
              <p>Brand: <strong>{item.brand}</strong></p>
              <p>Price: <strong>${item.price}</strong></p>
              <p>Discount: <strong>{item.discountPercentage}%</strong></p>
            </div>
            <button
              className="remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
