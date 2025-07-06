import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "../components";
import { assets } from "../assets/assets";

const categories = [
  { name: "SmartPhones", img: assets.product.iphone16Front },
  { name: "Headphones", img: assets.product.Beats },
  { name: "Speakers", img: assets.product.homePod },
  { name: "SmartWatch", img: assets.product.appleWatch },
  { name: "EarPods", img: assets.product.GalaxyBuds3Pro },
  { name: "Accessories", img: assets.product.powerBank },
];

const Category = ({ className = "" }) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10 categorySlider">
          <Slider {...settings}>
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-surface p-5 text-center space-y-6 cursor-pointer"
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
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Category;
