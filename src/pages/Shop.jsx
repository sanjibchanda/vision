import React from "react";
import { Container, Product } from "../components";
import { productData } from "../data";

const Shop = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {productData.map((item) => (
              <Product key={item.id} data={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
