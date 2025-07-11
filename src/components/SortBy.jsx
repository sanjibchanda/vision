import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const SortBy = ({
  filters,
  setFilters,
  currentPage,
  itemsPerPage,
  totalItems,
  setShowFilter,
}) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-between md:items-center font-heading text-sm md:text-base font-semibold text-accent py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="flex items-center gap-2 lg:hidden"
          >
            <CiFilter />
          </button>
          <div>
            Showing{" "}
            {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
            results
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="country" className="block">
              Sort By:
            </label>
            <div className="flex items-center">
              <select
                id="sort"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({ ...filters, sortBy: e.target.value })
                }
                className="w-full appearance-none focus-visible:outline-0 bg-white text-sm text-gray-900"
              >
                <option value="Newest">Newest</option>
                <option value="BestSeller">BestSeller</option>
                <option value="Trending">Trending</option>
              </select>
              <FaChevronDown className="text-xs text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortBy;
