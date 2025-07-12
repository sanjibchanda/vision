import React from "react";
import { Container, OrderItem } from "../components";
import { Banner } from "../layout";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlistItems, removeFromCart } = useCart();

  return (
    <>
      <Banner
        title="Wishlist"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Wishlist" }]}
        className="mb-12"
      />
      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="bg-surface2 px-4 lg:px-10 py-10 space-y-6 text-accent">
            <p className="font-heading font-semibold text-lg uppercase">
              Wishlist
            </p>
            <div>
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item) => (
                  <OrderItem key={item.id} item={item} showDelete />
                ))
              ) : (
                <p className="text-muted">
                  There are no products in your wishlist!
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Wishlist;
