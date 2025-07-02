import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router";

const Post = ({ image, image2x, title, date, description, link }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          srcSet={`${image} 1x, ${image2x} 2x`}
          alt={title}
          className="w-full"
        />
      </div>
      <div className="bg-surface2 px-6 py-4 space-y-3 lg:space-y-4">
        <p className="font-medium text-sm text-teritory">{date}</p>
        <p className="font-heading font-semibold lg:text-lg">{title}</p>
        <p className="text-muted text-sm lg:text-base">{description}</p>
        <NavLink
          to={link}
          className="inline-flex items-center gap-1 text-sm lg:text-base text-primary"
        >
          Read More <IoIosArrowForward />
        </NavLink>
      </div>
    </div>
  );
};

export default Post;
