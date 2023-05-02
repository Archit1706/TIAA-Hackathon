"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Car1 from "@/assets/cars/car1.jpg";
import Car2 from "@/assets/cars/car2.jpg";
import Car3 from "@/assets/cars/car3.jpg";
import Car4 from "@/assets/cars/car4.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './auctionStyles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function AuctionHero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex items-center justify-center max-h-[70vh] min-w-screen object-contain'>
            <img src={Car1.src} alt="" className='w-full ' />
            {/* overlay */}
            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 transition-all ease-in"></div>
            <div className="z-[11] absolute top-0 bottom-0 left-0 right-0 bg-transparent transition-all ease-in flex items-center justify-center">
              <p className="text-white font-extrabold text-lg md:text-3xl">
                Bid for the ride of your dreams at our car auction.v
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center max-h-[70vh] min-w-screen object-contain'>
            <img src={Car2.src} alt="" className='w-full ' />
            {/* overlay */}
            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 transition-all ease-in"></div>
            <div className="z-[11] absolute top-0 bottom-0 left-0 right-0 bg-transparent transition-all ease-in flex items-center justify-center">
              <p className="text-white font-extrabold text-lg md:text-3xl">
                Rev up your bidding power and snag a car on auction.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center max-h-[70vh] min-w-screen object-contain'>
            <img src={Car3.src} alt="" className='w-full ' />
            {/* overlay */}
            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 transition-all ease-in"></div>
            <div className="z-[11] absolute top-0 bottom-0 left-0 right-0 bg-transparent transition-all ease-in flex items-center justify-center">
              <p className="text-white font-extrabold text-lg md:text-3xl">
                Get behind the wheel of your next adventure with a car auction
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center max-h-[70vh] min-w-screen object-contain'>
            <img src={Car4.src} alt="" className='w-full ' />
            {/* overlay */}
            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 transition-all ease-in"></div>
            <div className="z-[11] absolute top-0 bottom-0 left-0 right-0 bg-transparent transition-all ease-in flex items-center justify-center">
              <p className="text-white font-extrabold text-lg md:text-3xl">
                Find your perfect match on wheels at our car auction.
              </p>
            </div>
          </div>
        </SwiperSlide>


        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
