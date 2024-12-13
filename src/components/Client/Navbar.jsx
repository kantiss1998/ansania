import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  ChevronDown,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";
import ansania from "../../assets/ansania.png";

const collectionData = {
  collections: [
    {
      name: "Men",
      slug: "men",
      subCollections: [
        { name: "Shirts", slug: "shirts" },
        { name: "Pants", slug: "pants" },
        { name: "Jackets", slug: "jackets" },
      ],
    },
    {
      name: "Women",
      slug: "women",
      subCollections: [
        { name: "Dresses", slug: "dresses" },
        { name: "Tops", slug: "tops" },
        { name: "Skirts", slug: "skirts" },
      ],
    },
    {
      name: "Accessories",
      slug: "accessories",
      subCollections: [
        { name: "Bags", slug: "bags" },
        { name: "Jewelry", slug: "jewelry" },
        { name: "Hats", slug: "hats" },
      ],
    },
  ],
};

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [openCollections, setOpenCollections] = useState({});
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCollection = (slug) => {
    setOpenCollections((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const NavItem = ({ to, label, children }) => (
    <NavLink
      to={to}
      className={() => `
        relative group
        px-3 py-2 
        transition-all duration-300 
        text-gray-600 hover:text-gray-900
      `}
    >
      {label}
      <span
        className={`
        absolute bottom-0 left-0 w-full h-[2px] bg-gray-600 scale-x-0 origin-left
        transition-transform duration-300 group-hover:scale-x-100
      `}
      ></span>
      {children}
    </NavLink>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src={ansania} alt="ansania" className="w-24" />
        </Link>
        <button
          onClick={() => setMobileMenuVisible(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col p-4 space-y-4">
        <NavItem to="/" label="Home" />

        {/* Collections with Dropdowns */}
        <div className="border-b pb-2">
          <NavLink
            to="/collection"
            className="flex justify-between items-center cursor-pointer py-2"
          >
            <span className="font-medium">Collection</span>
          </NavLink>

          {collectionData.collections.map((collection) => (
            <div key={collection.slug} className="border-b pb-2">
              <div
                onClick={() => toggleCollection(collection.slug)}
                className="flex justify-between items-center cursor-pointer py-2"
              >
                <span className="font-medium">{collection.name}</span>
                {openCollections[collection.slug] ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </div>

              {openCollections[collection.slug] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 space-y-2"
                >
                  {collection.subCollections.map((subCollection) => (
                    <Link
                      key={subCollection.slug}
                      to={`/collection/${collection.slug}/${subCollection.slug}`}
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      {subCollection.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />

        {/* Mobile Action Icons */}
        <div className="flex justify-between pt-4 border-t">
          <Link to="/search" className="flex items-center gap-2 text-gray-600">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/profile" className="flex items-center gap-2 text-gray-600">
            <User className="w-5 h-5" />
          </Link>
          <Link
            to="/wishlist"
            className="relative flex items-center gap-2 text-gray-600"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span
                className="absolute -top-2 -left-2 bg-red-500 text-white 
                text-xs rounded-full w-4 h-4 flex items-center justify-center"
              >
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-gray-600"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -left-2 bg-red-500 text-white 
                text-xs rounded-full w-4 h-4 flex items-center justify-center"
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`container mx-auto px-4 lg:px-32 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-40 
        ${
          isScrolled
            ? "bg-white shadow-md transition-all duration-300"
            : "bg-transparent transition-all duration-300"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={ansania}
            alt="ansania"
            className={`h-10 transition-all duration-300 
            ${isScrolled ? "opacity-100" : "opacity-100"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center space-x-4 transition-all duration-300
        ${isScrolled ? "text-gray-900" : "text-gray-600"}`}
        >
          <NavItem to="/" label="Home" />

          {/* Collection Dropdown */}
          <div className="relative group">
            <NavLink
              to="/collection"
              className={`relative group px-3 py-2 
            hover:text-gray-900
            hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gray-600
            flex items-center gap-1 
            ${isScrolled ? "text-gray-900" : "text-gray-600"}`}
            >
              Collection <ChevronDown className="w-4 h-4" />
            </NavLink>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute hidden group-hover:block 
              bg-white shadow-lg rounded-lg p-4 z-50 min-w-[250px]"
            >
              <div className="flex space-x-6">
                {collectionData.collections.map((collection) => (
                  <div key={collection.slug} className="mb-3">
                    <Link
                      to={`/collection/${collection.slug}`}
                      className="block font-semibold mb-2 text-gray-800 hover:text-gray-600"
                    >
                      {collection.name}
                    </Link>
                    <div className="space-y-1">
                      {collection.subCollections.map((subCollection) => (
                        <Link
                          key={subCollection.slug}
                          to={`/collection/${collection.slug}/${subCollection.slug}`}
                          className="block text-sm text-gray-600 
                        hover:text-gray-900 hover:pl-2 transition-all"
                        >
                          {subCollection.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        {/* Desktop Action Icons */}
        <div
          className={`hidden md:flex items-center space-x-4 transition-all duration-300
        ${isScrolled ? "text-gray-900" : "text-gray-600"}`}
        >
          <button className="hover:text-gray-900">
            <Search className="w-5 h-5" />
          </button>

          <button className="hover:text-gray-900">
            <User className="w-5 h-5" />
          </button>

          <Link to="/wishlist" className="relative hover:text-gray-900">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white 
              text-xs rounded-full w-4 h-4 flex items-center justify-center"
              >
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative hover:text-gray-900">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white 
              text-xs rounded-full w-4 h-4 flex items-center justify-center"
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuVisible(true)}
          className="md:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>{mobileMenuVisible && <MobileMenu />}</AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
