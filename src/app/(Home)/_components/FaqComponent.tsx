import FaqAccordion from "@src/components/Reusables/Accordion/FaqAccordion";
import React from "react";

const FaqComponent = () => {
  return (
    <main className="bg-background mx-auto pt-32 md:pt-36">
      <section className="flex w-full flex-col items-center pt-16 slg:px-16 text-center">
        <h3 className="font-semibold text-xl sm:text-2xl slg:text-4xl tracking-tighter">
          Frequently Asked Question
        </h3>
        <FaqAccordion />
      </section>
    </main>
  );
};

export default FaqComponent;
