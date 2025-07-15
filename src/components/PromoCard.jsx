import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { assets } from "../assets/assets";

const PromoCard = () => {
  return (
    <>
      <div className="bg-surface2 py-8 px-4 space-y-6">
        <p className="text-primary font-heading uppercase font-semibold">
          promo
        </p>
        <h3 className="text-accent font-heading uppercase font-bold">
          Black friday Discount!
        </h3>
        <p className="text-muted">Get 25% Off on Headphones</p>
        <Link
          to="/categories"
          className="inline-flex items-center gap-1 text-sm lg:text-base text-accent font-heading font-semibold hover:text-primary"
        >
          Shop Now <IoIosArrowForward />
        </Link>

        <img
          src={assets.promoWatch2}
          alt="promoWatch2"
          className="-right-4 relative ml-auto -mt-10 w-60"
        />
      </div>
    </>
  );
};

export default PromoCard;
