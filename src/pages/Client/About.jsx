import React from "react";
import { motion } from "framer-motion";
import Title from "../../components/Client/Common/Title";
import Navbar from "../../components/Client/Navbar";
import bagus from "../../assets/bagus.png"
import Footer from "../../components/Client/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container py-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl mt-10 lg:my-16"
        >
          <Title text1={"About"} text2={"US"} />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className="order-2 md:order-1 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-gray-900">ANSANIA</span>, your
              trusted destination for premium hijabs and accessories. We believe
              that fashion should be both elegant and accessible, and our
              collection embodies these principles through high-quality products
              designed for every occasion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since our establishment, we have dedicated ourselves to offering a
              wide range of hijabs, from classic solids to vibrant patterns, as
              well as essential accessories that complement your unique style.
              At ANSANIA, we prioritize quality, style, and comfort in every
              piece we create.
            </p>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission at <span className="font-bold">ANSANIA</span> is to
                empower individuals to express their identity through fashion.
                We strive to provide a seamless shopping experience, ensuring
                that every customer feels valued and satisfied with their
                purchases.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={bagus} 
              alt="ANSANIA Hijab Collection" 
              className="rounded-lg shadow-lg max-w-full h-auto object-cover w-full max-h-[500px]"
            />
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-12 lg:my-16"
        >
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Quality Assurance:",
              description: "We meticulously select and craft each product to ensure it meets our high standards of quality and elegance."
            },
            {
              title: "Convenience:",
              description: "Our user-friendly platform and efficient ordering process make shopping with us a breeze."
            },
            {
              title: "Exceptional Customer Service:",
              description: "Our dedicated team is here to support you every step of the way, ensuring your satisfaction is our top priority."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;