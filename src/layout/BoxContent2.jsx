import React, { useState } from "react";
import { Container } from "../components";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import { assets } from "../assets/assets";
import { boxContentData2 } from "../data";

const BoxContent2 = ({ className = "" }) => {
  const {
    subtitle,
    title,
    description,
    features,
    image: { src, src2x },
  } = boxContentData2;

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <div className="flex flex-col sm:flex-row">
          {/* Left box */}
          <div className="space-y-6 sm:w-1/2 bg-teritory text-white py-12 px-4 lg:px-12 rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl">
            <span className="bg-surface px-6 py-1 rounded-full inline-flex items-center gap-2 font-heading font-bold text-accent uppercase text-sm lg:text-base">
              <FaCircle className="text-teritory text-xs lg:text-sm" />
              {subtitle}
            </span>
            <h3 className="font-semibold font-heading">{title}</h3>
            <p>{description}</p>

            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="border-b border-white/20 py-4 flex gap-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="text-xl mt-1">
                    <img src={feature.icon} alt="icon" className="w-6" />
                  </div>
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between ">
                      <p className="text-lg">{feature.title}</p>
                      <FaChevronDown
                        className={`transition-transform duration-300 text-sm ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {activeIndex === index && (
                      <div className="text-sm">{feature.description}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right box */}
          <div className="sm:w-1/2">
            <img
              src={src}
              srcSet={`${src} 1x, ${src2x} 2x`}
              alt="smart home visual"
              className="w-full h-full object-cover rounded-b-2xl sm:rounded-bl-none sm:rounded-tr-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BoxContent2;
