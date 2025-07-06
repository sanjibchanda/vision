import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "../components";
import { FaRegStarHalfStroke, FaStar, FaRegStar } from "react-icons/fa6";
import { feedback } from "../data";

const Testimonial = ({ className = "" }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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
          <div className="space-y-4">
            <h3 className="text-accent font-semibold font-heading">
              What Our Customers Are Saying
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Your feedback drives us — explore honest reviews and top-rated
              picks
            </p>
          </div>
          <div className="testimonialSlider">
            <Slider {...settings}>
              {feedback.map((item, index) => (
                <div key={index} className="bg-surface2 p-6 space-y-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(Math.floor(item.rating))].map((_, i) => (
                      <FaStar key={`full-${i}`} />
                    ))}
                    {item.rating % 1 >= 0.5 && (
                      <FaRegStarHalfStroke key="half" />
                    )}
                    {[...Array(5 - Math.ceil(item.rating))].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} />
                    ))}
                  </div>
                  <p className="text-muted">{item.review}</p>
                  <hr className="border-border" />
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      srcSet={`${item.image} 1x, ${item.image2x} 2x`}
                      alt={item.name}
                      className="rounded-full size-16"
                    />
                    <div className="space-y-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-muted">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
