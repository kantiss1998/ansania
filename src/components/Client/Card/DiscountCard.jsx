import React from 'react'
import { Calendar, Tag } from 'lucide-react';

const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      <img 
        src={discount.image} 
        alt={discount.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{discount.name}</h2>
        
        <div className="flex items-center text-gray-600">
          <Tag className="mr-2 text-blue-500" size={20} />
          <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {discount.code}
          </span>
        </div>
        
        <p className="text-gray-600">{discount.description}</p>
        
        <div className="flex items-center text-gray-500">
          <Calendar className="mr-2" size={20} />
          <span>{discount.promotionPeriod}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard