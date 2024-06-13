"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const Hero2 = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-10">
      <Carousel pauseOnHover>
        <div>
          <img src="/carousel1.jpg" alt="..." className="w-full"/>
        </div>
        <div>
          <img src="/carousel2.webp" alt="..." className="w-full"/>
        </div>
        <div>
          <img src="/carousel3.jpg" alt="..." className="w-full"/>
        </div>
        <div>
          <img src="/carousel4.jpeg" alt="..." className="w-full"/>
        </div>
        <div>
          <img src="/carousel5.jpg" alt="..." className="w-full"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero2;
