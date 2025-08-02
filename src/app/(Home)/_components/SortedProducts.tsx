"use client";
import { convertToSlug } from "@constants";
import ProductCard1 from "@src/components/Cards/ProductCard1";

import { updateCategorySlugId } from "@src/components/config/features/subCategoryId";
import { useCategories, WooCommerce } from "@src/components/lib/woocommerce";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SortedProducts = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await WooCommerce.get(`products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fetchProductsByCategory = async (categoryId: number) => {
    try {
      setIsLoading(true);
      const response = await WooCommerce.get(`products?category=${categoryId}`);
      setProducts(response.data);
      setActiveCategory(categoryId);
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryClick = (name: string, id: number) => {
    fetchProductsByCategory(id);
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">
      {/* Header Section */}
      <header className="text-center mb-12 ">
        <p className="text-lg">SOME QUALITY ITEMS</p>
        <h1 className="text-4xl font-bold my-4">Popular Books</h1>

        {/* Categories List */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories
            ?.filter((category: CategoryType) => category?.count > 0)
            .map((category: CategoryType) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name, category.id)}
                className={`px-4 py-2 ${
                  activeCategory === category.id
                    ? " border-b-2 border-primary pb-1"
                    : ""
                }`}>
                {category.name}
              </button>
            ))}
        </div>
      </header>

      {/* Products Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Find the perfect book for you
        </h2>

        {isLoading ? (
          <div className="flex justify-center">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard1 key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Quiz CTA */}
      {/* <section className="text-center mb-16">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Take the quiz
        </button>
      </section> */}
    </div>
  );
};

export default SortedProducts;
