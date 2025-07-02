import React from "react";
import Container from "./Container";
import slider1 from "../assets/images/slider1.jpg";
import slider1_2x from "../assets/images/slider1@2x.jpg";
import Button from "./Button";

const BoxSliderContent = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-secondaryLight flex flex-col items-center justify-center gap-6 text-center p-6 md:p-12">
              <span className="inline-block font-heading font-bold text-secondary uppercase text-sm lg:text-base">
                Stay Connected
              </span>
              <h3 className="text-secondary font-semibold font-heading text-2xl lg:text-3xl">
                Turn your home into a smart home
              </h3>
              <p className="text-secondary text-sm lg:text-base">
                A smart home is one that has a variety of connected devices and
                systems that can be controlled remotely, often using a
                smartphone or tablet.
              </p>
              <Button variant="solid" color="dark">
                Shop Now
              </Button>
            </div>
            <div className="rounded-lg">
              <img
                src={slider1}
                srcSet={`${slider1} 1x, ${slider1_2x} 2x`}
                alt="slider1"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BoxSliderContent;
