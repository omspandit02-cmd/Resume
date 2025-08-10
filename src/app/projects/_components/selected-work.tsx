"use client";

import Marquee from "@/components/Marquee";
import { useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsBarChartFill,
  BsBoxArrowUpRight,
  BsDot,
  BsPatchCheckFill,
  BsPeopleFill,
} from "react-icons/bs";
import { Exp } from "../../../../constant/details";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { projects } from "../../../../constant/projects";

const stats = [
  {
    id: 1,
    icon: <BsPatchCheckFill className="text-blue-600 text-xl" />,
    label: "15+ Completed Projects",
  },
  {
    id: 2,
    icon: <BsPeopleFill className="text-blue-600 text-xl" />,
    label: "20+ Happy Customers",
  },
  {
    id: 3,
    icon: <BsBarChartFill className="text-blue-600 text-xl" />,
    label: "02+ Years of Experience",
  },
];

const SelectedWorks = () => {
  const [selectedImages, setSelectedImages] = useState<{
    [key: number]: string;
  }>(() => {
    const initialImages: { [key: number]: string } = {};
    projects.forEach((project) => {
      initialImages[project.id] = project.mainImage;
    });
    return initialImages;
  });

  const [dialogOpen, setDialogOpen] = useState<{ [key: number]: boolean }>({});

  const handleThumbnailClick = (projectId: number, imageSrc: string) => {
    setSelectedImages((prev) => ({
      ...prev,
      [projectId]: imageSrc,
    }));
  };

  const handleDialogOpen = (projectId: number, open: boolean) => {
    setDialogOpen((prev) => ({
      ...prev,
      [projectId]: open,
    }));
  };

  return (
    <>
      <div className="bg-[#F6F6F6]">
        <section className="pt-8 md:pt-16 bg-[#F6F6F6] px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center text-xs">
              <BsDot className="text-purple-600 text-3xl md:text-5xl" />
              <span className="text-black dark:text-gray-300 text-xs md:text-sm">
                My Recent Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-gray-900">
              Selected work
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 px-2 md:px-0">
              Here’s what some of my satisfied clients have to say about my work
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 px-2">
            {stats.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 bg-white dark:bg-gray-900 text-center sm:text-left"
              >
                {item.icon}
                <span className="text-gray-700 dark:text-gray-200 text-xs md:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Projects Header */}
          <div className="mt-12 max-w-7xl mx-auto flex items-center justify-between px-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Projects
            </h3>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <BsArrowLeft className="text-gray-600 dark:text-gray-300 text-sm md:text-base" />
              </button>
              <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <BsArrowRight className="text-gray-600 dark:text-gray-300 text-sm md:text-base" />
              </button>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto border-t border-gray-300 mt-4 md:mt-8 px-4" />
        </section>

        <div className="py-6 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto px-4">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-[#F7F6F3]  rounded-lg p-4 md:p-8">
              <h3 className="text-gray-800 font-medium mb-4 text-sm md:text-base">
                {proj.title}
              </h3>
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src={selectedImages[proj.id] || proj.mainImage}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-60 object-cover"
                />
                <Dialog
                  open={dialogOpen[proj.id] || false}
                  onOpenChange={(open) => handleDialogOpen(proj.id, open)}
                >
                  <DialogTrigger asChild>
                    <button className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 p-1.5 md:p-2 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-600">
                      <BsBoxArrowUpRight className="text-gray-600 cursor-pointer hover:opacity-75 text-sm md:text-base" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] md:max-w-4xl w-full max-h-[90vh] overflow-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg md:text-xl">
                        {proj.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center p-2">
                      <Image
                        src={selectedImages[proj.id] || proj.mainImage}
                        alt={proj.title}
                        width={800}
                        height={600}
                        className="rounded-lg object-contain max-h-[60vh] md:max-h-[70vh] w-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="mt-4 flex justify-center space-x-1 md:space-x-2 overflow-x-auto pb-2">
                {/* Main image as thumbnail - only show if not currently selected */}
                {selectedImages[proj.id] !== proj.mainImage && (
                  <Image
                    src={proj.mainImage}
                    alt="main thumbnail"
                    width={80}
                    height={50}
                    className="rounded-md h-12 md:h-14 w-16 md:w-auto object-cover cursor-pointer transition-all duration-200 opacity-70 hover:opacity-100 flex-shrink-0"
                    onClick={() =>
                      handleThumbnailClick(proj.id, proj.mainImage)
                    }
                  />
                )}
                {/* Other thumbnails - only show if not currently selected */}
                {proj.thumbnails
                  .filter((src) => selectedImages[proj.id] !== src)
                  .map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt="thumbnail"
                      width={80}
                      height={50}
                      className="rounded-md h-12 md:h-14 w-16 md:w-auto object-cover cursor-pointer transition-all duration-200 opacity-70 hover:opacity-100 flex-shrink-0"
                      onClick={() => handleThumbnailClick(proj.id, src)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee details={Exp} />
    </>
  );
};

export default SelectedWorks;
