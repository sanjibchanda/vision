import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "./Container";
import slider1 from "../assets/images/slider1.jpg";
import slider1_2x from "../assets/images/slider1@2x.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider2_2x from "../assets/images/slider2@2x.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider3_2x from "../assets/images/slider3@2x.jpg";
import Button from "./Button";

const BoxSliderContent = ({ className = "" }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const slides = [
    {
      src: slider1,
      srcSet: `${slider1} 1x, ${slider1_2x} 2x`,
      alt: "Smart device in living room",
    },
    {
      src: slider2,
      srcSet: `${slider2} 1x, ${slider2_2x} 2x`,
      alt: "Voice assistant with smart light",
    },
    {
      src: slider3,
      srcSet: `${slider3} 1x, ${slider3_2x} 2x`,
      alt: "Modern home with smart speakers",
    },
  ];

  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
          {/* Left Content */}
          <div className="bg-secondaryLight flex flex-col items-center justify-center gap-6 text-center p-6 md:p-12 rounded-lg">
            <span className="inline-block font-heading font-bold text-secondary uppercase text-sm lg:text-base">
              Stay Connected
            </span>
            <h3 className="text-secondary font-semibold font-heading text-2xl lg:text-3xl">
              Turn your home into a smart home
            </h3>
            <p className="text-secondary text-sm lg:text-base">
              A smart home is one that has a variety of connected devices and
              systems that can be controlled remotely, often using a smartphone
              or tablet.
            </p>
            <Button variant="solid" color="dark">
              Shop Now
            </Button>
          </div>

          {/* Right Image Slider */}
          <div className="rounded-lg overflow-hidden prodSingleSLider">
            <Slider {...settings}>
              {slides.map((slide, idx) => (
                <div key={idx}>
                  <img
                    src={slide.src}
                    srcSet={slide.srcSet}
                    alt={slide.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BoxSliderContent;
