import {
  bookdoorIcon,
  bookstoreIcon,
  flapriseIcon,
  gradIcon,
  libraryIcon,
  securityIcon,
  speedIcon,
  supportIcon,
} from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const SecondHeroSection = () => {
  const heroIconData = [
    {
      title: "Speed",
      icon: speedIcon,
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta non neque morbi semper arcu sagittis.",
    },
    {
      title: "Security",
      icon: securityIcon,
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta non neque morbi semper arcu sagittis.",
    },
    {
      title: "Support",
      icon: supportIcon,
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta non neque morbi semper arcu sagittis.",
    },
  ];

  return (
    <main className="bg-white mt-8 sm:mt-12 md:mt-20 py-8 sm:py-12 md:py-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <section className="flex flex-col justify-center items-center gap-3 sm:gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          The complete technology stack for your business
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
          Top-end financial tools to help your business with its technology
          operations and cash flow. We help companies of all types work better,
          save time and money with a simply better banking service that works.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-24 md:mt-32 gap-6 sm:gap-8">
        {heroIconData?.map((item, i) => (
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            key={i}>
            <Picture
              src={item?.icon}
              alt={`icon ${i + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 object-contain"
            />
            <div className="text-center sm:text-left space-y-2">
              <h1 className="text-lg sm:text-xl font-semibold">
                {item?.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SecondHeroSection;
