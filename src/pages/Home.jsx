import React from "react";
import { useNavigate } from "react-router";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import Products from "../components/Products";
import Support from "../components/Support";
import News from "../components/News";
import NewArrival from "../components/NewArrival";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero className="mb-12" />
      <Offer className="mb-12 md:mb-16 xl:mb-20" />
      <Products className="mb-12 md:mb-16 xl:mb-20" />
      <NewArrival className="mb-12 md:mb-16 xl:mb-20" />
      <News className="mb-12 md:mb-16 xl:mb-20" />
      <Support />
    </>
  );
};

export default Home;
