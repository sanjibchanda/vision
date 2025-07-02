import React from "react";
import Container from "./Container";

import SmartPhones from "../assets/images/product/iphone-16-front.png";
import Headphones from "../assets/images/product/Beats.png";
import Speakers from "../assets/images/product/homePod.png";
import SmartWatch from "../assets/images/product/apple-watch.png";
import EarPods from "../assets/images/product/Galaxy-Buds3-Pro.png";
import Accessories from "../assets/images/product/powerBank.png";

const categories = [
  { name: "SmartPhones", img: SmartPhones },
  { name: "Headphones", img: Headphones },
  { name: "Speakers", img: Speakers },
  { name: "SmartWatch", img: SmartWatch },
  { name: "EarPods", img: EarPods },
  { name: "Accessories", img: Accessories },
];

const Category = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-surface p-5 text-center space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-28 mx-auto object-contain"
                />
                <p className="font-heading font-semibold text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Category;
