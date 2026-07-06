import React from "react";
import {
  BsPalette,
  BsCursorFill,
  BsPeopleFill,
  BsPhoneLandscapeFill,
  BsColumns,
  BsPhoneFill,
} from "react-icons/bs";

const skills = [
  {
    id: 1,
    icon: <BsPalette className="text-white text-2xl" />,
    title: "Web Design Principles",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    id: 2,
    icon: <BsCursorFill className="text-white text-2xl" />,
    title: "User Interface - UI Design",
    description:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    id: 3,
    icon: <BsPeopleFill className="text-white text-2xl" />,
    title: "User Experience - UX Design",
    description:
      "Understanding of user behavior and psychology to design seamless and enjoyable experiences that meet user needs and goals.",
  },
  {
    id: 4,
    icon: <BsPhoneLandscapeFill className="text-white text-2xl" />,
    title: "Responsive Web Design",
    description:
      "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
  },
  {
    id: 5,
    icon: <BsColumns className="text-white text-2xl" />,
    title: "Wireframing and Prototyping",
    description:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
  {
    id: 6,
    icon: <BsPhoneFill className="text-white text-2xl" />,
    title: "Mobile-Friendly Optimization",
    description:
      "Proficiency in optimizing interfaces for mobile devices, ensuring touch support, performance, and accessibility.",
  },
];

const NewSection = () => {
  return (
    <section className="bg-[#111111] py-10 sm:py-16 md:py-24 px-4">
      <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 ml-0 md:ml-56">
        <div className="relative">
          <div className="bg-blue-400 w-4 h-4 rounded-full animate-ping opacity-75" />
          <div className="bg-blue-500 w-3 h-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="text-sm text-gray-400 font-medium">
          &#123;02&#125; — Creative Skills/Expertise
        </p>
      </div>
      <div className="max-w-full sm:max-w-6xl text-center sm:text-left text-white mx-auto sm:ml-56 my-10">
        <h2 className="text-7xl leading-tighter tracking-tight">
          As a UI/UX designer, I possess a diverse set of skills and expertise
          to bring your UI design visions to life
        </h2>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col items-center text-center h-64"
          >
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              {skill.title}
            </h3>
            <p className="text-gray-600 text-md">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="">
        {/* Benefits Section */}
        <div className="mt-20 text-center text-white">
          <h2 className="text-3xl font-semibold">Benefits</h2>
          <p className="mt-2 text-gray-400 text-sm">
            By choosing my UI/UX design service, you’ll enjoy the following
            benefits
          </p>
        </div>
        {/* First Row: two cards */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-14">
            <h3 className="font-semibold text-gray-900">
              Customized Designs Tailored to Your Brand
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              I understand the importance of creating a unique and memorable
              brand identity. By collaborating closely with you, I ensure that
              your website reflects your brand’s personality, values, and
              objectives. The result is a customized design that sets you apart
              from the competition and resonates with your target audience.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-14">
            <h3 className="font-semibold text-gray-900">
              Creative Excellence that Captivates Visitors
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              With a keen eye for aesthetics and a passion for creativity, I
              excel in designing visually stunning and engaging websites. By
              combining beautiful visuals, captivating typography, and strategic
              use of color, I create an immersive and impactful user experience
              that leaves a lasting impression on visitors.
            </p>
          </div>
        </div>
        {/* Second Row: three cards */}
        <div className="mt-5 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-14">
            <h3 className="font-semibold text-gray-900">
              User-Centric Approach for Optimal Experience
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              I prioritize UX design by placing your visitors at the center of
              the process, using in-depth research and testing to ensure
              intuitive navigation that drives engagement.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-14">
            <h3 className="font-semibold text-gray-900">
              Mobile-Friendly Designs for Broad Accessibility
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              In today’s mobile-dominated landscape, I specialize in creating
              responsive designs that adapt flawlessly across devices, ensuring
              your site looks and performs beautifully everywhere.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-14">
            <h3 className="font-semibold text-gray-900">
              Expertise in Cutting-Edge Technologies
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              With command of HTML, CSS, JavaScript, and modern frameworks, I
              leverage the latest web technologies to incorporate animations,
              interactivity, and performance optimizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
