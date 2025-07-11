import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const CreditCardPromo = ({ className = "" }) => {
  return (
    <>
      <div className="bg-primary text-white p-6 space-y-4 flex flex-col justify-center items-center text-center">
        <img src={assets.visa} alt="card" />
        <p>Get $100 off instantly upon approval of visa card</p>
        <Link to="/" className="px-6 py-3 border rounded-full">
          Learn more
        </Link>
      </div>
    </>
  );
};

export default CreditCardPromo;
