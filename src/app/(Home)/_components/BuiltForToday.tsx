"use client";
import React from "react";
import TestimonialCarousel from "./TestimonialComponent";
import Picture from "@src/components/picture/Picture";
import { girl1, girl2 } from "@public/images";

const BuildForToday = () => {
  return (
    <main className="flex flex-col items-center justify-center mx-auto w-full px-4 sm:px-6 bg-white gap-y-4 md:gap-y-5 pt-10 md:pt-20">
      <section className="flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-4xl leading-10 text-center font-bold">
          Built for modern <br /> tech enthusiasts
        </h1>
        <p className="text-center">
          Discover the latest gadgets, premium accessories, and powerful laptops
          designed to <br /> elevate your digital experience. Quality products
          with exceptional service.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <TestimonialCarousel />
        <Picture
          src={girl1}
          alt="Premium tech gadgets"
          className="w-full h-64 sm:h-80 md:h-full lg:h-full object-cover"
        />
        <Picture
          src={girl2}
          alt="Latest accessories"
          className="w-full h-64 sm:h-80 md:h-full lg:h-full object-cover"
        />
        <div className="flex flex-col justify-center gap-10 p-5 bg-gray-50">
          <h1 className="text-xs">EXPERT GUIDANCE ALWAYS</h1>
          <h2 className="text-4xl leading-[50px] font-bold">
            Our tech experts are <br /> here for you
          </h2>
          <p>
            Our team at John&Sons combines product expertise with genuine
            passion for technology. Whether you need help choosing the perfect
            laptop or finding the right accessories, we&apos;re here to guide you
            through every decision.
          </p>
          <p>
            We&apos;re committed to more than just sales – we&apos;re your trusted partner
            in building the perfect tech setup that matches your lifestyle and
            budget.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BuildForToday;