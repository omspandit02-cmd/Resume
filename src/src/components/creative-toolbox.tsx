import React from "react";
import Image from "next/image";
const skills = [
  {
    title: "Figma",
    details: "Leading collaborative design tool",
    percentage: "90",
    color: "bg-white", // White background for the logo circle
    logo: "/figma.webp",
  },
  {
    title: "Canva",
    details: "Skilled in Canva for designing professional graphics and layouts.",
    percentage: "60",
    color: "bg-white", // White background for the logo circle
    logo: "/canva.webp",
  },
  {
    title: "Miro",
    details: "Skilled in Miro for journey mapping, wireframing, and team collaboration.",
    percentage: "40",
    color: "bg-white", // White background for the logo circle
    logo: "/miro.webp",
  },
];

const CreativeToolbox = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen p-4 sm:p-8 lg:p-40">
      <div className="mx-auto flex flex-col lg:flex-row items-start">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-end lg:items-start text-center lg:text-end">
          {/* Left side - Title */}
          <div className="lg:ml-26 ml-0">
            <div className="flex items-center space-x-3 mb-4 lg:ml-56 ml-0 justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-blue-400 w-4 h-4 rounded-full animate-ping opacity-75" />
                <div className="bg-blue-500 w-3 h-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-sm text-gray-600 font-medium">
                &#123;02&#125; — Tools & Skills
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
              My creative
              <br />
              toolbox
            </h1>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full mt-12 lg:mt-0 lg:ml-auto lg:w-1/2 lg:max-w-2xl">
          <div className="space-y-12">
            {skills.map(({ title, details, percentage, color, logo }, index) => (
              <div
                key={index}
                className="space-y-4 bg-white p-5 rounded-md shadow-sm"
              >
                {/* Skill Header */}
                <div className="flex items-center space-x-4">
                  
                  <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center p-1 overflow-hidden border border-gray-100 shadow-inner`}>
                    <Image
                      src={logo} 
                      alt={`${title} logo`}
                      width={80}
                      height={80}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{details}</p>
                  </div>
                </div>

                {/* Progress Bar (is same) */}
                <div className="space-y-2">
                  <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-end">
                    <span className="text-sm font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded">
                      {percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeToolbox;