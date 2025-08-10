import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectSection = () => {
  return (
    <div className="bg-[#111111]">
      <div className="py-10 sm:py-16 md:py-30 px-4 sm:px-6 md:px-12 lg:px-56 text-white flex items-start flex-col">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <div className="bg-blue-400 size-4 rounded-full animate-ping" />
            <div className="bg-blue-500 size-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-400">
              &#123;01&#125; — Featured Projects
            </p>
          </div>
        </div>
        <div className="max-w-4xl">
          <p className="text-7xl">Shaping ideas with imaginative design.</p>
        </div>
        <div className="mt-20">
          <a href="mailto:Omspandit02@gmail.com">
            <button className="bg-gradient-to-r from-blue-500 to-[#8E54E9] text-white flex items-center py-2 pl-4 pr-2 rounded-4xl cursor-pointer">
              Let's Work Together{" "}
              <MoveUpRight
                className="text-blue-700 bg-white p-2 rounded-full ml-5"
                strokeWidth={1}
                size={35}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 my-8" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 text-sm border-b md:border-b-0 md:border-r border-gray-800">
          <div className="text-white flex items-start flex-col">
            <div className="">
              <p className="text-gray-400">
                <span className="text-blue-600">&#123;</span>
                <span className="text-white"> LANDING PAGE </span>
                <span className="text-blue-600">&#125;</span> &nbsp;
                &nbsp;08/2025
              </p>
              <p className="mt-3 text-2xl">Pamprazzi</p>
              <p className="text-xs text-gray-400 mt-4">UI/UX Design</p>
            </div>
            <div className="mt-16">
              <Image
                src="/1.jpg"
                alt="Image"
                width={800}
                height={800}
                className="rounded-md h-62 md:h-110"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="text-white flex items-start flex-col">
            <div className="">
              <p className="text-gray-400">
                <span className="text-blue-600">&#123;</span>
                <span className="text-white"> WEBSITE DESIGN </span>
                <span className="text-blue-600">&#125;</span> &nbsp;
                &nbsp;11/2025
              </p>
              <p className="mt-3 text-2xl">Wyreflow</p>
              <p className="text-xs text-gray-400 mt-3">UI/UX Design</p>
            </div>
            <div className="mt-16">
              <Image
                src="/2.png"
                alt="Image"
                width={800}
                height={800}
                className="rounded-md h-62 md:h-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 my-8" />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-6">
          <div className="text-white flex items-start flex-col">
            <div className="">
              <p className="text-gray-400">
                <span className="text-blue-600">&#123;</span>
                <span className="text-white"> WEBSITE DESIGN </span>
                <span className="text-blue-600">&#125;</span> &nbsp;
                &nbsp;11/2025
              </p>
              <p className="mt-3 text-2xl">Wyreflow</p>
              <p className="text-xs text-gray-400 mt-4">UI/UX Design</p>
            </div>
            <div className="mt-16">
              <Image
                src="/3.png"
                alt="Image"
                width={800}
                height={800}
                className="rounded-md h-64"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-r border-gray-800" />
        <div className="w-full lg:w-1/3 p-6">
          <div className="text-white flex items-start flex-col">
            <div className="">
              <p className="text-gray-400">
                <span className="text-blue-600">&#123;</span>
                <span className="text-white"> LANDING PAGE </span>
                <span className="text-blue-600">&#125;</span> &nbsp;
                &nbsp;08/2025
              </p>
              <p className="mt-3 text-2xl">Pamprazzi</p>
              <p className="text-xs text-gray-400 mt-4">UI/UX Design</p>
            </div>
            <div className="mt-16">
              <Image
                src="/work-4.jpg"
                alt="Image"
                width={800}
                height={800}
                className="rounded-md h-64"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-r border-gray-800" />
        <div className="w-full lg:w-1/3 p-10 flex justify-center items-center">
          <Link
            href="/projects"
            className="bg-[#8E54E9] flex items-center justify-center space-x-3 rounded-md w-full lg:w-[405px] text-sm py-2 sm:py-5 md:py-10 lg:py-[189px]"
          >
            <span className="text-lg text-white">View all projects</span>
            <MoveUpRight
              size={18}
              className="p-1 bg-white rounded-full text-[#8E54E9] size-7"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
