import ProductCard from "../Card/ProductCard1";
import { motion } from 'framer-motion';

const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <motion.div
            key={product.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "tween",
              duration: 0.5,
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
