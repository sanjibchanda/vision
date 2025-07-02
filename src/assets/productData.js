// productData.js (or define this inside Products.jsx)

import iphone16 from "../assets/images/product/iphone-16.png";
import GalaxyBuds3Pro from "../assets/images/product/Galaxy-Buds3-Pro.png";
import Beats from "../assets/images/product/Beats.png";
import appleWatch from "../assets/images/product/apple-watch.png";

const productData = [
  {
    id: 1,
    title: "Apple iPhone 16 Pro",
    image: iphone16,
    rating: 4.5,
    reviews: 97,
    oldPrice: 999,
    newPrice: 899,
    discount: 10,
    stock: 20,
    label: "Bestseller",
    category: "trending",
  },
  {
    id: 2,
    title: "iPhone 16 Pro Max",
    image: GalaxyBuds3Pro,
    rating: 5,
    reviews: 125,
    oldPrice: 1099,
    newPrice: 965,
    discount: 12,
    stock: 5,
    label: "New",
    category: "upcoming",
  },
  {
    id: 3,
    title: "Beats Solo 4 Wireless ",
    image: Beats,
    rating: 5,
    reviews: 125,
    oldPrice: 1099,
    newPrice: 965,
    discount: 12,
    stock: 0,
    label: "",
    category: "",
  },
  {
    id: 4,
    title: "Apple Watch Series 10",
    image: appleWatch,
    rating: 5,
    reviews: 125,
    oldPrice: 1099,
    newPrice: 965,
    discount: 12,
    stock: 20,
    label: "Hot",
    category: "upcoming",
  },
  // Add more...
];

export default productData;
