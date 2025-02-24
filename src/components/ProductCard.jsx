import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [showFullDescription, setShowFullDescription] = useState(false);
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

  const titleClass = showFullDescription ? 'text-lg font-semibold mb-2' : 'text-lg font-semibold mb-2 truncate';

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {/* Sale Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          20% OFF
        </div>
      </div>

      <div className="p-4">
        <h2 className={titleClass}>{product.title}</h2>
        <p className="text-gray-700 text-sm mb-2 line-clamp-3">
          {showFullDescription ? product.description : product.shortDescription}
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-blue-500 text-sm hover:underline"
        >
          {showFullDescription ? 'Show Less' : 'Read More'}
        </button>
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-gray-400 line-through mr-2">${(product.price * 1.2).toFixed(2)}</span>
            <span className="text-xl font-bold text-black">${(product.price).toFixed(2)}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`rounded-full p-2 ${
              isProductInCart
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-black hover:bg-gray-800'
            } text-white transition-colors`}
          >
            {isProductInCart ? 'Remove' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
