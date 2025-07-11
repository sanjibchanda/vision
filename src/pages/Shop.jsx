import React from "react";
import { Banner, ProductList, Support } from "../layout";

const Shop = ({ className = "" }) => {
  return (
    <>
      <Banner
        title="All Products"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Products" }]}
        className="mb-12"
      />
      <ProductList className="mb-12 md:mb-16 xl:mb-20" />
      <Support />
    </>
  );
};

export default Shop;
