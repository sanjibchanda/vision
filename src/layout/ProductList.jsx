import React, { useState, useMemo } from "react";
import { Container, Filter, Pagination, Product, SortBy } from "../components";
import { productData } from "../data";

const ProductList = ({ className = "" }) => {
  const [filters, setFilters] = useState({
    search: "",
    categories: [],
    brands: [],
    sortBy: "Newest",
    minPrice: 50,
    maxPrice: 250,
  });

  const handleClearAll = () => {
    setFilters({
      search: "",
      categories: [],
      brands: [],
      sortBy: "Newest",
    });
  };

  const filteredProducts = useMemo(() => {
    let filtered = productData;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    // Price Range
    filtered = filtered.filter(
      (product) =>
        product.newPrice >= filters.minPrice &&
        product.newPrice <= filters.maxPrice
    );

    // Sort
    if (filters.sortBy === "BestSeller") {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (filters.sortBy === "Trending") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [filters]);

  // Count items per category
  const getCategoryCounts = () => {
    const counts = {};
    productData.forEach((product) => {
      const category = product.category || "Other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  };

  // Count items per brand
  const getBrandCounts = () => {
    const counts = {};
    productData.forEach((product) => {
      const brand = product.brand || "Other";
      counts[brand] = (counts[brand] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();
  const brandCounts = getBrandCounts();

  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex gap-6">
            <div className="hidden md:block md:w-1/4">
              <Filter
                filters={filters}
                setFilters={setFilters}
                handleClearAll={handleClearAll}
                categoryCounts={categoryCounts}
                brandCounts={brandCounts}
              />
            </div>
            <div className="w-full md:w-3/4 space-y-4">
              <SortBy filters={filters} setFilters={setFilters} />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map((item) => (
                  <Product key={item.id} data={item} />
                ))}
                {filteredProducts.length === 0 && (
                  <p className="text-center col-span-full text-muted">
                    No products match your filter.
                  </p>
                )}
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
