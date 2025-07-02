import React from "react";
import { useNavigate } from "react-router";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import Products from "../components/Products";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Offer />
      <Products />
    </>
  );
};

export default Home;
