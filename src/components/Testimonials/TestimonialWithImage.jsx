import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialWithImage({
  image,
  name,
  company,
  position,
  children,
}) {
  return (
    <div className="testimonial">
      <img src={image} />
      <BiSolidQuoteAltLeft size={48} color="grey" />
      {children}
    </div>
  );
}
