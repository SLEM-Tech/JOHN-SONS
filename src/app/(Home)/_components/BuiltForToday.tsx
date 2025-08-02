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
          Built for today&apos;s <br /> ambitious businesses
        </h1>
        <p className="text-center">
          Euismod morbi etiam justo ut massa auctor odio at. Dui amet adipiscing
          dis <br /> enim ac placerat. In tincidunt cursus eget condimentum
          cursus. Sed ac in.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <TestimonialCarousel />
        <Picture
          src={girl1}
          alt="girl1"
          className="w-full h-64 sm:h-80 md:h-full lg:h-full object-cover"
        />
        <Picture
          src={girl2}
          alt="girl1"
          className="w-full h-64 sm:h-80 md:h-full lg:h-full object-cover"
        />
        <div className="flex flex-col justify-center gap-10 p-5 bg-gray-50">
          <h1 className="text-xs">SUPPORT WHEN YOU NEED IT</h1>
          <h2 className="text-4xl leading-[50px] font-bold">
            Our support team is <br /> your team
          </h2>
          <p>
            Our support team are a mix of bankers and growth experts ready to
            help you. With a Brass account, you get a team that is genuinely
            seeking to understand your business and provide solutions for its
            financial operations.
          </p>
          <p>
            We are committed to going beyond issue resolution to becoming your
            partner in the growing and smooth running of your business.
          </p>
        </div>
      </section>
      {/* <h1 className="text-secondary-400 text-3xl sm:text-4xl md:text-5xl font-medium">
        Quote Of The Day
      </h1>
      <p className="text-gray1-400 text-lg sm:text-xl md:text-2xl text-center leading-normal sm:leading-[1.6] md:leading-[55px]">
        “The more that you read, the more things you will know. The more that
        you learn, the more places you’ll go.”
      </p>
      <h2 className="mt-6 md:mt-10 text-gray1-400 text-base md:text-lg">
        — odogwu baddo
      </h2> */}
    </main>
  );
};

export default BuildForToday;
