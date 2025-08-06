"use client";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { convertToSlug } from "@constants";
import Picture from "../picture/Picture";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    price: string;
    regular_price?: string;
    images: Array<{ src: string }>;
  };
}

const ProductCard1 = ({ product }: ProductCardProps) => {
  const { addItem, removeItem, updateItem, getItem } = useCart();
  const slugDesc = convertToSlug(product.name);
  const cartItem = getItem(product.id.toString());
  const cartItemCount = cartItem?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: product.images[0]?.src,
    });
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateItem(product.id.toString(), { quantity: cartItemCount + 1 });
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItemCount === 1) {
      removeItem(product.id.toString());
    } else {
      updateItem(product.id.toString(), { quantity: cartItemCount - 1 });
    }
  };

  return (
    <Link
      href={`/home-item/product/${slugDesc}-${product.id}`}
      className="rounded-xl p-4 sm:p-6 transition flex flex-col bg-white/80 shadow-sm sm:shadow-xl shadow-white hover:shadow-lg w-full">
      {/* Image Section - Reduced height on mobile */}
      <div className="flex-[0.7] mb-2 sm:mb-4 bg-gray-100 flex items-center justify-center rounded-t-lg overflow-hidden aspect-square">
        <Picture
          src={product.images?.[0]?.src || ""}
          alt={`${product.name}-image`}
          className="w-full h-full object-contain p-2"
          loading="eager"
        />
      </div>

      {/* Content Section - Adjusted text sizes for mobile */}
      <div className="flex-[0.3] flex flex-col">
        <h3 className="text-sm sm:text-lg font-semibold text-black mb-1 sm:mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-auto">
          <p className="text-black mb-2 sm:mb-4 text-xs sm:text-base flex md:flex-row flex-col justify-center items-center">
            {product.regular_price && (
              <span className="line-through mr-1 sm:mr-2 text-gray-500">
                NGN{product.regular_price}
              </span>
            )}
            <span className="font-bold text-primary">NGN{product.price}</span>
          </p>

          {cartItemCount > 0 ? (
            <div className="flex items-center justify-between bg-tertiary-100 rounded-md text-sm sm:text-base">
              <button
                onClick={handleDecrease}
                className="px-2 sm:px-3 py-1 sm:py-2 text-primary hover:bg-primary/10 rounded-l-md"
                aria-label="Decrease quantity">
                <AiOutlineMinus />
              </button>
              <span className="font-medium">{cartItemCount}</span>
              <button
                onClick={handleIncrease}
                className="px-2 sm:px-3 py-1 sm:py-2 text-primary hover:bg-primary/10 rounded-r-md"
                aria-label="Increase quantity">
                <AiOutlinePlus />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full bg-tertiary-100 hover:bg-tertiary-200 text-black py-1 sm:py-2 rounded-md transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base"
              aria-label="Add to cart">
              <BsFillBagPlusFill className="text-primary text-sm sm:text-base" />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard1;
