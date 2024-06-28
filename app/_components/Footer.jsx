import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 mr-10">
      <footer className="bg-white rounded-lg shadow-md m-4 dark:bg-gray-800 w-full border-t-4 border-blue-300">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://lawrence-personal-portfolio.vercel.app/" className="hover:underline text-primary" target="_blank">
              Lawrence
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href={'/'} className="hover:underline me-4 md:me-6 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/search/category'} className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
