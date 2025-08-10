"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#111111] w-full py-1.5 px-4 md:px-20 lg:px-60">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.jpg" alt="Logo" width={75} height={75} />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 text-white">
          <Link href="/about-me" className="hover:text-purple-500">
            About Me
          </Link>
          <Link href="/projects" className="hover:text-purple-500">
            Projects
          </Link>
          <a
            href="mailto:Omspandit02@gmail.com"
            className="font-medium hover:text-purple-500"
          >
            Email: omspandit02@gmail.com
          </a>
          <Link
            href="/contact-us"
            className="bg-[#2F2F2F] py-2 px-6 rounded-3xl text-xs hover:bg-gray-700"
          >
            Let&apos;s Connect
          </Link>
        </div>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <BsX /> : <BsList />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-1 mb-1 space-y-4 text-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/about-me" className="block hover:text-purple-500">
          About Me
        </Link>
        <Link href="/projects" className="block hover:text-purple-500">
          Projects
        </Link>
        <a
          className="block font-medium cursor-pointer"
          href="mailto:Omspandit02@gmail.com"
        >
          Email: omspandit02<span className="text-[#8E54E9]">@</span>gmail.com
        </a>
        <Link
          href="/contact-us"
          className="block bg-[#2F2F2F] py-2 px-6 rounded-3xl w-fit text-xs hover:bg-gray-700"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
