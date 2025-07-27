import { treat1, treat2, treat3 } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const TreatYourself = () => {
  const heroData1 = [
    {
      icon: treat1,
      description:
        "Science-backed supplements for optimal health and wellness.",
    },
    {
      icon: treat1,
      description: "Crafted with care to support your unique health needs.",
    },
    {
      icon: treat2,
      description:
        "100% vegan and cruelty-free supplements for a healthier you",
    },
    {
      icon: treat3,
      description: "Experience the difference with our next-level supplements",
    },
  ];

  return (
    <main className="w-full bg-tertiary-400 pt-12 pb-16 px-4 sm:pt-20 sm:pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 sm:mb-12">
          Treat yourself, because you deserve it.
        </h1>

        {/* Cards Section */}
        <section className="relative">
          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 ">
            {heroData1?.map((item, i) => (
              <div
                key={`desktop-${i}`}
                className="min-h-[170px] p-6 bg-white rounded-2xl flex items-center gap-4">
                <Picture
                  src={item?.icon}
                  alt="iconImg"
                  className="w-8 h-8 flex-shrink-0"
                />
                <p className="font-light text-sm md:text-base">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll (hidden on desktop) */}
          <div className="md:hidden flex gap-4 pb-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
            {heroData1?.map((item, i) => (
              <div
                key={`mobile-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] h-[150px] p-5 bg-white rounded-2xl flex items-center gap-3 snap-start">
                <Picture
                  src={item?.icon}
                  alt="iconImg"
                  className="w-7 h-7 flex-shrink-0"
                />
                <p className="font-light text-sm">{item?.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TreatYourself;
