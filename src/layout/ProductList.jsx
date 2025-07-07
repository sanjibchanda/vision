import React from "react";
import { Container, Filter, Pagination, Product, SortBy } from "../components";
import { productData } from "../data";

const ProductList = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex gap-6">
            <div className="hidden md:block md:w-1/4">
              <Filter />
            </div>
            <div className="w-full md:w-3/4 space-y-4">
              <SortBy />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {productData.map((item) => (
                  <Product key={item.id} data={item} />
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
