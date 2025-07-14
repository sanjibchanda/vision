import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Support } from "../layout";
import { Container, OrderedSummary, OrderItem } from "../components";
import { assets } from "../assets/assets";

const OrderDetails = () => {
  // const { cartItems } = useCart();
  const [orderData, setOrderData] = useState({
    billing: {},
    items: [],
    subtotal: 0,
    discount: 0,
    total: 0,
    payment: "",
  });
  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  // const [orderItems, setOrderItems] = useState(cartItems);
  // useEffect(() => {
  //   if (cartItems.length === 0) {
  //     const saved = localStorage.getItem("latestOrder");
  //     if (saved) setOrderItems(JSON.parse(saved));
  //   }
  //   return () => localStorage.removeItem("latestOrder");
  // }, [cartItems]);

  // const savedOrder = localStorage.getItem("latestOrder");
  // const orderItems =
  //   cartItems.length > 0 ? cartItems : JSON.parse(savedOrder || "[]");
  return (
    <>
      <section className="my-12 md:my-16 xl:my-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          {/* Thank You Block */}
          <div className="bg-surface2 px-4 lg:py-10 py-10">
            <div className="max-w-lg mx-auto space-y-6 text-accent text-center">
              <img
                src={assets.shippingBox}
                srcSet={`${assets.shippingBox} 1x, ${assets.shippingBox_2x} 2x`}
                alt="shippingBox"
                className="mx-auto"
              />
              <h4 className="font-heading font-semibold uppercase">
                Thank You for Your Order!
              </h4>
              <p className="text-muted">
                We’ve received your order and are getting it ready to ship.
                You’ll receive a confirmation email with tracking details
                shortly.
              </p>
              <div className="flex items-center justify-center gap-2">
                <img src={assets.shipping} alt="shipping" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-surface2 px-4 lg:px-10 py-10 space-y-6 text-accent">
            <p className="font-heading font-semibold text-lg uppercase">
              Order Summary
            </p>
            <div>
              {orderData.items?.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Order Details Grid */}
          <div className="bg-surface2 px-4 lg:px-10 py-10 space-y-6 text-accent">
            <p className="font-heading font-semibold text-lg uppercase">
              Order ID: NAE40650799
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Shipping Address */}
              <div className="space-y-4">
                <p className="text-lg font-heading font-semibold">
                  Shipping Address:
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="font-semibold">
                    {orderData.billing.firstName} {orderData.billing.lastName}
                  </li>
                  <li>{orderData.billing.address}</li>
                  <li>
                    {orderData.billing.city}, {orderData.billing.state} –{" "}
                    {orderData.billing.zipcode}
                  </li>
                  <li className="font-semibold">India</li>
                  <li>
                    <span className="font-semibold">Phone:</span>{" "}
                    {orderData.billing.phone}
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span>{" "}
                    {orderData.billing.email}
                  </li>
                </ul>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <p className="text-lg font-heading font-semibold">
                  Payment Method:
                </p>
                {orderData.payment === "Card" ? (
                  <div className="flex items-center gap-2 text-sm">
                    <img src={assets.visaCard} alt="Visa" />
                    <span>Credit Card (**** **** **** 1026)</span>
                  </div>
                ) : (
                  <div className="text-sm">Cash on Delivery</div>
                )}
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <p className="text-lg font-heading font-semibold">
                  Order Summary:
                </p>
                <OrderedSummary orderData={orderData} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Support />
    </>
  );
};

export default OrderDetails;
