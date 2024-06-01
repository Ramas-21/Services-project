import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 shadow-md flex">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={80} height={60} />
        <div className="hidden md:flex items-center gap-6">
          <h2 className="hover:scale-105 cursor-pointer">Home</h2>
          <h2 className="hover:scale-105 cursor-pointer">Services</h2>
          <h2 className="hover:scale-105 cursor-pointer">About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
