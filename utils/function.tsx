"use client";
import { logoImage } from "@public/images";
import Picture from "@src/components/picture/Picture";
import Link from "next/link";

interface LogoImageProps {
  className?: string;
}

export const LogoImage = ({ className }: LogoImageProps) => {
  return (
    <Link href="/" className="">
      {/* <Picture
				src={logoImage}
				alt='logo'
				priority
				loading='lazy'
				className={`!w-[80px] lg:!w-[100px] h-[80px] lg:h-[100px] duration-300 hover:scale-105 transition-[.3] hover:animate-pulse font-bold text-5xl ${className}`}
			/> */}
      <span
        className={`!w-[80px] lg:!w-[100px] h-[80px] lg:h-[100px] duration-300 hover:scale-105 transition-[.3] hover:animate-pulse font-bold text-7xl ${className}`}>
        Logo
      </span>
    </Link>
  );
};

export const extractCurrencySymbol = (html: string) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.match(/[\u20A6]/)?.[0] || "";
};
