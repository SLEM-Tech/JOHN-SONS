import ContactCards from "@src/app/contact-us/_components/ContactCards";
import React from "react";

const ContactComponent = () => {
  return (
    <main className="bg-background mx-auto w-full pt-32 md:pt-36 min-h-screen ">
      <h3 className="font-semibold text-xl sm:text-2xl slg:text-3xl tracking-tighter text-center mt-10">
        Contact Us
      </h3>

      <div className="flex flex-wrap w-full justify-center gap-8 mt-10 px-4 slg:px-0">
        <ContactCards />
      </div>
    </main>
  );
};

export default ContactComponent;
