import React from "react";
import { Badge, Input, PromoCard } from "../components";
import { Link } from "react-router";
import { LuSearch } from "react-icons/lu";

const Filter = ({
  filters,
  setFilters,
  handleClearAll,
  categoryCounts,
  brandCounts,
}) => {
  const handleRemoveFilter = (type, value) => {
    if (type === "search") {
      setFilters({ ...filters, search: "" });
    } else if (type === "categories" || type === "brands") {
      setFilters({
        ...filters,
        [type]: filters[type].filter((item) => item !== value),
      });
    }
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  // const handleCheckboxChange = (type, value) => {
  //   const isChecked = filters[type].includes(value);
  //   const updated = isChecked
  //     ? filters[type].filter((item) => item !== value)
  //     : [...filters[type], value];
  //   setFilters({ ...filters, [type]: updated });
  // };

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center font-heading text-base font-semibold text-accent py-4 border-b border-border">
          <div>Filter Option:</div>
          <div className="text-sm text-muted">
            <button
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleClearAll();
              }}
            >
              Clear all
            </button>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <Input
            name="search"
            type="text"
            value={filters.search}
            placeholder="Search Product"
            onChange={handleSearchChange}
            icon={LuSearch}
            iconPosition="right"
          />
          <div className="flex flex-wrap gap-2">
            {filters.search && (
              <Badge
                label={filters.search}
                onRemove={() => handleRemoveFilter("search")}
              />
            )}
            {filters.categories.map((cat) => (
              <Badge
                key={cat}
                label={cat}
                onRemove={() => handleRemoveFilter("categories", cat)}
              />
            ))}
            {filters.brands.map((brand) => (
              <Badge
                key={brand}
                label={brand}
                onRemove={() => handleRemoveFilter("brands", brand)}
              />
            ))}
            {(filters.minPrice !== 50 || filters.maxPrice !== 250) && (
              <Badge
                key={`price-${filters.minPrice}-${filters.maxPrice}`}
                label={`$${filters.minPrice} - $${filters.maxPrice}`}
                onRemove={() =>
                  setFilters((prev) => ({
                    ...prev,
                    minPrice: 50,
                    maxPrice: 250,
                  }))
                }
              />
            )}
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Collections
          </div>
          <div className="space-y-3 text-sm">
            <Link to="/" className="block">
              Summer Sale <span>(125)</span>
            </Link>
            <Link to="/" className="block">
              Appreal <span>(125)</span>
            </Link>
            <Link to="/" className="block">
              Women Running <span>(125)</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Category
          </div>
          <div className="space-y-3">
            {Object.entries(categoryCounts).map(([cat, count]) => (
              <label
                key={cat}
                className="w-full inline-flex items-center space-x-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...filters.categories, cat]
                      : filters.categories.filter((item) => item !== cat);
                    setFilters({ ...filters, categories: updated });
                  }}
                  className="size-4 bg-white border-2 border-gray-300 rounded-md"
                />
                <span className="text-sm text-accent">
                  {cat} <span>({count})</span>
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Brand
          </div>
          <div className="space-y-3">
            {Object.entries(brandCounts).map(([brand, count]) => (
              <label
                key={brand}
                className="w-full inline-flex items-center space-x-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...filters.brands, brand]
                      : filters.brands.filter((item) => item !== brand);
                    setFilters({ ...filters, brands: updated });
                  }}
                  className="size-4 bg-white border-2 border-gray-300 rounded-md"
                />
                <span className="text-sm text-accent">
                  {brand} <span>({count})</span>
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Price
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="range"
                min={50}
                max={250}
                step={10}
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: Number(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-s-xl appearance-none cursor-pointer"
              />
              <input
                type="range"
                min={50}
                max={250}
                step={10}
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: Number(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-e-xl appearance-none cursor-pointer"
              />
            </div>
            <p className="text-sm text-accent font-medium">
              ${filters.minPrice.toFixed(2)} - ${filters.maxPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <PromoCard />
      </div>
    </>
  );
};

export default Filter;
