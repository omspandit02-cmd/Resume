import { Linkedin, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="bg-[#F6F6F6] py-16 px-4 sm:px-6 md:px-12 lg:px-48 lg:py-40">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-26 items-start">
          <div className="flex-shrink-0 flex">
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
            <div className="ml-4">
              <p className="font-semibold text-lg">Om Pandit</p>
              <p className="text-xs text-gray-400">Designer</p>
              <a
                href="https://www.linkedin.com/in/om-pandit-7b2841215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className="mt-2 bg-gray-800 text-white p-0.5 cursor-pointer"
                  size={20}
                />
              </a>
            </div>
          </div>
          <div className="flex-1 text-[#2F2F2F] text-xl sm:text-2xl md:text-4xl lg:text-6xl text-left leading-snug max-w-full md:max-w-3xl">
            <p>
              Hello! I&apos;m{" "}
              <span className="text-4xl font-semibold bg-white py-1 md:py-2 px-3 md:px-5 rounded-4xl shadow-sm inline-block">
                Om Pandit
              </span>{" "}
              <br />a{" "}
              <span className="bg-[#2F2F2F] text-[#F6F6F6] text-4xl py-0.5 md:py-2 px-6 rounded-4xl shadow-sm">
                UI/UX Designer
              </span>{" "}
              from{" "}
              <span className="text-4xl md:py-2 px-4 border-2 border-[#2F2F2F] rounded-4xl">
                India
              </span>{" "}
              turning your ideas into pixels with purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 lg:gap-60">
        <div className="">
          <p className="text-[#2F2F2F] font-semibold text-sm sm:text-base">
            10/2024 - 11/2025
          </p>
        </div>
        <div className="">
          <div className="">
            <h1 className="text-[#6E6E6E] text-base sm:text-lg md:text-xl font-semibold max-w-full sm:max-w-xl">
              Focused on blending creativity with user-friendly design, creating
              digital experiences that connect with people. Designs That Feels
              Like Second Nature.
            </h1>

            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
              <a href="mailto:Omspandit02@gmail.com">
                <button className="bg-[#8E54E9] text-white flex items-center py-2 pl-4 pr-2 rounded-4xl shadow-lg shadow-purple-200 cursor-pointer">
                  Let's Work Together{" "}
                  <MoveUpRight
                    className="text-blue-700 bg-white p-2 rounded-full ml-5"
                    strokeWidth={1}
                    size={35}
                  />
                </button>
              </a>
              <Link href="/projects">
                <button className="text-[#8E54E9] bg-transparent flex items-center py-2 pl-10 pr-2 rounded-4xl border border-[#8E54E9] cursor-pointer">
                  View Projects
                  <MoveUpRight
                    className="text-white bg-gradient-to-tl from-[#8E54E9] to-blue-400 p-2 rounded-full ml-5"
                    strokeWidth={1}
                    size={35}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
