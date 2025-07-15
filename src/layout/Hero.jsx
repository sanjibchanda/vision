import React from "react";
import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { Container, Button } from "../components";

const Hero = ({ className = "" }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/products");
  };
  return (
    <>
      <section className={`hero-bg text-white py-12 xl:py-0 ${className}`}>
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
                <Button variant="solid" color="light" onClick={handleCheckout}>
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  color="light"
                  onClick={handleCheckout}
                >
                  Explore Categories
                </Button>
              </div>
            </div>
            <div>
              <img
                src={assets.heroImg.default}
                srcSet={`${assets.heroImg.default} 1x, ${assets.heroImg.highRes} 2x`}
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
