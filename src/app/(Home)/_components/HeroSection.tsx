"use client";
import {
  busInsiderImf,
  heroBanner,
  heroImage,
  techcrunch,
  yahooImg,
} from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";
import Link from "next/link";

const heroImg = [techcrunch, yahooImg, busInsiderImf];

const HeroSection = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-4 text-white">
      <section className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-6 sm:py-8 w-full lg:max-w-[680px] order-2 lg:order-1">
        <h1 className="capitalize text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] sm:leading-[1.3] xl:leading-[70px]">
          Your top <br className="hidden sm:block" /> technology service{" "}
          <br className="hidden sm:block" /> provider
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-[32rem]">
          Premium solutions for your digital transformation needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/category"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base sm:text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30">
            Shop Now
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base sm:text-lg font-medium text-white border border-white rounded-lg hover:bg-white/10 transition-all duration-300">
            Contact Us
          </Link>
        </div>

        {/* <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full max-w-[500px]">
          {heroImg?.map((img, i) => (
            <Picture
              src={img}
              alt="img"
              key={i}
              className="w-28 xs:w-32 sm:w-36 flex-shrink-0"
            />
          ))}
        </div> */}
      </section>
      <section className="order-1 lg:order-2 w-full lg:w-auto mt-4 sm:mt-6 lg:mt-0">
        <Picture
          src={heroBanner}
          alt="hero banner"
          className="w-full max-w-[500px] sm:max-w-[605px] max-h-[400px] sm:max-h-[500px] lg:max-h-[595px] object-cover mx-auto"
        />
      </section>
    </main>
  );
};

export default HeroSection;
