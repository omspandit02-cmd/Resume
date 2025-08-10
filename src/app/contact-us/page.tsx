"use client";

import Marquee from "@/components/Marquee";
import { useState } from "react";
import {
  BsArrowRight,
  BsBehance,
  BsChatSquareTextFill,
  BsClockFill,
  BsInstagram,
  BsLightningChargeFill,
  BsLinkedin,
  BsStars,
} from "react-icons/bs";
import { Exp } from "../../../constant/details";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const benefits = [
  {
    id: 1,
    icon: <BsClockFill className="text-blue-600 text-xl" />,
    label: "24 / 7 Assistance",
  },
  {
    id: 2,
    icon: <BsLightningChargeFill className="text-blue-600 text-xl" />,
    label: "Quick Change Resolutions",
  },
  {
    id: 3,
    icon: <BsStars className="text-blue-600 text-xl" />,
    label: "Flexible Working hours",
  },
];

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: [] as string[],
    budget: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((s) => s !== service),
    }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Project Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `
Hi,

I'm ${formData.firstName} ${
      formData.lastName
    } and I'm interested in your services.

Contact Details:
- Email: ${formData.email}
- Phone: ${formData.phone}

Services Needed:
${
  formData.services.length > 0
    ? formData.services.map((s) => `- ${s}`).join("\n")
    : "- Not specified"
}

Budget: ${formData.budget || "Not specified"}

Message:
${formData.message || "No additional message provided."}

Best regards,
${formData.firstName} ${formData.lastName}
    `.trim();

    const mailtoLink = `mailto:Omspandit02@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const faqs = [
    {
      question: "Can you work with clients remotely?",
      answer:
        "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
    },
    {
      question:
        "How long does it typically take to complete a UI design project?",
      answer:
        "Timelines vary by scope. A landing page usually takes ~1–2 weeks, a multi‑page marketing site ~2–4 weeks, and a complex dashboard/SaaS app ~4–8+ weeks. This covers discovery, wireframes, visual design, and iterations. I’ll share a detailed schedule after scoping.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes. I provide ongoing maintenance plans (monthly or ad‑hoc) that include updates, bug fixes, performance checks, backups, uptime monitoring, and small content/design changes—with clear SLAs and reporting.",
    },
    {
      question: "Can you optimize my website for search engines?",
      answer:
        "Yes. I implement on‑page SEO best practices: semantic HTML, accessible structure, clean URLs, title/meta tags, Open Graph, schema where helpful, image/asset optimization, and Core Web Vitals performance improvements. I can also collaborate on content and off‑page strategy.",
    },
    {
      question:
        "Can you integrate third-party tools or platforms into my website?",
      answer:
        "Absolutely. I integrate payment gateways, analytics, CRMs, marketing tools, authentication, headless CMS, booking systems, and chat/support widgets via secure APIs and webhooks, ensuring reliable error handling and clear documentation.",
    },
  ];

  return (
    <>
      <section className="py-10 sm:py-16 mb-20 px-4 sm:px-6 md:px-12 lg:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-gray-900 mb-8 sm:mb-16 text-center sm:text-left">
            Contact us
          </h1>
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-lg">
              <BsChatSquareTextFill size={24} />
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            We’d love to here from you.
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Have a project in mind? Let’s bring it to life.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 flex items-center gap-2 bg-white dark:bg-gray-900 mx-auto"
            >
              {item.icon}
              <span className="text-gray-700 dark:text-gray-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Details & Form */}
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-row sm:flex-row items-start sm:items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">You can Email Me Here</p>
                <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">
                  Omspandit02<span className="text-[#8E54E9]">@</span>gmail.com
                </p>
              </div>
              <a
                href="mailto:Omspandit02@gmail.com"
                className="p-3 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <BsArrowRight className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-row sm:flex-row items-start sm:items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Give Me a Call on</p>
                <p className="mt-1 text-lg text-purple-600">
                  +91 <span className="text-black">8657504302</span>
                </p>
              </div>
              <a
                href="tel:+918657504302"
                className="p-3 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <BsArrowRight className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-row sm:flex-row items-start sm:items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  Opposite Red Cross Bhavan, Three Petrol Pump, Lal Bahadur
                  Shastri Marg, Thane West, Thane, Maharashtra 400602
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Opposite+Red+Cross+Bhavan,+Three+Petrol+Pump,+Lal+Bahadur+Shastri+Marg,+Thane+West,+Thane,+Maharashtra+400602"
                className="p-3 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsArrowRight className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>

            <div>
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                My Social Profiles
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-md"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href="https://behance.net"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-md"
                >
                  <BsBehance size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-md"
                >
                  <BsInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form
            onSubmit={handleSendEmail}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md p-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Why are you contacting us?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) =>
                      handleServiceChange("E-commerce/ UIUX", e.target.checked)
                    }
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-200">
                    E-commerce/ UIUX
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) =>
                      handleServiceChange(
                        "Dashboard / SaaS Interface",
                        e.target.checked
                      )
                    }
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-200">
                    Dashboard / SaaS Interface
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) =>
                      handleServiceChange("Mobile App Design", e.target.checked)
                    }
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-200">
                    Mobile App Design
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) =>
                      handleServiceChange("Others", e.target.checked)
                    }
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-200">
                    Others
                  </span>
                </label>
              </div>
            </div>

            <Select
              value={formData.budget}
              onValueChange={(value) => handleInputChange("budget", value)}
            >
              <SelectTrigger className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                <SelectValue placeholder="Budget Dropdown" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under $5,000">Under $5,000</SelectItem>
                <SelectItem value="$5,000 - $10,000">
                  $5,000 - $10,000
                </SelectItem>
                <SelectItem value="$10,000 - $25,000">
                  $10,000 - $25,000
                </SelectItem>
                <SelectItem value="$25,000 - $50,000">
                  $25,000 - $50,000
                </SelectItem>
                <SelectItem value="Over $50,000">Over $50,000</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              rows={4}
              placeholder="Your Message here..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-32 max-h-36"
            />

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>Send now</span>
                <BsArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-16 max-w-3xl mx-auto px-4 sm:px-0 text-center">
          <h2 className="text-5xl font-semibold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Here are answers to some common questions
          </p>
        </div>
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: FAQ List */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Right Column: FAQ CTA */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg space-y-4 self-start">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-lg">
              <BsStars size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Still have any Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Let’s collaborate to create an exceptional UI Design that sets you
              apart from the competition. Contact me today to discuss your web
              design needs and bring your digital vision to life!
            </p>
            <a
              className="inline-flex items-center px-6 py-2 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white rounded-full"
              href="mailto:Omspandit02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me <BsArrowRight className="ml-2" />
            </a>
          </div>
        </div>
        {/* End FAQ Section */}
      </section>

      <Marquee details={Exp} />
    </>
  );
};

export default Page;
