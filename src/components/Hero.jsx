import React from "react";
import Button from "./Button";
import heroImg from "../assets/images/hero-img.png";
import heroImg2x from "../assets/images/hero-img@2x.png";
import Container from "./Container";

const Hero = () => {
  return (
    <>
      <section className="hero-bg text-white py-12 xl:py-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-6">
              <p className="font-heading font-semibold uppercase">
                wear Technology
              </p>
              <h1 className="font-heading font-bold uppercase">
                Smarter Living Starts Now
              </h1>
              <p>
                Power your lifestyle with cutting-edge sound and smart features.
                Limited-time summer deals on our best-selling electronics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="solid" color="light">
                  Shop Now
                </Button>
                <Button variant="outline" color="light">
                  Explore Categories
                </Button>
              </div>
            </div>
            <div>
              <img
                src={heroImg}
                srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}
                alt="heroImg"
                className="max-w-96 lg:max-w-full w-full mx-auto"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
