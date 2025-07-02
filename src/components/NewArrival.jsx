import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const arrivalItems = [
  {
    bg: "bg-arrival1",
    title: "Buy One,\nGet One 50% Off",
    colSpan: "md:col-span-4 md:row-span-2",
    align: "items-center text-center",
    height: "h-[300px] md:h-[624px]",
  },
  {
    bg: "bg-arrival2",
    title: "Free Shipping\non All Orders Today",
    colSpan: "md:col-span-8",
    align: "items-start",
    height: "h-[300px]",
  },
  {
    bg: "bg-arrival3",
    title: "Top Brands\nNow Up to 40% Off",
    colSpan: "md:col-span-4",
    align: "items-center text-center",
    height: "h-[300px]",
  },
  {
    bg: "bg-arrival4",
    title: "Smart Home\nBundles on Sale",
    colSpan: "md:col-span-4",
    align: "items-center text-center",
    height: "h-[300px]",
  },
];

const NewArrival = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h3 className="text-accent font-semibold font-heading">
              Automate your life
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Enjoy huge, limited-time deals on select devices so you'll never
              miss a moment this holiday season and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-6">
            {arrivalItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-end p-8 text-white space-y-2 ${item.bg} ${item.colSpan} ${item.align} ${item.height}`}
              >
                <h4 className="font-heading font-bold whitespace-pre-line">
                  {item.title}
                </h4>
                <Link
                  to=""
                  className="flex items-center gap-1 text-sm md:text-base font-medium"
                >
                  Shop Now <IoIosArrowForward />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default NewArrival;
