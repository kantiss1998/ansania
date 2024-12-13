import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import art1 from "../../../assets/Artboard1.png";
import art2 from "../../../assets/Artboard2.png";
import art3 from "../../../assets/Artboard3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ShoppingBag, ChevronRight } from "lucide-react";

const HijabHeroBannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderData = [
    {
      title: "Cantik Dengan Hijab Syar'i",
      subtitle: "Koleksi Premium untuk Muslimah Modern",
      image: art1,
      overlay: "bg-black/10",
    },
    {
      title: "Gaya Tanpa Kompromi",
      subtitle: "Desain Elegan, Kualitas Terjamin",
      image: art2,
      overlay: "bg-black/10",
    },
    {
      title: "Kenyamanan Sejati",
      subtitle: "Bahan Lembut, Tampil Percaya Diri",
      image: art3,
      overlay: "bg-black/10",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden mb-5">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="absolute inset-0 z-0"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-screen bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Overlay Gelap */}
              <div className={`absolute inset-0 ${slide.overlay}`}></div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 items-center relative z-10 text-white">
                {/* Konten Teks */}
                <div
                  className={`text-center lg:text-left space-y-6 z-10 transition-all duration-700 max-w-2xl mx-auto lg:mx-0 ${
                    activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:pl-40 lg:text-6xl font-serif font-bold leading-tight">
                    {slide.title.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {word === "Hijab" ? (
                          <span className="text-rose-300">{word} </span>
                        ) : (
                          <>{word} </>
                        )}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-lg text-gray-200 max-w-xl lg:pl-40">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:pl-40">
                    <button className="relative overflow-hidden bg-rose-600 text-white px-6 py-3 rounded-full flex items-center justify-center transition-all duration-500 bg-gradient-to-r from-rose-600 to-rose-700 bg-[length:200%_100%] hover:bg-[position:-100%_0]">
                      Belanja Sekarang
                      <ShoppingBag className="ml-2" size={20} />
                    </button>
                    <button className="relative overflow-hidden border-2 border-white text-white px-6 py-3 rounded-full flex items-center justify-center transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] hover:bg-[position:-100%_0]">
                      Lihat Koleksi
                      <ChevronRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HijabHeroBannerSlider;
