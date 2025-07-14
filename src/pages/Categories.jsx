import React from "react";
import { useLocation } from "react-router";
import { Banner, Support } from "../layout";
import { Container, Product } from "../components";
import { productData } from "../data";

const Categories = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const selectedCategory = queryParams.get("category");

  const filteredProducts = selectedCategory
    ? productData.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : productData;

  // Capitalize first letter of category for title
  const categoryTitle = selectedCategory
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    : "All Categories";

  return (
    <>
      <Banner
        title="Categories"
        breadcrumb={[{ label: "Home", path: "/" }, { label: categoryTitle }]}
        className="mb-12"
      />
      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <Product key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">No products found.</p>
          )}
        </Container>
      </section>
      <Support />
    </>
  );
};

export default Categories;
