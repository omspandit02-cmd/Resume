"use client";

import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Rolls Royce Design",
    mainImage: "/royal/1.png",
    thumbnails: [
      "/royal/2.png",
      "/royal/3.png",
      "/royal/4.png",
      "/royal/5.png",
    ],
  },
  {
    id: 2,
    title: "Essence Perfume Website",
    mainImage: "/perfume/1.png",
    thumbnails: [
      "/perfume/2.png",
      "/perfume/3.png",
      "/perfume/4.png",
      "/perfume/5.png",
    ],
  },
  {
    id: 3,
    title: "AR Jewelry App",
    mainImage: "/jewelry/1.png",
    thumbnails: [
      "/jewelry/2.png",
      "/jewelry/3.png",
      "/jewelry/4.png",
      "/jewelry/5.png",
    ],
  },
];

const MyWorks = () => {
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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative">
            <div className="bg-purple-400 w-4 h-4 rounded-full animate-ping opacity-75" />
            <div className="bg-purple-500 w-3 h-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-sm text-gray-600 font-medium">
            &#123;03&#125; — Clients and Companies
          </p>
        </div>
        <h2 className="text-7xl tracking-tight font-semibold text-gray-900 dark:text-white mb-4">
          My Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here’s what some of my satisfied clients have to say about my work
        </p>
      </div>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-[#F7F6F3]  rounded-lg p-8">
            <h3 className="text-gray-800 font-medium mb-4">{proj.title}</h3>
            <div className="relative rounded-md overflow-hidden">
              <Image
                src={selectedImages[proj.id] || proj.mainImage}
                alt={proj.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <Dialog
                open={dialogOpen[proj.id] || false}
                onOpenChange={(open) => handleDialogOpen(proj.id, open)}
              >
                <DialogTrigger asChild>
                  <button className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-600">
                    <BsBoxArrowUpRight className="text-gray-600 cursor-pointer hover:opacity-75" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full">
                  <DialogHeader>
                    <DialogTitle>{proj.title}</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <Image
                      src={selectedImages[proj.id] || proj.mainImage}
                      alt={proj.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-contain max-h-[70vh]"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              {/* Main image as thumbnail - only show if not currently selected */}
              {selectedImages[proj.id] !== proj.mainImage && (
                <Image
                  src={proj.mainImage}
                  alt="main thumbnail"
                  width={80}
                  height={50}
                  className="rounded-md h-14 object-cover cursor-pointer transition-all duration-200 opacity-70 hover:opacity-100"
                  onClick={() => handleThumbnailClick(proj.id, proj.mainImage)}
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
                    className="rounded-md h-14 object-cover cursor-pointer transition-all duration-200 opacity-70 hover:opacity-100"
                    onClick={() => handleThumbnailClick(proj.id, src)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          className="inline-flex items-center px-8 py-3 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl"
          href="/projects"
        >
          <span>View All Projects</span>
          <div className="bg-white rounded-full p-2 ml-2">
            <BsBoxArrowUpRight className="text-[#8E54E9]" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MyWorks;
