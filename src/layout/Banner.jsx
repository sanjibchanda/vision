import React from "react";
import { Container } from "../components";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

const Banner = ({ className = "" }) => {
  return (
    <>
      <section className={`shop-bg py-24 text-white ${className}`}>
        <Container className="space-y-6">
          <h2 className="font-heading font-semibold uppercase">All Products</h2>
          <ul className="flex items-center gap-3 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaChevronRight className="text-sm text-muted" />
            </li>
            <li className="text-primary">Products</li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Banner;
