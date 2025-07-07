import React from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 font-medium">
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          <FaChevronLeft />
        </Link>
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          1
        </Link>
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          2
        </Link>
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          3
        </Link>
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          ...
        </Link>
        <Link
          to=""
          className="flex items-center justify-center size-10 rounded-sm bg-white hover:bg-primary hover:text-white"
        >
          <FaChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Pagination;
