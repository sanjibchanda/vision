import React from "react";
import Container from "./Container";

import brand1 from "../assets/images/brand/brand1.svg";
import brand2 from "../assets/images/brand/brand2.svg";
import brand3 from "../assets/images/brand/brand3.svg";
import brand4 from "../assets/images/brand/brand4.svg";
import brand5 from "../assets/images/brand/brand5.svg";
import brand6 from "../assets/images/brand/brand6.svg";

const brands = [
  { name: "Noice", img: brand1 },
  { name: "Sphere", img: brand2 },
  { name: "Rous", img: brand3 },
  { name: "Primus", img: brand4 },
  { name: "Drifly", img: brand5 },
  { name: "Connex", img: brand6 },
];

const Brand = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="space-y-4">
            <h3 className="text-accent font-semibold font-heading">
              Browse by Brand
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Discover premium gadgets from the world’s leading tech brands.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-surface px-4 py-10 flex items-center cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Brand;
