import { Asterisk, Timer } from "lucide-react";
import React from "react";
import { Process } from "../../constant/process";

const ProcessSection = () => {
  return (
    <div className="bg-[#111111] py-10 sm:py-16 lg:py-30">
      <div className="px-4 sm:px-6 md:px-12 lg:px-56 text-white flex items-start flex-col">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <div className="bg-purple-400 size-4 rounded-full animate-ping" />
            <div className="bg-purple-500 size-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-400">&#123;03&#125; — Process</p>
          </div>
        </div>
        <div className="max-w-full sm:max-w-4xl pb-12 sm:pb-24">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
            How it works
          </p>
        </div>
        <div className="w-full border-b border-gray-700" />
      </div>

      {Process.map(({ title, content, other, subtitle }, index) => (
        <div className="px-4 sm:px-6 md:px-12 lg:px-56" key={index}>
          <div className="text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-full sm:max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-7 gap-4 sm:gap-0">
                <div className="flex items-center gap-6">
                  <div className="border border-gray-600 mr-4 sm:mr-20 px-3 py-2 rounded-full text-sm">
                    {subtitle}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white text-xl md:text-3xl lg:text-4xl font-semibold">
                      <span className="text-purple-400">/</span>0{index + 1}
                    </span>
                    <h1 className="text-sm md:text-xl font-medium">{title}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Timer size={15} />
                  <span>/{other}/</span>
                </div>
              </div>

              {content.map(({ title, details }) => (
                <div
                  className="space-y-3 ml-0 sm:ml-4 md:ml-16 lg:ml-64"
                  key={title}
                >
                  <div className="flex gap-4">
                    <Asterisk className="text-purple-400 text-lg mt-1" />

                    <div>
                      <h3 className="text-md font-medium">{title}:</h3>
                      <p className="text-gray-400 text-md leading-relaxed">
                        {details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {index < Process.length - 1 && (
            <div className="w-full border-b border-gray-700" />
          )}
        </div>
      ))}
      <div className="px-4 sm:px-6 md:px-12 lg:px-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white mt-16 -mb-4">
        <div className="bg-[#8E54E9] rounded-md relative h-64 w-full sm:w-80 mx-auto sm:mx-0">
          <p className="text-6xl absolute top-10 left-10">95%</p>
          <p className="absolute bottom-14 right-10">Percent</p>
          <p className="absolute bottom-8 right-10 text-lg">
            customer satisfaction
          </p>
        </div>
        <div className="bg-[#1A1A1A] rounded-md relative h-64 w-full sm:w-80 mx-auto sm:mx-0 border border-gray-800">
          <p className="text-6xl absolute top-10 left-10">2+</p>
          <p className="absolute bottom-14 right-10">Years</p>
          <p className="absolute bottom-8 right-10 text-lg">of experience</p>
        </div>
        <div className="bg-[#fff] text-black rounded-md relative h-64 w-full sm:w-80 mx-auto sm:mx-0 border border-gray-800">
          <p className="text-6xl absolute top-10 left-10">15+</p>
          <p className="absolute bottom-14 right-10">Projects</p>
          <p className="absolute bottom-8 right-10 text-lg">completed</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
