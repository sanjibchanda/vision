import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container max-w-[1340px] mx-auto px-3">
        <button onClick={() => navigate(-1)}>back</button>
      </div>
    </>
  );
};

export default Home;
