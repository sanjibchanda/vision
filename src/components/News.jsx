import React from "react";
import Container from "./Container";
import Post from "./Post";
import newsData from "../assets/newsData";

const News = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="space-y-4 ">
            <h3 className="text-accent font-semibold font-heading">
              Latest News
            </h3>
            <p className="text-muted text-sm lg:text-base">
              If you're thinking about turning your home into a smart home,
              you're not alone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsData.map((item) => (
              <Post key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;
