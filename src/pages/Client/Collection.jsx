import React, { useState, useMemo } from "react";
import Navbar from "../../components/Client/Navbar";
import Footer from "../../components/Client/Footer";
import { ChevronDown, Filter, X } from "lucide-react";

import bagus from "../../assets/bagus.png";
import ProductCard from "../../components/Client/Card/ProductCard1";
import PageLayout from "../../components/Client/PageLayout";

// Product data with more comprehensive information
const productData = [
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
  {
    id: 1,
    name: "Kemeja Putih Klasik",
    price: 199000,
    size: "M",
    color: "Putih",
    category: "Pakaian",
    material: "Katun",
    image: bagus,
    description: "Kemeja putih elegan dengan potongan klasik",
  },
  {
    id: 2,
    name: "Jaket Denim Biru",
    price: 349000,
    size: "L",
    color: "Biru",
    category: "Jaket",
    material: "Denim",
    image: bagus,
    description: "Jaket denim modern dengan kualitas premium",
  },
];

const Collection = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    color: [],
    category: [],
    material: [],
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState({
    size: false,
    color: false,
    category: false,
    material: false,
  });

  const filterOptions = {
    size: ["S", "M", "L", "XL"],
    color: ["Putih", "Biru", "Hitam", "Abu-abu"],
    category: ["Pakaian", "Jaket", "Celana"],
    material: ["Katun", "Denim", "Wool", "Polyester"],
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((f) => f !== value)
        : [...currentFilters, value];

      return { ...prev, [filterType]: newFilters };
    });
  };

  const toggleFilterSection = (filterType) => {
    setIsFilterSectionOpen((prev) => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  const filteredProducts = useMemo(
    () =>
      productData.filter((product) =>
        Object.keys(selectedFilters).every(
          (filterType) =>
            selectedFilters[filterType].length === 0 ||
            selectedFilters[filterType].includes(product[filterType])
        )
      ),
    [selectedFilters]
  );

  const FilterSection = ({ title, options, filterType }) => (
    <div className="mb-4 border-b pb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleFilterSection(filterType)}
      >
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <ChevronDown
          size={16}
          className={`text-gray-500 transform transition-transform 
            ${isFilterSectionOpen[filterType] ? "rotate-180" : ""}`}
        />
      </div>
      {isFilterSectionOpen[filterType] && (
        <div className="flex flex-col space-y-2 mt-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFilters[filterType].includes(option)}
                onChange={() => handleFilterChange(filterType, option)}
                className="form-checkbox text-blue-500 rounded focus:ring-2 focus:ring-blue-300"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <PageLayout>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <div className="flex flex-col md:flex-row">
            {/* Desktop Filter Sidebar */}
            <div className="hidden md:block w-64">
              <div className="bg-white pt-4 pr-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <Filter size={20} className="mr-2 text-gray-700" />
                  <h2 className="text-lg font-bold">Filter Produk</h2>
                </div>

                {Object.entries(filterOptions).map(([filterType, options]) => (
                  <FilterSection
                    key={filterType}
                    title={
                      filterType.charAt(0).toUpperCase() + filterType.slice(1)
                    }
                    options={options}
                    filterType={filterType}
                  />
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1 p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                  Tidak ada produk yang sesuai dengan filter
                </div>
              )}
            </div>

            {/* Mobile Filter Modal */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-16 md:hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Filter size={20} className="mr-2 text-gray-700" />
                      <h2 className="text-lg font-bold">Filter Produk</h2>
                    </div>
                    <button onClick={() => setIsMobileFilterOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>

                  {Object.entries(filterOptions).map(
                    ([filterType, options]) => (
                      <FilterSection
                        key={filterType}
                        title={
                          filterType.charAt(0).toUpperCase() +
                          filterType.slice(1)
                        }
                        options={options}
                        filterType={filterType}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* Mobile Filter Toggle */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg p-4">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center"
              >
                <Filter size={20} className="mr-2" />
                Filter Produk
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Collection;
