import Link from "next/link";
import React from "react";

const navbarComponent = () => {
  return (
    <div className="fixed z-10 top-6 bg-opacity-90 bg-white left-1/2 -translate-x-1/2 flex md:w-[50%] w-[90%] rounded-2xl border p-2 justify-around shadow-lg">
      <Link
        href="/#about"
        className="relative inline-block text-gray-800 font-semibold group"
      >
        <span className="absolute inset-x-0 bottom-0 h-1 bg-black rounded-lg transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
        <span className="relative">About</span>
      </Link>
      <Link
        href="/#project"
        className="relative inline-block text-gray-800 font-semibold group"
      >
        <span className="absolute inset-x-0 bottom-0 h-1 bg-black rounded-lg transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
        <span className="relative">Project</span>
      </Link>
      <Link
        href="/#contact"
        className="relative inline-block text-gray-800 font-semibold group"
      >
        <span className="absolute inset-x-0 bottom-0 h-1 bg-black rounded-lg transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
        <span className="relative">Contact</span>
      </Link>
    </div>
  );
};

export default navbarComponent;
