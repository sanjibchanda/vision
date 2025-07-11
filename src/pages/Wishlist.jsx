import React from "react";
import { Container, OrderItem } from "../components";
import { Banner } from "../layout";

const Wishlist = () => {
  return (
    <>
      <Banner
        title="Wishlist"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Wishlist" }]}
        className="mb-12"
      />
      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="bg-surface2 px-4 lg:px-10 py-10 space-y-6 text-accent">
            <p className="font-heading font-semibold text-lg uppercase">
              Wishlist
            </p>
            <div>
              <OrderItem showDelete />
              <OrderItem showDelete />
              <OrderItem showDelete />
            </div>
          </div>
          <div>
            <p>There are no products in your wishlist!</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Wishlist;
