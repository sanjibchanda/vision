import React from "react";
import Container from "./Container";

const Sample = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10"></Container>
      </section>
    </>
  );
};

export default Sample;
