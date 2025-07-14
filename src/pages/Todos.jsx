import React from "react";
import { useLoaderData } from "react-router";

const Todos = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="container max-w-[1340px] mx-auto px-3">
        <div>Products</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
};

export default Todos;
