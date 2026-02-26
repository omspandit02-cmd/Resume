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

const certifications = [
  {
    id: 1,
    title: "Edit Institute Certification",
    previewImage: "/certifications/edit-institute-ss.png",
    file: "/certifications/edit-institute.pdf",
    type: "pdf",
  },
  {
    id: 2,
    title: "Furation Tech Certification",
    previewImage: "/certifications/furation-tech-ss.png",
    file: "/certifications/furation-tech.pdf",
    type: "pdf",
  },
  {
    id: 3,
    title: "Zidio Certification",
    previewImage: "/certifications/zidio.png",
    file: "/certifications/zidio.png",
    type: "image",
  },
];

const MyCertification = () => {
  const [dialogOpen, setDialogOpen] = useState<{ [key: number]: boolean }>({});

  const handleDialogOpen = (certId: number, open: boolean) => {
    setDialogOpen((prev) => ({
      ...prev,
      [certId]: open,
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
            &#123;04&#125; — Certifications
          </p>
        </div>
        <h2 className="text-7xl tracking-tight font-semibold text-gray-900 dark:text-white mb-4">
          My Certifications
        </h2>
      </div>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-[#F7F6F3] rounded-lg p-8">
            <h3 className="text-gray-800 font-medium mb-4">{cert.title}</h3>
            <div className="relative rounded-md overflow-hidden">
              <Dialog
                open={dialogOpen[cert.id] || false}
                onOpenChange={(open) => handleDialogOpen(cert.id, open)}
              >
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Image
                      src={cert.previewImage}
                      alt={cert.title}
                      width={600}
                      height={400}
                      draggable={false}
                      className="w-full h-60 object-cover rounded-md hover:opacity-90 transition-opacity"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>{cert.title}</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center h-[80vh]">
                    {cert.type === "image" ? (
                      <Image
                        src={cert.file}
                        alt={cert.title}
                        width={800}
                        height={600}
                        draggable={false}
                        className="rounded-lg object-contain max-h-full"
                      />
                    ) : (
                      <iframe
                        src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                        width="100%"
                        height="100%"
                        className="rounded-lg border-0"
                        title={cert.title}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCertification;
