"use client";
import { useRouter } from "@node_modules/next/navigation";
import { bible, chatIcon, giftIcon, heroImg, starIcon } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const HeroSection = () => {
  const router = useRouter();
  const heroData = [
    {
      icon: chatIcon,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit placerat dignissim placerat quis ac viverra.",
    },
    {
      icon: giftIcon,
      title: "Customized Recommendations",
      description:
        "Find your perfect book based on your unique needs and goals!",
    },
    {
      icon: starIcon,
      title: "Building Habits",
      description:
        "Embark on your path to better knowledge with expert guidance every step of the way",
    },
  ];

  return (
    <main className="max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 sm:px-8 py-8">
        {/* Text Content */}
        <div className="w-full lg:w-auto space-y-6 lg:space-y-12 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h1>
          <button
            onClick={() => router.push(`/category`)}
            className="bg-black text-primaryColor-400 px-6 py-3 rounded-md hover:bg-primaryColor-400 hover:text-black transition text-lg">
            Discover all
          </button>
        </div>

        {/* Images - Maintains original desktop layout */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end relative">
          <div className="flex flex-col gap-4 md:flex-row">
            <Picture
              src={heroImg}
              alt="heroImg"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[490px] h-auto lg:h-[586px] object-cover"
            />
            <Picture
              src={bible}
              alt="bible"
              className=" lg:block w-[384px] lg:h-[586px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-8 py-8">
        {heroData?.map((item, i) => (
          <div key={i} className="flex gap-4">
            <Picture
              src={item?.icon}
              alt="iconImg"
              className="w-8 h-8 mt-1 flex-shrink-0"
            />
            <div className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold">
                {item?.title}
              </h2>
              <p className="font-light">{item?.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HeroSection;
