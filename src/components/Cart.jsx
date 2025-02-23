import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  // Dummy cart data for now
  const cartItems = [
    { id: 1, title: 'Product 1', price: 20, quantity: 2, image: 'https://img.freepik.com/free-photo/close-up-view-online-shopping-concept_23-2148625696.jpg' },
    { id: 2, title: 'Product 2', price: 30, quantity: 1, image: 'https://img.freepik.com/free-photo/front-view-online-shopping-concept_23-2148625666.jpg' },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <p className="font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="font-bold">Discount (10%): ${discount.toFixed(2)}</p>
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;