import React from "react";
import { Asterisk } from "lucide-react";

type MarqueeProps = {
  details: { number?: string; title: string }[];
};

const Marquee = ({ details }: MarqueeProps) => {
  const repeatedDetails = [...details, ...details, ...details];

  return (
    <div className="relative w-full h-16 overflow-hidden bg-[#2F2F2F]">
      <div className="marquee-track flex">
        {repeatedDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-white text-xl mx-8 pt-3 whitespace-nowrap"
          >
            <Asterisk className="text-[#39FF14] size-10 mr-2 flex-shrink-0" />
            <span className="text-[#8E54E9] font-semibold">{item.number}</span>
            <span className="text-white font-semibold text-2xl ml-0.5">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
