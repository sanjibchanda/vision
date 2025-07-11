import React from "react";
import { Support } from "../layout";
import { Container, OrderItem, Summary } from "../components";
import { assets } from "../assets/assets";

const OrderDetails = ({ className = "" }) => {
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
              <OrderItem />
              <OrderItem />
              <OrderItem />
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
                  <li className="font-semibold">John Doe</li>
                  <li>1234 Elm Street Apt 5B</li>
                  <li>Los Angeles, CA – 90001</li>
                  <li className="font-semibold">United States</li>
                  <li>
                    <span className="font-semibold">Phone:</span> +1 (555)
                    123-4567
                  </li>
                </ul>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <p className="text-lg font-heading font-semibold">
                  Payment Method:
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <img src={assets.visaCard} alt="shipping" />
                  <span>Visa Card ending in **** 1026</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <p className="text-lg font-heading font-semibold">
                  Order Summary:
                </p>
                <Summary />
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
