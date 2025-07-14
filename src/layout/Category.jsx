import React from "react";
import { useNavigate } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "../components";
import { assets } from "../assets/assets";

const categories = [
  { name: "phones", img: assets.product.iphone16 },
  { name: "headphones", img: assets.product.airpodsMax },
  { name: "Watch", img: assets.product.AppleWatchSeries10 },
  { name: "Airpod", img: assets.product.GalaxyBuds3Pro },
  { name: "Mac", img: assets.product.MacBookPro },
  { name: "Accessories", img: assets.product.powerBank },
];

const Category = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories?category=${categoryName}`);
  };

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
                onClick={() => handleCategoryClick(item.name)}
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
