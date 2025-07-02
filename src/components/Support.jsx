import React from "react";
import Container from "./Container";
import supportData from "../assets/supportData";

const Support = ({ className = "" }) => {
  return (
    <>
      <section className={`bg-surface py-12 ${className}`}>
        <Container>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {supportData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex gap-3">
                  <img src={item.icon} alt={item.title} />
                  <p className="font-heading font-semibold text-base lg:text-lg text-accent">
                    {item.title}
                  </p>
                </div>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
