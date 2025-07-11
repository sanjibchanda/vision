import React from "react";
import { Button, Container } from "../components";
import { Link, useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { assets } from "../assets/assets";

const Promo2 = ({ className = "" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="promo2-bg text-white px-6 md:px-12 pt-12 rounded-2xl flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 lg:w-2/3 space-y-6 pb-12">
              <p className="font-heading font-bold text-black uppercase text-sm lg:text-base">
                Don’t wait - limited stock available!
              </p>
              <h2 className="font-bold font-heading uppercase">
                Ready to Elevate Your Audio Experience?
              </h2>
              <p className="text-lg">
                Take your music, calls, and workouts to the next level with our
                high-performance wireless headphones.
              </p>
              <Button
                variant="solid"
                color="dark"
                onClick={handleClick}
                className="flex items-center gap-2"
              >
                Explore Now <IoIosArrowForward />
              </Button>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src={assets.promoModel1}
                srcSet={`${assets.promoModel1} 1x, ${assets.promoModel1_2x} 2x`}
                alt="promo-model1"
                className="w-full relative"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Promo2;
