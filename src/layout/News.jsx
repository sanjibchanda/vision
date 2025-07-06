import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Post } from "../components";
import { newsData } from "../data";

const News = ({ className = "" }) => {
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
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="space-y-4 ">
            <h3 className="text-accent font-semibold font-heading">
              Latest News
            </h3>
            <p className="text-muted text-sm lg:text-base">
              If you're thinking about turning your home into a smart home,
              you're not alone.
            </p>
          </div>
          <div className="newsSlider">
            <Slider {...settings}>
              {newsData.map((item) => (
                <Post key={item.id} {...item} />
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;
