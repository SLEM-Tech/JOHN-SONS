"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { RiShoppingBagFill } from "react-icons/ri";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";

interface ProductCard2Props {
  id: string | number;
  image: string;
  oldAmount?: string;
  newAmount: string;
  description: string;
  boxShadow?: boolean;
}

const ProductCard2 = ({
  id,
  image,
  oldAmount,
  newAmount,
  description,
  boxShadow,
}: ProductCard2Props) => {
  const router = useRouter();
  const { addItem, removeItem, updateItem, getItem } = useCart();
  const [count, setCount] = useState(0);
  const ID = id.toString();
  const cartItem = getItem(ID);
  const cartItemCount = cartItem ? cartItem.quantity : 0;
  const NewAmount = parseInt(newAmount);

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(count + 1);
    addItem({
      id: ID,
      name: description,
      price: NewAmount,
      quantity: count,
      image: image,
    });
  };

  const handleMinusCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newCount = Math.max(count - 1, 0);
    if (newCount === 0) {
      removeItem(ID);
    } else {
      updateItem(ID, { quantity: newCount });
    }
    setCount(newCount);
  };

  const handlePlusCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newCount = count + 1;
    addItem({
      id: ID,
      name: description,
      price: NewAmount,
      quantity: newCount,
      image: image,
    });
    setCount(newCount);
  };

  const slugDesc = convertToSlug(description);

  return (
    <div className="flex flex-col items-center w-[150px] md:w-[180px] text-center">
      <Link href={`/home-item/product/${slugDesc}-${id}`}>
        <Picture
          src={image || ""}
          alt={`${description}-image`}
          className="w-full h-[200px] md:h-[230px] object-cover rounded-md"
        />
      </Link>
      <h3 className="text-sm md:text-base font-semibold line-clamp-2 mt-2">
        {description}
      </h3>
      <p className="text-xs text-gray-600 mt-1">by {slugDesc.split("-")[0]}</p>
      <p className="text-sm text-yellow-700 mt-1">NGN {newAmount}.00</p>
      <div className="flex items-center gap-1 mt-2 rounded-md text-white p-1 text-xs sm:text-sm transition bg-primary">
        {cartItemCount === 0 ? (
          <RiShoppingBagFill
            className="fill-white text-2xl cursor-pointer"
            onClick={handleCartClick}
          />
        ) : (
          <>
            <AiOutlineMinus onClick={handleMinusCartClick} />
            <span className="">{cartItemCount}</span>
            <AiOutlinePlus onClick={handlePlusCartClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard2;
