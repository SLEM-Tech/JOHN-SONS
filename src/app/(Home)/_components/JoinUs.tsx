import { BiSolidQuoteAltLeft } from "@node_modules/react-icons/bi";
import { twoHands } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const JoinUs = () => {
  return (
    <main className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Background Image Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] rounded-3xl overflow-hidden">
        <Picture
          src={twoHands}
          alt="Two hands coming together"
          className="object-cover w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-10">
            Wise Quotes
          </h1>

          <div className="flex flex-col items-center gap-6 max-w-2xl">
            <BiSolidQuoteAltLeft className="text-white size-8 sm:size-9" />
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinUs;
