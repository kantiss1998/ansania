import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";

const QuickViewModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white w-[90vw] max-w-6xl h-[80vh] rounded-xl shadow-2xl flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bagian Gambar */}
        <div className="w-1/2 relative">
          <div className="h-full flex items-center justify-center overflow-hidden rounded-l-xl">
            <div className="relative w-full h-full">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bagian Detail Produk */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl text-green-600 mb-4">{product.price}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Deskripsi</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {product.variants && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Varian</h3>
                <div className="flex space-x-2">
                  {product.variants.map((variant) => (
                    <button 
                      key={variant}
                      className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Tambah ke Keranjang
            </button>
            <button className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              <Heart />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuickViewModal;