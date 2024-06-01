import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 shadow-md flex">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={80} height={60} />
        <div className="flex items-center gap-6">
          <h2>Home</h2>
          <h2>Services</h2>
          <h2>About Us</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
