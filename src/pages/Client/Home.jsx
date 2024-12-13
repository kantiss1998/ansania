import React from "react";
import Navbar from "../../components/Client/Navbar";
import Footer from "../../components/Client/Footer";
import bagus from "../../assets/bagus.png";
import ProductCard from "../../components/Client/Card/ProductCard1";
import HijabHeroBannerSlider from "../../components/Client/HeroBanner/HeroBanner1";

const Home = () => {
  const sampleProduct = [
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
  return (
    <>
      <Navbar className="px-10" />
      <HijabHeroBannerSlider />
      <div className="flex-1 lg:p-24 md:p-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sampleProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sampleProduct.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            Tidak ada produk yang sesuai dengan filter
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
