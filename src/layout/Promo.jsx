import React, { useEffect, useState } from "react";
import { Button, Container } from "../components";
import { assets } from "../assets/assets";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const Promo = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({});
  // Set your launch time here
  const launchDate = new Date("2025-08-15T12:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="promo-bg text-white px-6 md:px-12 py-12 rounded-2xl space-y-6 text-center md:text-start">
            <span className="bg-surface px-6 py-1 rounded-full inline-flex items-center gap-2 font-heading font-bold text-accent uppercase text-sm lg:text-base">
              airwave max 5
            </span>
            <h1 className="font-bold font-heading uppercase">
              switch up,
              <br /> stand out
            </h1>
            {Object.keys(timeLeft).length > 0 && (
              <p className="font-medium text-xl lg:text-2xl">
                Launching on 15th August, 12pm
              </p>
            )}
            {timeLeft.days !== undefined ? (
              <div className="flex justify-center md:justify-start gap-2 font-semibold text-white">
                <div className="flex flex-col items-center gap-1 bg-white/50 text-accent px-3 py-2 rounded-sm">
                  <span className="text-4xl">{timeLeft.days}</span>
                  <span className="text-sm uppercase">Days</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/50 text-accent px-3 py-2 rounded-sm">
                  <span className="text-4xl">{timeLeft.hours}</span>
                  <span className="text-sm uppercase">Hours</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/50 text-accent px-3 py-2 rounded-sm">
                  <span className="text-4xl">{timeLeft.minutes}</span>
                  <span className="text-sm uppercase">Mins</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/50 text-accent px-3 py-2 rounded-sm">
                  <span className="text-4xl">{timeLeft.seconds}</span>
                  <span className="text-sm uppercase">Secs</span>
                </div>
              </div>
            ) : (
              <p className="font-medium text-xl lg:text-2xl text-red-200 animate-pulse">
                Launched Now!
              </p>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xl font-medium transition bg-black text-white hover:bg-black/70 hover:text-white "
            >
              Prebook Now <IoIosArrowForward />
            </Link>
            <img
              src={assets.promoWatch}
              alt="promoWatch"
              className="w-36 mx-auto md:hidden mt-6"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Promo;
