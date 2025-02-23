import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    if (cartItems.length === 1) {
      toast.info('Last item removed. Your cart is now empty');
    } else {
      toast.success('Item removed from cart');
    }
  };

  const handleClearCart = () => {
    clearCart();
    toast.info('Your cart has been cleared');
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
        <>
          <button onClick={handleClearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={handleRemoveFromCart} updateQuantity={updateQuantity} />
          ))}
          <div className="mt-4">
            <p className="font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="font-bold">Discount (10%): ${discount.toFixed(2)}</p>
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
