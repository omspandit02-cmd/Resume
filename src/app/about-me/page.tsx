import CreativeToolbox from "@/components/creative-toolbox";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import { BsFileEarmarkArrowDown, BsLinkedin } from "react-icons/bs";
import { Exp, Works } from "../../../constant/details";
import MyWorks from "./my-works";
import NewSection from "./new-section";

const page = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="pt-16 sm:pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 mb-8">
          About me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={350}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2">
              <a
                href="https://www.linkedin.com/in/omspandit02/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="text-gray-800 dark:text-white" />
              </a>
              <a
                href="mailto:Omspandit02@gmail.com"
                className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-purple-500"
              >
                Omspandit02<span className="text-[#8E54E9]">@</span>gmail.com
              </a>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-tight">
              I’m Om Pandit, a dedicated UI/UX designer with a passion for
              crafting visually engaging and intuitive digital experiences that
              prioritize user needs and aesthetics.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl"
            >
              Download My Resume
              <BsFileEarmarkArrowDown
                className="ml-2 p-1.5 rounded-full bg-white text-[#8E54E9]"
                size={27}
              />
            </a>
          </div>
          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6 font-semibold">
            <p className="text-gray-900 text-lg font-semibold">
              Hello, I’m Om, a creative UI/UX designer driven by a passion for
              turning ideas into visually stunning and user-friendly digital
              experiences. With a strong foundation in design and front-end
              development, I craft responsive interfaces that not only look
              beautiful but feel intuitive and effortless on any device.
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-300 font-semibold">
              Throughout my design journey, I’ve had the privilege of partnering
              with everyone from bold start-ups to globally recognized
              brands—helping turn their ideas into meaningful digital
              experiences that connect with people. My work focuses on crafting
              intuitive AR fashion try-ons, intelligent dashboards, mobile apps,
              and scalable design systems.
            </p>
            <div className="space-y-4 font-semibold">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-gray-900 dark:text-gray-100">
                <span className="text-left">Zidio</span>
                <span className="text-center">UI/UX Designer</span>
                <span className="text-right">May 2025–June 2025</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4 text-gray-900 dark:text-gray-100">
                <span className="text-left">Pamprazzi</span>
                <span className="text-center">UI/UX Designer</span>
                <span className="text-right">May 2025–June 2025</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4 text-gray-900 dark:text-gray-100">
                <span className="text-left">Wyreflow</span>
                <span className="text-center">UI/UX Designer</span>
                <span className="text-right">May 2025–June 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreativeToolbox />
      <Marquee details={Works} />
      <NewSection />
      <MyWorks />
      <Marquee details={Exp} />
    </section>
  );
};

export default page;
