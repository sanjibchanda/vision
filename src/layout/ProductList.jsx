import React, { useState, useMemo, useEffect } from "react";
import { Container, Filter, Pagination, Product, SortBy } from "../components";
import { productData } from "../data";
import { LuSearchX } from "react-icons/lu";

const ProductList = ({ className = "" }) => {
  const [filters, setFilters] = useState({
    search: "",
    categories: [],
    brands: [],
    sortBy: "Newest",
    maxPrice: 300,
  });

  const handleClearAll = () => {
    setFilters({
      search: "",
      categories: [],
      brands: [],
      sortBy: "Newest",
      maxPrice: 300,
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

    // Price Range filter using newPrice
    filtered = filtered.filter((product) => {
      const price =
        product.oldPrice - (product.oldPrice * product.discount) / 100;
      return price <= filters.maxPrice;
    });

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Slice for current page
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

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
              <SortBy
                filters={filters}
                setFilters={setFilters}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredProducts.length}
              />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {paginatedProducts.length === 0 ? (
                  <div className="col-span-full text-center py-10 text-muted space-y-2">
                    <LuSearchX className="mx-auto text-4xl text-gray-300" />
                    <p className="text-lg font-semibold">No results found</p>
                    <p className="text-sm">
                      Try adjusting your filters or search keyword.
                    </p>
                  </div>
                ) : (
                  paginatedProducts.map((item) => (
                    <Product key={item.id} data={item} />
                  ))
                )}

                {/* {paginatedProducts.map((item) => (
                  <Product key={item.id} data={item} />
                ))}
                {paginatedProducts.length === 0 && (
                  <p className="text-center col-span-full text-muted">
                    No products match your filter.
                  </p>
                )} */}
              </div>
              <Pagination
                currentPage={currentPage}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
