import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router";
import { Banner, Promo2, Support } from "../layout";
import {
  Button,
  CartItem,
  Container,
  CreditCardPromo,
  Product,
  Summary,
} from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";
import { productData } from "../data";

const Cart = () => {
  const { cartItems } = useCart(); // ACCESS CONTEXT HERE

  const navigate = useNavigate();
  const handleClick = () => {
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

  return (
    <>
      <Banner
        title="Cart"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Cart" }]}
        className="mb-12"
      />
      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 space-y-4">
              <p className="font-heading font-semibold text-lg uppercase">
                Shopping Cart (2 items)
              </p>
              <div>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                )}
              </div>
            </div>
            <div className="w-full md:w-1/3 space-y-4">
              <div className="bg-surface2 p-6 space-y-6 text-accent">
                <p className="font-heading font-semibold text-lg uppercase">
                  Order Summary
                </p>
                <Summary />
                <Button
                  variant="solid"
                  color="dark"
                  onClick={handleClick}
                  className="w-full"
                >
                  Proceed to Checkout
                </Button>
                <CreditCardPromo />
                <p className="text-sm text-muted text-center">
                  Safe and Secure Payments. Easy Returns. 100% Authentic
                  Products.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Promo2 className="mb-12 md:mb-16 xl:mb-20" />
      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-4">
              <h3 className="text-accent font-semibold font-heading">
                Releated Products
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
      <Support />
    </>
  );
};

export default Cart;
