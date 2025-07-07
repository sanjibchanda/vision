import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const SortBy = () => {
  return (
    <>
      <div className="flex gap-3 justify-between items-center font-heading text-sm md:text-base font-semibold text-accent py-4 border-b border-border">
        <div className="md:hidden flex items-center gap-2">
          <CiFilter /> Filter Option
        </div>
        <div className="hidden md:block">Showing 1 to 10 of 97 results</div>
        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="country" className="block">
              Sort By:
            </label>
            <div className="flex items-center">
              <select
                id="country"
                name="country"
                className="w-full appearance-none focus-visible:outline-0 bg-white text-sm text-gray-900"
              >
                <option>Newest</option>
                <option>Best seller</option>
                <option>Trending</option>
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
