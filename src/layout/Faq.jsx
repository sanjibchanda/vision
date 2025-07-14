import React from "react";
import { Accordions, Container } from "../components";

const Faq = ({ className = "" }) => {
  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-accent font-semibold font-heading">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="md:w-1/2">
            <Accordions />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
