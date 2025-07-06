import React from "react";
import { Container } from "../components";
import { assets } from "../assets/assets";

const brands = [
  { name: "Noice", img: assets.brand.noise },
  { name: "Sphere", img: assets.brand.sphere },
  { name: "Rous", img: assets.brand.rous },
  { name: "Primus", img: assets.brand.primus },
  { name: "Drifly", img: assets.brand.drifly },
  { name: "Connex", img: assets.brand.connex },
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
