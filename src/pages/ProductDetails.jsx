import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { Banner, Faq, Review, Support } from "../layout";
import { Button, Container, Product, Radio } from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { productData } from "../data";
import { assets } from "../assets/assets";
import { MdErrorOutline } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaRegHeart, FaRegMessage, FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productData.find((p) => p.id.toString() === id);
  const [selectedColor, setSelectedColor] = useState(
    product?.color?.[0]?.name ?? "default"
  );
  const currentImage =
    product.imageList.find((imgObj) =>
      selectedColor === "default"
        ? imgObj.id === "default"
        : imgObj.id.toLowerCase() === selectedColor.toLowerCase()
    )?.img || product.imageList[0].img;

  const handleCheckout = () => {
    addToCart({
      ...product,
      quantity: quantity || 1,
      color: selectedColor,
    });
    navigate("/checkout");
  };

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!product)
    return <div className="text-center py-20">Product not found.</div>;

  const discount = product.discount ?? 0;
  const newPrice = product.oldPrice - (product.oldPrice * discount) / 100;

  return (
    <>
      <Banner
        title="Product Details"
        breadcrumb={[{ label: "Home", path: "/" }, { label: product.title }]}
        className="mb-12"
      />

      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex flex-col sm:flex-row gap-12">
            <div className="w-1/2">
              <div className="max-w-3/4 mx-auto">
                <img src={currentImage} alt={product.title} />
              </div>
            </div>
            <div className="w-1/2 space-y-4">
              <p className="text-lg uppercase font-medium">
                {product.category}
              </p>
              <h3 className="font-heading font-semibold">{product.title}</h3>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <FaStar className="text-amber-300" />{" "}
                  <span className="font-medium">{product.rating} Ratings</span>
                </span>
                <span className="text-muted">({product.reviews} reviews)</span>
                <span className="text-green-500">
                  {product.reviews * 2}+ Sold
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-semibold text-2xl">
                  ${newPrice.toFixed(2)}
                </span>
                <span className="line-through text-muted text-lg">
                  ${product.oldPrice}
                </span>
                <span className="bg-green-100 text-green-700 px-2 border border-green-200 py-1 text-xs rounded-full">
                  Save {product.discount}%
                </span>
              </div>
              <p className="text-muted">{product.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                Color:
                <div className="flex items-center gap-2">
                  {product?.color?.map(({ name, colorClass }) => (
                    <div
                      key={name}
                      className={`relative border rounded-sm px-2 py-1 ${
                        selectedColor.toLowerCase() === name.toLowerCase()
                          ? "border-black border-2"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        id={name}
                        name="color"
                        value={name}
                        checked={
                          selectedColor.toLowerCase() === name.toLowerCase()
                        }
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="opacity-0 absolute"
                      />
                      <label
                        htmlFor={name}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <span
                          className={`size-3 inline-block rounded-full ${colorClass}`}
                        ></span>
                        <span className="text-sm">{name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {product.stock === 0 ? (
                <p className="text-xs font-medium text-error">Out of stock</p>
              ) : product.stock < 10 ? (
                <p className="text-xs font-medium text-amber-500">
                  Only {product.stock} left in stock
                </p>
              ) : (
                <p className="text-xs font-medium text-green-500">In Stock</p>
              )}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 px-3 py-2 border-2 border-border rounded-full font-medium text-accent">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <LuMinus />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <LuPlus />
                  </button>
                </div>

                <Button
                  variant="solid"
                  color={product.stock === 0 ? "disabled" : "dark"}
                  onClick={handleCheckout}
                  disabled={product.stock === 0}
                  className={
                    product.stock === 0 ? "w-full cursor-not-allowed" : "w-full"
                  }
                >
                  {product.stock === 0 ? "Out of Stock" : "Proceed to Checkout"}
                </Button>
                <span
                  className="bg-gray-900 text-white p-3 sm:text-xl rounded-full inline-block cursor-pointer"
                  onClick={() =>
                    addToWishlist({
                      ...product,
                      color: selectedColor, // string only (e.g., "Blue")
                    })
                  }
                >
                  <FaRegHeart />
                </span>
              </div>
              <p className="text-muted text-sm flex items-center justify-center gap-2">
                Shipping is free for the week of February 14th
                <MdErrorOutline />
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-4">
              <h3 className="text-accent font-semibold font-heading">
                You may also like
              </h3>
              <p className="text-muted text-sm lg:text-base">
                Shop for the best selection of smart home products.
              </p>
            </div>
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1 text-sm lg:text-base text-primary font-heading font-semibold hover:underline"
              >
                Explore More <IoIosArrowForward />
              </Link>
            </div>
          </div>
          <div className="productSlider">
            <Slider {...settings}>
              {productData.map((item) => (
                <Product key={item.id} data={item} />
              ))}
            </Slider>
          </div>
        </Container>
      </section>
      <Review className="mb-12 md:mb-16 xl:mb-20" />
      <Faq className="mb-12 md:mb-16 xl:mb-20" />
      <Support />
    </>
  );
};

export default ProductDetails;
