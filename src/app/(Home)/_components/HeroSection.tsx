import {
  busInsiderImf,
  heroBanner,
  heroImage,
  techcrunch,
  yahooImg,
} from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const heroImg = [techcrunch, yahooImg, busInsiderImf];

const HeroSection = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between max-w-[1256px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-4 text-white">
      <section className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-6 sm:py-8 w-full lg:max-w-[680px] order-2 lg:order-1">
        <h1 className="capitalize text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] sm:leading-[1.3] xl:leading-[70px]">
          Your top <br className="hidden sm:block" /> technology service{" "}
          <br className="hidden sm:block" /> provider
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light">
          Your top technology service provider
        </p>
        <button className="capitalize bg-primary font-light text-white px-6 py-3 sm:p-4 text-xs sm:text-sm rounded-xl hover:opacity-90 transition-opacity">
          Open an account in 10 minutes
        </button>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full max-w-[500px]">
          {heroImg?.map((img, i) => (
            <Picture
              src={img}
              alt="img"
              key={i}
              className="w-28 xs:w-32 sm:w-36 flex-shrink-0"
            />
          ))}
        </div>
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
