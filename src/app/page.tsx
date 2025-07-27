import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import HeroSection from "./(Home)/HeroSection";
import TreatYourself from "./(Home)/TreatYourself";
import TestimonialsSection from "./(Home)/TestimonySection";
import JoinUs from "./(Home)/_components/JoinUs";
import FaqComponent from "./(Home)/_components/FaqComponent";
import ContactComponent from "./(Home)/_components/ContactComponent";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: title,
  description: description,
  icons: SEODATA.defaultOGImage,
  openGraph: {
    images: [
      {
        url: SEODATA.defaultOGImage,
      },
    ],
  },
};

const page = () => {
  return (
    <AppLayout className="className='pt-10 mx-auto pt-28 sm:mt-24">
      {/* <AllCategorySection /> */}
      <HeroSection />
      <div className="bg-tertiary-300">
        <SortedProducts />
      </div>
      <div className="bg-heroGradient px-2">
        <TreatYourself />
        <TestimonialsSection />
        <JoinUs />
        <FaqComponent />
        <ContactComponent />
      </div>
    </AppLayout>
  );
};

export default page;
