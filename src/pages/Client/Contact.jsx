import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Title from "../../components/Client/Common/Title";
import PageLayout from "../../components/Client/PageLayout";

const Contact = () => {
  // Animation variants for page sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <PageLayout>
        <motion.div
          className="flex-grow container mx-auto "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-center"
          >
            <Title text1={"Contact"} text2={"US"} />
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            {/* Contact Information */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-8 space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Our Store</h3>
                  <p className="text-gray-600">
                    Jl. Belakang Factory No.E2, Braga
                    <br />
                    Kec. Sumur Bandung, Kota Bandung
                    <br />
                    Jawa Barat 40111
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-green-500 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600">012-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-red-500 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">info@ansania.com</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 shadow-lg rounded-xl p-8 space-y-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Contact;
