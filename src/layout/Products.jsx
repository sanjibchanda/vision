import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Product } from "../components";
import { productData } from "../data";

const filterButtons = [
  { label: "All", value: "all" },
  { label: "Trending", value: "trending" },
  { label: "Newly Upcoming", value: "upcoming" },
];

const Products = ({ className = "" }) => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? productData
      : productData.filter((item) => item.category === filter);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-accent font-semibold font-heading">
              Featured Products
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Browse the best of our favorite sale styles and brands.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`py-2 px-4 rounded-full text-sm transition ${
                  filter === btn.value
                    ? "bg-primary text-white"
                    : "bg-surface hover:bg-primary hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="productSlider">
          <Slider {...settings}>
            {filteredProducts.map((item) => (
              <Product key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Products;
