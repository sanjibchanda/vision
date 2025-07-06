import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, NewsletterButton } from "../components";
const Footer = () => {
  return (
    <>
      <section className="bg-black text-white py-12 md:py-16 xl:py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <NavLink to="/" className="block">
                <img src={assets.logo.light} alt="logo" className="logo" />
              </NavLink>
              <p>
                Your trusted source for high-performance sports gear. Built for
                athletes. Designed for results.
              </p>
              <ul>
                <li className="flex items-center gap-2">
                  <LuPhone />
                  <Link to="/">+1 (800) 123-SPORT</Link>
                </li>
                <li className="flex items-center gap-2">
                  <LuMail />
                  <Link to="/">support@yourequipmentstore.com</Link>
                </li>
              </ul>
              <ul className="flex items-center gap-2 text-xl">
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-heading text-xl font-semibold">Quick Links</p>
              <ul className="grid grid-cols-2 gap-2">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Shipping & Returns</Link>
                </li>
                <li>
                  <Link to="/">Payment Methods</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-heading text-xl font-semibold">Quick Links</p>
              <p>
                Get exclusive discounts, training tips, and new product launches
                straight to your inbox.
              </p>
              <NewsletterButton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
