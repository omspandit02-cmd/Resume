import React from "react";
import { Linkedin, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="py-10 sm:py-16 lg:py-30 bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 lg:px-64 flex items-start flex-col">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <div className="bg-rose-400 size-4 rounded-full animate-ping" />
            <div className="bg-rose-500 size-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-400">{"[04] — Contact me"}</p>
          </div>
        </div>
        <div className="max-w-full sm:max-w-4xl pb-12 sm:pb-24">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-gray-900 font-light">
            {"I'm all over the internet"}
          </p>
        </div>

        {/* Social Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full sm:max-w-5xl mx-auto">
          {/* LinkedIn Card */}
          <a
            className="bg-white rounded-xl h-44 w-full sm:w-80 relative p-8"
            href="https://www.linkedin.com/in/om-pandit-7b2841215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-medium text-gray-900">LinkedIn</h3>
              <div className="bg-[#8E54E9] p-4 rounded-full absolute bottom-3 right-3">
                <Linkedin className="size-4 text-white" />
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/omspandit02"
            className="bg-white rounded-xl h-44 w-full sm:w-80 relative p-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-medium text-gray-900">Instagram</h3>
              <div className="bg-[#8E54E9] p-4 rounded-full absolute bottom-3 right-3">
                <Instagram className="size-4 text-white" />
              </div>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            className="bg-white rounded-xl h-44 w-full sm:w-80 relative p-8"
            href="https://wa.me/+918657504302"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-medium text-gray-900">Whatsapp</h3>
              <div className="bg-[#8E54E9] p-4 rounded-full absolute bottom-3 right-3">
                <MessageCircle className="size-4 text-white" />
              </div>
            </div>
          </a>

          {/* Behance Card */}
          <a
            className="bg-white rounded-xl h-44 w-full sm:w-80 relative p-8"
            href="https://www.behance.net/ompandit5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-medium text-gray-900">Behance</h3>
              <div className="bg-[#8E54E9] p-4 rounded-full absolute bottom-3 right-3">
                <div className="size-5 text-white rounded font-extrabold flex items-center justify-center text-xl">
                  Be
                </div>
              </div>
            </div>
          </a>

          {/* Get in Touch Card */}
          <a
            className="bg-[#8E54E9] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow w-full sm:w-80 col-span-1 relative"
            href="mailto:Omspandit02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between h-full py-10 lg:py-0">
              <h3 className="text-xl font-medium text-white absolute top-8 left-6">
                Get in touch
              </h3>
              <div className="bg-white/20 p-4 rounded-full absolute bottom-3 right-3">
                <ArrowUpRight className="size-4 text-white" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
