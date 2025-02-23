import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="h-16 w-16 object-contain mr-4" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">+</button>
      </div>
      <div>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
