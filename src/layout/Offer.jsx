import React from "react";
import { Container } from "../components";
import { NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { offerData } from "../data"; // or move data directly in this file

const Offer = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerData.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-[1fr_90px] xl:grid-cols-[1fr_120px] gap-4 items-center justify-between p-4 border border-border rounded-lg ${
                  item.spanCols ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-2">
                  <p className="font-medium md:text-lg">{item.title}</p>
                  <NavLink
                    to={item.link}
                    className="flex items-center gap-1 text-sm md:text-base text-primary"
                  >
                    Explore Categories <IoIosArrowForward />
                  </NavLink>
                </div>
                <div>
                  <img
                    loading="lazy"
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    alt="Offer"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Offer;
