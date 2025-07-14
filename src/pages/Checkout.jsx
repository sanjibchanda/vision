import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Banner, Support } from "../layout";
import {
  Button,
  Checkbox,
  Container,
  Input,
  OrderItem,
  Radio,
  Select,
  Summary,
} from "../components";
import { useNavigate } from "react-router";
import { RiLock2Line } from "react-icons/ri";
import { FaRegMoneyBill1, FaCreditCard } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";

const Checkout = ({ className = "" }) => {
  const {
    cartItems,
    clearCart,
    subtotal,
    discount,
    total,
    applyPromoCode,
    promoCode,
  } = useCart(); // ACCESS CONTEXT HERE

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem(
      "latestOrder",
      JSON.stringify({
        items: cartItems,
        subtotal,
        discount,
        total,
      })
    ); // store the cartItems in localStorage
    clearCart(); // 🧹 Clear cart
    navigate("/order-details"); // 🚀 Navigate to order page
  };

  const [selectOption, setSelectOption] = useState();
  const [shipping, setShipping] = useState("FreeShipping");
  const [payment, setPayment] = useState("Card");

  const [inputCode, setInputCode] = useState(""); // define promo input state
  const [error, setError] = useState(""); // optional error message

  const handleApplyCode = () => {
    const result = applyPromoCode(inputCode);
    if (!result) {
      setError("Invalid Promo Code");
    } else {
      setError("");
    }
  };

  return (
    <>
      <Banner
        title="Checkout"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/Cart" },
          { label: "Checkout" },
        ]}
        className="mb-12"
      />

      <section className="mb-12 md:mb-16 xl:mb-20">
        <Container className="space-y-6 md:space-y-8 xl:space-y-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 space-y-4">
              <form className="space-y-6">
                <p className="font-heading font-semibold text-lg uppercase">
                  Billing Address
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                    />
                    <Input
                      label="Last Name"
                      name="LastName"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <Input
                      label="Phone Number"
                      name="Phone"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Select
                      label="City"
                      name="city"
                      value={selectOption}
                      onChange={(e) => setSelectOption(e.target.value)}
                      options={[
                        { value: "kollata", label: "kollata" },
                        { value: "Durgapur", label: "Durgapur" },
                      ]}
                    />
                    <Select
                      label="State"
                      name="state"
                      value={selectOption}
                      onChange={(e) => setSelectOption(e.target.value)}
                      options={[
                        { value: "WB", label: "WB" },
                        { value: "Delhi", label: "Delhi" },
                      ]}
                    />
                    <Input
                      label="Zip code"
                      name="zipcode"
                      type="text"
                      placeholder="Zip code"
                    />
                  </div>
                  <div>
                    <Input
                      label="Address"
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <Checkbox
                      label="I have read and agree to the Term and Conditions."
                      name="terms"
                    />
                  </div>
                </div>
                <p className="font-heading font-semibold text-lg uppercase">
                  Shipping Method
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Free Shipping Option */}
                  <div
                    className={`sm:w-1/2 border border-border p-3 rounded-sm flex justify-between ${
                      shipping === "FreeShipping" ? "bg-surface2" : "bg-white"
                    }`}
                  >
                    <div>
                      <Radio
                        label="Free Shipping"
                        name="shipping"
                        value="FreeShipping"
                        checked={shipping === "FreeShipping"}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                      <span className="text-sm ms-6 text-muted">7-20 Days</span>
                    </div>
                    <div className="text-lg font-medium">$0</div>
                  </div>

                  {/* Express Shipping Option */}
                  <div
                    className={`sm:w-1/2 border border-border p-3 rounded-sm flex justify-between ${
                      shipping === "ExpressShipping"
                        ? "bg-surface2"
                        : "bg-white"
                    }`}
                  >
                    <div>
                      <Radio
                        label="Express Shipping"
                        name="shipping"
                        value="ExpressShipping"
                        checked={shipping === "ExpressShipping"}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                      <span className="text-sm ms-6 text-muted">1-3 Days</span>
                    </div>
                    <div className="text-lg font-medium">$9</div>
                  </div>
                </div>
                <p className="font-heading font-semibold text-lg uppercase">
                  Payment Method
                </p>
                <div className="flex flex-col">
                  {/* card payment Option */}
                  <div
                    className={`w-full border border-border p-3 rounded-sm flex justify-between ${
                      payment === "Card" ? "bg-surface2" : "bg-white"
                    }`}
                  >
                    <div>
                      <Radio
                        label="Credit Card"
                        name="payment"
                        value="Card"
                        checked={payment === "Card"}
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </div>
                    <div className="text-2xl font-medium">
                      <FaCreditCard />
                    </div>
                  </div>

                  {/* card payment filed */}
                  <div className="p-4 space-y-2 border border-border rounded-sm">
                    <Input
                      name="CardholderName"
                      type="text"
                      placeholder="Cardholder Name"
                    />
                    <Input
                      name="CardNumber"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      icon={FaCreditCard}
                      iconPosition="right"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        name="date"
                        type="date"
                        placeholder="Expiration Date (mm/yy)"
                      />
                      <Input
                        name="CVV"
                        type="text"
                        placeholder="CVV"
                        icon={FaCreditCard}
                        iconPosition="right"
                      />
                    </div>
                  </div>

                  {/* cash payment Option */}
                  <div
                    className={`w-full border border-border p-3 rounded-sm flex justify-between mt-2 ${
                      payment === "Cash" ? "bg-surface2" : "bg-white"
                    }`}
                  >
                    <div>
                      <Radio
                        label="Cash on Delivery"
                        name="payment"
                        value="Cash"
                        checked={payment === "Cash"}
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </div>
                    <div className="text-2xl font-medium">
                      <FaRegMoneyBill1 />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/3 space-y-4">
              <div className="bg-surface2 p-6 space-y-6 text-accent">
                <p className="font-heading font-semibold text-lg uppercase">
                  Order Summary
                </p>
                <div>
                  {cartItems.map((item) => (
                    <OrderItem key={item.id} item={item} />
                  ))}
                </div>
                <Summary />
                <div className="space-y-2">
                  <div className="flex">
                    <div className="w-full flex items-center gap-1 px-2 py-3 bg-white text-accent border border-gray-300 rounded-l-sm focus-visible:outline-none">
                      <MdOutlineDiscount className="text-muted" />
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        className="w-full focus-visible:outline-0"
                      />
                    </div>
                    <button
                      className="bg-black text-white px-4 py-2 rounded-r-sm hover:bg-black/70 transition"
                      onClick={handleApplyCode}
                    >
                      Apply
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                </div>
                <Button
                  variant="solid"
                  color="dark"
                  onClick={handleClick}
                  className="w-full"
                >
                  Continue to Payment
                </Button>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-accent flex items-center justify-center gap-1">
                    <RiLock2Line /> <span>Secure Checkout - SSL Encrypted</span>
                  </p>
                  <p className="text-muted text-sm">
                    Ensure your financial and personal details are secure during
                    every transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Support />
    </>
  );
};

export default Checkout;
