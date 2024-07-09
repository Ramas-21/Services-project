import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 mr-10">
      <footer className="bg-green-500 rounded-lg m-4 dark:bg-gray-800 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline text-white" target="_blank">
              Home Services
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex gap-3 mr-5">
            <li>
              <Facebook className="text-white cursor-pointer"/>
            </li>
            <li>
              <Instagram className="text-white cursor-pointer"/>
            </li>
            <li>
              <Linkedin className="text-white cursor-pointer"/>
            </li>
            <li>
              <Twitter className="text-white cursor-pointer"/>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
