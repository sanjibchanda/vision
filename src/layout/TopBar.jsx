import React from "react";
import Container from "../components/Container";

const TopBar = () => {
  return (
    <>
      <section className="bg-black text-white py-3">
        <Container className="text-center">
          <p className="text-sm md:text-base">
            Summer Sale: Up to
            <span className="bg-primary rounded px-1 mx-1">30%</span> OFF on
            Smartwatches!
          </p>
        </Container>
      </section>
    </>
  );
};

export default TopBar;
