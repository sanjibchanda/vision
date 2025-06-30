import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Error page</h3>

      <button
        onClick={() => navigate("/")}
        type="button"
        className="rounded px-5 py-2 text-sm/6 font-medium bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Go to Home page
      </button>
    </>
  );
};

export default Error;
