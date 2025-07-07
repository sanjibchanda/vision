import React from "react";
import {
  Hero,
  Offer,
  Features,
  Support,
  News,
  NewArrival,
  Category,
  Brand,
  BoxContent,
  BoxContent2,
  BoxSliderContent,
  Testimonial,
  Promo,
} from "../layout";

const Home = () => {
  return (
    <>
      <Hero className="mb-12" />
      <Offer className="mb-12 md:mb-16 xl:mb-20" />
      <Features className="mb-12 md:mb-16 xl:mb-20" />
      <NewArrival className="mb-12 md:mb-16 xl:mb-20" />
      <Category className="mb-12 md:mb-16 xl:mb-20" />
      <BoxContent className="mb-12 md:mb-16 xl:mb-20" data="data1" />
      <BoxSliderContent className="mb-12 md:mb-16 xl:mb-20" />
      <Brand className="mb-12 md:mb-16 xl:mb-20" />
      <BoxContent2 className="mb-12 md:mb-16 xl:mb-20" />
      <Testimonial className="mb-12 md:mb-16 xl:mb-20" />
      <Promo className="my-12 md:my-16 xl:my-20" />
      <News className="mb-12 md:mb-16 xl:mb-20" />
      <Support />
    </>
  );
};

export default Home;
