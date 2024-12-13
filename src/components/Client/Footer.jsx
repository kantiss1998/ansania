import React from "react";
import ansania from "../../assets/ansania.png";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaShopify, FaStore } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/">
            <img
              src={ansania}
              alt="Ansania Logo"
              className="w-32 h-auto mb-4 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <p className="text-gray-600 leading-relaxed text-sm">
            "Ansania" Timeless everyday Scarves crafted for everyone, blending
            elegance and versatility in every detail.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-5 border-b pb-2">
            ABOUT
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-5 border-b pb-2">
            INFO
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/termscondition"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/shippingdelivery"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/returnexchange"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                Return & Exchange
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                className="text-gray-600 hover:text-gray-900 hover:pl-2 transition-all duration-300 inline-block"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-5 border-b pb-2">
            FOLLOW US
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="#"
                className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group"
              >
                <FaStore className="mr-2 group-hover:scale-110 transition-transform" />
                Tokopedia
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center text-gray-600 hover:text-red-500 transition-all duration-300 group"
              >
                <FaShopify className="mr-2 group-hover:scale-110 transition-transform" />
                Shopee
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center text-gray-600 hover:text-black transition-all duration-300 group"
              >
                <FaTiktok className="mr-2 group-hover:scale-110 transition-transform" />
                Tiktok
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center text-gray-600 hover:text-pink-600 transition-all duration-300 group"
              >
                <FaInstagram className="mr-2 group-hover:scale-110 transition-transform" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Copyright 2024 © Ansania.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
