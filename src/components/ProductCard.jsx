import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isProductInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
      toast.info('Item removed from cart');
    } else {
      const result = addToCart(product);
      if (result.error) {
        toast.error(result.message || 'Item already in cart');
      } else {
        toast.success('Item added to cart');
      }
    }
  };

  const buttonText = isProductInCart ? 'Remove from Cart' : 'Add to Cart';

  return (
    <div className="border rounded-md p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm mt-2">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
