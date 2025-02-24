import React, { useState, useEffect, useContext } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tanks', 'T-Shirts', 'Polo Shirts', 'Casual Shirts', 'Bandana', 'Men Belts'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <div className="bg-gray-100 p-8 mb-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Summer Special Collection</h1>
        <p className="text-xl mb-6">Brand day flat 20% off and free shipping</p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Category Navigation */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trendy Products Just For You</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe & Get 20% Discount code</h2>
        <p className="mb-4">Sign up for our newsletter below to receive the latest discount codes</p>
        <div className="flex flex-col md:flex-row max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 rounded-full border"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
