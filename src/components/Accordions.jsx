import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { faqData } from "../data";

const Accordions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <ul className="space-y-4">
        {faqData.map((item, index) => (
          <li key={index} className="pb-4 border-b border-border">
            <button
              onClick={() => toggleIndex(index)}
              className="flex gap-4 justify-between items-start w-full text-left"
            >
              <p className="font-heading font-semibold text-lg">
                {item.question}
              </p>
              {activeIndex === index ? <LuMinus /> : <LuPlus />}
            </button>
            {activeIndex === index && (
              <div className="text-muted text-sm/6 mt-3">
                <p>{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Accordions;
