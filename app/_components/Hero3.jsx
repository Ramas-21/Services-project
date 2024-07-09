"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const Hero3 = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-10">
      <Carousel pauseOnHover>
        <div className="relative w-full h-full">
          <img src="/carousel1.jpg" alt="Electrician Services" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 text-center p-4 rounded">
              <span className="text-white text-2xl font-bold block">Professional <span className="text-green-500">Electrical</span> Services</span>
              <p className="text-white mt-2">Reliable and efficient solutions for all your electrical needs. Book now for top-quality service.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src="/carousel2.webp" alt="Plumbing Services" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 text-center p-4 rounded">
              <span className="text-white text-2xl font-bold block">Expert <span className="text-green-500">Plumbing</span> Services</span>
              <p className="text-white mt-2">Quick and dependable plumbing solutions for your home. Schedule a service with our experienced plumbers.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src="/carousel3.jpg" alt="Cleaning Services" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 text-center p-4 rounded">
              <span className="text-white text-2xl font-bold block">Professional <span className="text-green-500">Cleaning</span> Services</span>
              <p className="text-white mt-2">Enjoy a spotless home with our thorough and efficient cleaning services. Book a session with our expert cleaners.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src="/carousel4.jpeg" alt="Painting Services" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 text-center p-4 rounded">
              <span className="text-white text-2xl font-bold block">Professional <span className="text-green-500">Painting</span> Services</span>
              <p className="text-white mt-2">Transform your home with our top-notch painting services. Book a consultation with our skilled painters today.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src="/carousel5.jpg" alt="Security Services" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 text-center p-4 rounded">
              <span className="text-white text-2xl font-bold block">Reliable <span className="text-green-500">Security</span> Services</span>
              <p className="text-white mt-2">Protect your home with our advanced security solutions. Contact us today to ensure your peace of mind.</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero3;
