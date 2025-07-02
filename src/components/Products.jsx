import React, { useState } from "react";
import Container from "./Container";
import Product from "./Product";
import productData from "../assets/productData";

const filterButtons = [
  { label: "All", value: "all" },
  { label: "Trending", value: "trending" },
  { label: "Newly Upcoming", value: "upcoming" },
];

const Products = ({ className = "" }) => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? productData
      : productData.filter((item) => item.category === filter);

  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-accent font-semibold font-heading">
              Featured Products
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Browse the best of our favorite sale styles and brands.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`py-2 px-4 rounded-full text-sm transition ${
                  filter === btn.value
                    ? "bg-primary text-white"
                    : "bg-surface hover:bg-primary hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
