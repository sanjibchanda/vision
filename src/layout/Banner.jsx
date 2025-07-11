import React from "react";
import { Container } from "../components";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

const Banner = ({ className = "", title = "Title", breadcrumb = [] }) => {
  return (
    <section className={`shop-bg py-24 text-white ${className}`}>
      <Container className="space-y-6">
        <h2 className="font-heading font-semibold uppercase">{title}</h2>
        <ul className="flex items-center gap-3 text-lg flex-wrap">
          {breadcrumb.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <FaChevronRight className="text-sm text-muted" />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Banner;

// Usage Examples

// Product List Page

/* <Banner
  title="All Products"
  breadcrumb={[{ label: "Home", path: "/" }, { label: "Products" }]}
/>; */

// Category/Subcategory Example

/* <Banner
  title="Men's Sneakers"
  breadcrumb={[
    { label: "Home", path: "/" },
    { label: "Men", path: "/men" },
    { label: "Sneakers" },
  ]}
/>; */
