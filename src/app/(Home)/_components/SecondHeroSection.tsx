import { Zap, Shield, Headphones } from "lucide-react";
import React from "react";

const SecondHeroSection = () => {
  const heroIconData = [
    {
      title: "Fast Delivery",
      icon: Zap,
      description:
        "Get your tech essentials delivered quickly to your doorstep with our reliable shipping service.",
    },
    {
      title: "Quality Assured",
      icon: Shield,
      description:
        "All products are thoroughly tested and verified to ensure you receive only authentic, high-quality gadgets and accessories.",
    },
    {
      title: "Expert Support",
      icon: Headphones,
      description:
        "Our knowledgeable team is ready to help you choose the right products and provide technical assistance whenever you need it.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-white my-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Computers, PC Accessories & Software Tools
        </h2>
      </div>
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Explore high-performance laptops, desktops, accessories, and software
          designed to elevate your productivity. At John&Sons, we deliver
          trusted tech solutions with authentic products, fair prices, and
          customer service that puts you first.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {heroIconData?.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div key={i} className="text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item?.title}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondHeroSection;