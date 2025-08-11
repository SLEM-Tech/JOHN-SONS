import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import HeroSection from "./(Home)/_components/HeroSection";
import SecondHeroSection from "./(Home)/_components/SecondHeroSection";
// import QuoteOfDay from "./(Home)/_components/QuoteOfDay";
import Faq from "./(Home)/_components/Faq";
import ContactUs from "./(Home)/_components/ContactUs";
import BuildForToday from "./(Home)/_components/BuiltForToday";

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
    <AppLayout className="mx-auto pt-28 sm:pt-44">
      {/* <AllCategorySection /> */}
      <HeroSection />
      <SecondHeroSection />
      <div className="my-4 sm:my-10 mb-24  max-w-[1200px] mx-auto">
        <SortedProducts />
        <BuildForToday />
        <Faq />
        <ContactUs />
      </div>
    </AppLayout>
  );
};

export default page;
