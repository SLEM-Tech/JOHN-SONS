"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  text: string;
  author: string;
  product: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "John&Sons provided exactly what I needed for my home office setup. The laptop recommendations were spot-on, and the accessories perfectly complemented my workspace. Outstanding service!",
      author: "David Okafor",
      product: "MacBook Pro & Accessories",
    },
    {
      text: "I've been shopping at John&Sons for years. Their product knowledge is impressive, and they always have the latest gadgets. The warranty support is exceptional too!",
      author: "Aminat Ibrahim",
      product: "Gaming Laptop Setup",
    },
    {
      text: "Best tech store in Lagos! From wireless earbuds to my new laptop, everything has been top quality. The team really knows their stuff and genuinely cares about finding the right fit.",
      author: "Chukwudi Eze",
      product: "Dell XPS & Smart Accessories",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative py-12 md:py-16 bg-background text-white overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          What Our Customers Say
        </h2>

        <div className="relative h-64 sm:h-80 md:h-96 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0" : "opacity-100"
              } ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}>
              <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                <FaQuoteLeft className="text-3xl sm:text-4xl text-white mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
                  {testimonial.text}
                </p>
                <div className="mt-auto">
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm sm:text-md text-white">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous testimonial">
          <FaChevronLeft className="text-gray-700 text-sm sm:text-base" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Next testimonial">
          <FaChevronRight className="text-gray-700 text-sm sm:text-base" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 sm:w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;