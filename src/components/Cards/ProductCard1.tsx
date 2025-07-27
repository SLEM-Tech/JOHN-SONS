"use client";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { convertToSlug } from "@constants";
import Picture from "../picture/Picture";

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
  const { addItem } = useCart();
  const slugDesc = convertToSlug(product.name);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    e.preventDefault(); // Prevent link navigation
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: product.images[0]?.src,
    });
  };

  return (
    <Link
      href={`/home-item/product/${slugDesc}-${product.id}`}
      className="rounded-xl p-6 hover:shadow-lg transition flex flex-col bg-white">
      {/* Image Section */}
      <div className="flex-[0.7] mb-4 bg-gray-100 flex items-center justify-center rounded-t-lg overflow-hidden">
        <Picture
          src={product.images?.[0]?.src || ""}
          alt={`${product.name}-image`}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Content Section */}
      <div className="flex-[0.3] flex flex-col">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-600">
          {product.name}
        </h3>
        <div className="mt-auto">
          <p className="text-gray-600 mb-4">
            {product.regular_price && (
              <span className="line-through mr-2">
                NGN{product.regular_price}
              </span>
            )}
            <span className="font-bold">NGN{product.price}</span>
          </p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-tertiary-100 text-black py-2 rounded-md shadow-md transition"
            // Add these to ensure button clicks don't navigate
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}>
            Add to cart - NGN{product.price}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard1;
