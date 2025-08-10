"use client";

import { ArrowUp, Linkedin, MoveUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="bg-[#111111]">
        <div className="w-full h-[0.5px] bg-gray-600" />
        <div className="py-4 sm:py-6 lg:py-4 px-4 sm:px-6 md:px-12 lg:px-36 flex flex-row sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="size-2 rounded-full bg-rose-500" />
            <p className="text-gray-300">Previous company with zidio</p>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-white rounded-full p-1 cursor-pointer"
          >
            <ArrowUp size={25} />
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-600" />

      <div className="bg-[#111111] text-white pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-5 pl-4 sm:pl-8 md:pl-16 lg:pl-48 pr-4 sm:pr-8 md:pr-16 lg:pr-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 lg:gap-32 items-center min-h-[70vh]">
            {/* Left side - Main heading */}
            <div className="space-y-8">
              <h1 className="text-xl md:text-6xl lg:text-7xl">
                Let's create something extraordinary together
                <span className="text-purple-500">.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400">
                Let's make an impact
              </p>
            </div>

            {/* Right side - Contact info */}
            <div className="space-y-12">
              {/* Profile section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex items-center">
                  <Image
                    src="/circle-1.svg"
                    alt="Image"
                    width={60}
                    height={60}
                    className="-mr-[44px]"
                  />
                  <Image
                    src="/circle-1.svg"
                    alt="Image"
                    width={70}
                    height={70}
                    className="-mr-[51px]"
                  />
                  <Image
                    src="/circle.svg"
                    alt="Image"
                    width={80}
                    height={80}
                    className="-mr-10"
                  />
                  <Image
                    src="/profile-circle.png"
                    alt="Profile"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <p className="font-semibold text-lg">omspandit02gmail.com</p>
                  <p className="text-xs text-gray-400">Designer</p>
                  <a
                    href="https://www.linkedin.com/in/omspandit02/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin
                      className="mt-2 bg-gray-800 text-white p-0.5"
                      size={20}
                    />
                  </a>
                </div>
              </div>

              {/* Contact me section */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-xs text-gray-500 tracking-wider">
                  Contact me
                </p>

                <div className="space-y-4">
                  <p className="text-2xl lg:text-3xl text-white">
                    Omspandit.<span className="text-purple-500">@</span>
                    gmail.com
                  </p>

                  <p className="text-2xl lg:text-3xl text-purple-500 font-semibold">
                    +91-8657 50 4302
                  </p>
                </div>

                <p className="text-gray-400 max-w-full sm:max-w-md">
                  Hit me up if you want to discuss
                  <br />
                  <span className="text-white">an idea or a concept.</span>
                </p>

                <a
                  href="mailto:Omspandit@gmail.com"
                  className="bg-[#8E54E9] text-white flex items-center py-2 pl-4 pr-2 rounded-4xl w-fit"
                >
                  Send me hi{" "}
                  <MoveUpRight
                    className="text-blue-700 bg-white p-2 rounded-full ml-5"
                    strokeWidth={1}
                    size={35}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] w-full py-2 pl-4 sm:pl-8 md:pl-16 lg:pl-30 flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="mr-0 sm:mr-20 mb-4 sm:mb-0">
              <Image src="/logo.jpg" alt="Logo" width={75} height={75} />
            </div>
            <div>
              <div className="text-[#8E54E9] flex text-sm items-center justify-center sm:justify-start">
                Copyright&copy;Ompandit{" "}
                <span className="text-white ml-4">
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
