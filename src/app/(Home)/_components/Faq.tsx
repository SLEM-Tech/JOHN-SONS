import FaqAccordion from "@src/components/Reusables/Accordion/FaqAccordion";
import React from "react";

const Faq = () => {
  return (
    <main className="mx-auto mt-32 md:mt-36">
      <section className="flex w-full flex-col items-center pt-16 slg:px-16 text-center">
        <h3 className="font-semibold text-xl sm:text-2xl slg:text-4xl tracking-tighter text-white">
          Frequently Asked Question
        </h3>
        <FaqAccordion />
      </section>
    </main>
  );
};

export default Faq;
