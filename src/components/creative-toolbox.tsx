import React from "react";

const skills = [
  {
    title: "Figma",
    details: "Leading collaborative design tool",
    percentage: "90",
    color: "bg-red-500",
  },
  {
    title: "Canva",
    details:
      "Skilled in Canva for designing professional graphics and layouts.",
    percentage: "60",
    color: "bg-cyan-500",
  },
  {
    title: "Miro",
    details:
      "Skilled in Miro for journey mapping, wireframing, and team collaboration.",
    percentage: "40",
    color: "bg-yellow-500",
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
            {skills.map(({ title, details, percentage, color }, index) => (
              <div
                key={index}
                className="space-y-4 bg-white p-5 rounded-md shadow-sm"
              >
                {/* Skill Header */}
                <div className="flex items-center space-x-4">
                  <div
                    className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {title === "Figma" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 24a4 4 0 004-4v-4H8a4 4 0 000 8z"
                          fill="currentColor"
                        />
                        <path
                          d="M4 16a4 4 0 014-4h4v8H8a4 4 0 01-4-4z"
                          fill="currentColor"
                        />
                        <path
                          d="M4 8a4 4 0 014-4h4v8H8a4 4 0 01-4-4z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 4h4a4 4 0 010 8h-4V4z"
                          fill="currentColor"
                        />
                        <circle cx="16" cy="16" r="4" fill="currentColor" />
                      </svg>
                    )}
                    {title === "Canva" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.5 12L10 14.5L16.5 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                    {title === "Miro" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{details}</p>
                  </div>
                </div>

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
