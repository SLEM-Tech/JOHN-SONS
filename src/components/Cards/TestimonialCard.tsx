"use client";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Picture from "../picture/Picture";
import { StaticImageData } from "@node_modules/next/image";

interface Props {
  name: string;
  text: string;
  rating: number;
  image: string | StaticImageData;
  bgColor: string;
}

const TestimonialCard: React.FC<Props> = ({
  name,
  text,
  rating,
  image,
  bgColor,
}) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-md w-full sm:w-[300px] ${bgColor}`}>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-black text-sm mr-1" />
          ) : (
            <FaRegStar key={index} className="text-black text-sm mr-1" />
          )
        )}
      </div>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{text}</p>
      <p className="font-semibold text-sm text-black">- {name}</p>

      <Picture
        src={image}
        alt={name}
        className="absolute -top-6 right-6 w-12 h-12 object-cover rounded-full border-4 border-white shadow-md"
      />
    </div>
  );
};

export default TestimonialCard;
