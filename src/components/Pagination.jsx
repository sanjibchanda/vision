import React from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 font-medium mt-4">
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center size-10 rounded-sm ${
            currentPage === 1
              ? "bg-gray-100 text-muted cursor-not-allowed"
              : "bg-white hover:bg-primary hover:text-white"
          }`}
        >
          <FaChevronLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`flex items-center justify-center size-10 rounded-sm ${
              currentPage === page
                ? "bg-primary text-white"
                : "bg-white hover:bg-primary hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center size-10 rounded-sm ${
            currentPage === totalPages
              ? "bg-gray-100 text-muted cursor-not-allowed"
              : "bg-white hover:bg-primary hover:text-white"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
      {/* <div className="flex items-center justify-center gap-2 font-medium">
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
      </div> */}
    </>
  );
};

export default Pagination;
