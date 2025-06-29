import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <div>ProductDetails {params.id}</div>
    </>
  );
};

export default ProductDetails;
