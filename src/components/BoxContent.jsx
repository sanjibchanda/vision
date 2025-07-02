import React from "react";
import { Link } from "react-router";
import Container from "./Container";
import { FaCircle } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import boxContentData from "../assets/boxContentData";

const BoxContent = ({ className = "", data = "" }) => {
  const content = boxContentData[data];
  if (!content) return null;

  const {
    tag,
    heading,
    subheading,
    description,
    image,
    image2x,
    linkTo,
    linkText,
    reverse,
  } = content;
  return (
    <>
      <section className={className}>
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div
            className={`flex flex-col sm:flex-row ${
              reverse ? "sm:flex-row-reverse" : ""
            } items-center gap-6 sm:gap-12`}
          >
            <div className="space-y-6 sm:w-1/2">
              {tag && (
                <span className="bg-surface px-6 py-1 rounded-full inline-flex items-center gap-2 font-heading font-bold text-accent uppercase text-sm lg:text-base">
                  <FaCircle className="text-teritory text-xs lg:text-sm" />
                  {tag}
                </span>
              )}
              <h3 className="text-accent font-semibold font-heading text-2xl lg:text-3xl">
                {heading}
              </h3>
              <p className="text-accent font-medium text-sm lg:text-base">
                {subheading}
              </p>
              <p className="text-muted text-sm lg:text-base">{description}</p>
              {linkTo && (
                <Link
                  to={linkTo}
                  className="inline-flex items-center gap-1 text-sm lg:text-base text-primary font-heading font-semibold hover:underline"
                >
                  {linkText} <IoIosArrowForward />
                </Link>
              )}
            </div>
            <div className="sm:w-1/2">
              <img
                src={image}
                srcSet={`${image} 1x, ${image2x} 2x`}
                alt={heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BoxContent;
