import React from "react";
import { Badge, Input, PromoCard } from "../components";
import { Link } from "react-router";
import { LuSearch } from "react-icons/lu";
import { FaRegStarHalfStroke, FaStar, FaRegStar } from "react-icons/fa6";

const Filter = ({ className = "" }) => {
  let tag = "watch";
  let tag2 = "Phones";
  let tag3 = "Headphones";
  let tag4 = "$50-$150";
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center font-heading text-base font-semibold text-accent py-4 border-b border-border">
          <div>Filter Option:</div>
          <div className="text-sm text-muted">
            <Link to="/">Clear all</Link>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <Input
            name="search"
            type="text"
            placeholder="Search Product"
            icon={LuSearch}
            iconPosition="right"
          />
          <div className="flex flex-wrap gap-2">
            <Badge key={tag} label={tag} />
            <Badge key={tag2} label={tag2} />
            <Badge key={tag3} label={tag3} />
            <Badge key={tag4} label={tag4} />
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Collections
          </div>
          <div className="space-y-3 text-sm">
            <Link to="/" className="block">
              Summer Sale <span>(125)</span>
            </Link>
            <Link to="/" className="block">
              Appreal <span>(125)</span>
            </Link>
            <Link to="/" className="block">
              Women Running <span>(125)</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Category
          </div>
          <div className="space-y-3">
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                SmartWatch <span>(250)</span>
              </span>
            </label>
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                Headphones <span>(250)</span>
              </span>
            </label>
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                SmartPhones <span>(250)</span>
              </span>
            </label>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Brand
          </div>
          <div className="space-y-3">
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                Sony <span>(250)</span>
              </span>
            </label>
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                Noice <span>(250)</span>
              </span>
            </label>
            <label className="w-full inline-flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="size-4 bg-white border-2 border-gray-300 rounded-md"
              />
              <span className="text-sm text-accent">
                Boat <span>(250)</span>
              </span>
            </label>
          </div>
        </div>
        <div className="space-y-4 border-b border-border pb-4">
          <div className="font-heading text-base font-semibold text-accent">
            Price
          </div>
          <div>
            <p>
              <span>$50.00</span> - <span> $250.00</span>
            </p>
          </div>
        </div>
        <PromoCard />
      </div>
    </>
  );
};

export default Filter;
