"use client";
import React, { useState, useEffect } from "react";

import Car1 from "@/assets/cars/car1.jpg";
import Car2 from "@/assets/cars/car2.jpg";
import Car3 from "@/assets/cars/car3.jpg";
import Car4 from "@/assets/cars/car4.jpg";

import Bike1 from "@/assets/bikes/bike1.jpg";
import Bike2 from "@/assets/bikes/bike2.jpg";
import Bike3 from "@/assets/bikes/bike3.jpg";
import Bike4 from "@/assets/bikes/bike4.jpg";

import Laptop1 from "@/assets/laptops/laptop1.jpg";
import Laptop2 from "@/assets/laptops/laptop2.jpg";
import Laptop3 from "@/assets/laptops/laptop3.jpg";
import Laptop4 from "@/assets/laptops/laptop4.jpg";

import Phone1 from "@/assets/mobiles/mobile1.jpg";
import Phone2 from "@/assets/mobiles/mobile2.jpg";
import Phone3 from "@/assets/mobiles/mobile3.jpg";
import Phone4 from "@/assets/mobiles/mobile4.jpg";

import RealEstate1 from "@/assets/real-estate/realEstate1.jpg";
import RealEstate2 from "@/assets/real-estate/realEstate2.jpg";
import RealEstate3 from "@/assets/real-estate/realEstate3.jpg";
import RealEstate4 from "@/assets/real-estate/realEstate4.jpg";

type Props = {};
const Gallery = (props: Props) => {
    const [carIndex, setCarIndex] = useState(0);
    const [bikeIndex, setBikeIndex] = useState(0);
    const [laptopIndex, setLaptopIndex] = useState(0);
    const [phoneIndex, setPhoneIndex] = useState(0);
    const [realEstateIndex, setRealEstateIndex] = useState(0);

    const carImages = [Car1, Car2, Car3, Car4];
    const bikeImages = [Bike1, Bike2, Bike3, Bike4];
    const laptopImages = [Laptop1, Laptop2, Laptop3, Laptop4];
    const phoneImages = [Phone1, Phone2, Phone3, Phone4];
    const realEstateImages = [
        RealEstate1,
        RealEstate2,
        RealEstate3,
        RealEstate4,
    ];

    // cars
    useEffect(() => {
        const secondsBetweenChanges = 5;
        const interval = setInterval(() => {
            setCarIndex((prevIndex) =>
                prevIndex + 1 < carImages.length ? prevIndex + 1 : 0
            );
        }, secondsBetweenChanges * 1000);

        return () => clearInterval(interval);
    }, []);

    // bikes
    useEffect(() => {
        const secondsBetweenChanges = 4;
        const interval = setInterval(() => {
            setBikeIndex((prevIndex) =>
                prevIndex + 1 < bikeImages.length ? prevIndex + 1 : 0
            );
        }, secondsBetweenChanges * 1000);

        return () => clearInterval(interval);
    }, []);

    // laptops
    useEffect(() => {
        const secondsBetweenChanges = 3;
        const interval = setInterval(() => {
            setLaptopIndex((prevIndex) =>
                prevIndex + 1 < laptopImages.length ? prevIndex + 1 : 0
            );
        }, secondsBetweenChanges * 1000);

        return () => clearInterval(interval);
    }, []);

    // phones
    useEffect(() => {
        const secondsBetweenChanges = 6;
        const interval = setInterval(() => {
            setPhoneIndex((prevIndex) =>
                prevIndex + 1 < phoneImages.length ? prevIndex + 1 : 0
            );
        }, secondsBetweenChanges * 1000);

        return () => clearInterval(interval);
    }, []);

    // real-estate
    useEffect(() => {
        const secondsBetweenChanges = 4;
        const interval = setInterval(() => {
            setRealEstateIndex((prevIndex) =>
                prevIndex + 1 < realEstateImages.length ? prevIndex + 1 : 0
            );
        }, secondsBetweenChanges * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="text-gray-600 body-font h-sreen">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={phoneImages[phoneIndex].src}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={bikeImages[bikeIndex].src}
                            />
                        </div>

                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={carImages[carIndex].src}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src={laptopImages[laptopIndex].src}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={phoneImages[phoneIndex].src}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={realEstateImages[realEstateIndex].src}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
