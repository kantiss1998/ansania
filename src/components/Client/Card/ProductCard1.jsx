import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import QuickViewModal from "../Modal/QuickView";

const ProductCard = ({ product }) => {
  console.log(product)
  const [isHovered, setIsHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveTooltip(null);
      }}
    >
      {/* Product Image */}
      <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 font-medium">{product.price}</p>
      </div>

      {/* Icon Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-1/4 left-4 transform -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4"
          >
            {[
              {
                icon: Heart,
                color: "text-black-500",
                tooltip: "Add to Wishlist",
              },
              {
                icon: ShoppingCart,
                color: "text-black-500",
                tooltip: "Add to Cart",
              },
              {
                icon: Eye,
                color: "text-black-500",
                tooltip: "Quick View",
                onClick: () => setIsQuickViewOpen(true),
              },
            ].map((item, index) => (
              <div
                key={item.tooltip}
                className="relative group/icon"
                onMouseEnter={() => setActiveTooltip(item.tooltip)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.1,
                      type: "tween",
                      duration: 0.3,
                    },
                  }}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg group-hover/icon:bg-black group-hover/icon:text-white 
                    transition-all duration-300 ease-in-out"
                  onClick={item.onClick}
                >
                  <item.icon
                    className={`w-4 h-4 sm:w-6 sm:h-6 ${item.color} cursor-pointer`}
                  />
                </motion.div>

                <AnimatePresence>
                  {activeTooltip === item.tooltip && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute left-full ml-2 top-1/4 -translate-y-1/2 
                        bg-black text-white text-xs px-2 py-1 rounded 
                        whitespace-nowrap"
                    >
                      {item.tooltip}
                    </motion.span>
                  )}
                  {isQuickViewOpen && (
                    <QuickViewModal
                      product={{
                        ...product,
                        images: [product.image, product.image, product.image],
                        description:
                          "Detail lengkap produk akan ditampilkan di sini. Bisa berisi informasi spesifik tentang produk.",
                        variants: ["S", "M", "L", "XL"],
                      }}
                      onClose={() => setIsQuickViewOpen(false)}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;