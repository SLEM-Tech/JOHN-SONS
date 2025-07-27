"use client";
import TestimonialCard from "@src/components/Cards/TestimonialCard";
import { testimonials } from "@utils/constant";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 w-full bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Testimonials
          </h2>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Real people, real results
          </h1>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              rating={item.rating}
              text={item.text}
              image={item.image}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
