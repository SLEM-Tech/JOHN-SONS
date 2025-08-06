"use client";
import React, { useEffect, useState } from "react";
import { CartIconSvg, UserIconSvg } from "../SvgIcons";
import { usePathname, useRouter } from "next/navigation";
import HomePageBottomHeader from "./HomePageBottomHeader";
import CategoryPageBottomHeader from "./CategoryPageBottomHeader";
import ProductPageBottomHeader from "./ProductPageBottomHeader";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useMutation } from "react-query";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import useToken from "../hooks/useToken";
import * as bi from "react-icons/bi";
import { FaCartArrowDown, FaSearch, FaShopify } from "react-icons/fa";
import { getFirstCharacter, signOut } from "@utils/lib";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { SlArrowDown } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import Picture from "../picture/Picture";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useCustomer } from "../lib/woocommerce";
import { currencyOptions, filterCustomersByEmail } from "@constants";
import { ImSpinner2 } from "react-icons/im";
import { LogoImage } from "@utils/function";
import BaseCurrency from "../Reusables/BaseCurrency";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Modal, ModalContent } from "@nextui-org/modal";
import { setBaseCurrency, setExchangeRate } from "../Redux/Currency";
import { fetchExchangeRate } from "@utils/endpoints";
import { APICall } from "@utils";
import FormToast from "../Reusables/Toast/SigninToast";
import { BsPersonFill } from "@node_modules/react-icons/bs";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, items } = useCart();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isUserClick, setIsUserClick] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const { token, email } = useToken();
  const [searchValue, setSearchValue] = useState("");
  const { baseCurrency } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency.code);
  const { data: customer } = useCustomer("");
  const wc_customer2_info: Woo_Customer_Type[] = customer;
  const wc_customer_info: Woo_Customer_Type | undefined =
    filterCustomersByEmail(wc_customer2_info, email);

  const calculateSubtotal = () => {
    return items.reduce(
      (total, item: any) => total + item?.price * item.quantity,
      0
    );
  };

  const mobileDropDownLinks = [
    {
      id: 1,
      href: "/user/dashboard",
      icon: <bi.BiUser className="text-base" />,
      label: "My Account",
    },
    {
      id: 2,
      href: "/user/my-orders",
      icon: <FaCartArrowDown className="text-base" />,
      label: "Orders",
    },
    {
      id: 3,
      href: "/cart",
      icon: <FiShoppingCart className="text-base" />,
      label: "Cart",
    },
  ];

  const handleisMobileNavClick = () => {
    setIsUserClick(!isUserClick);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setIsSearchLoading(true);
    router.push(`/search?${searchValue}`);
  };

  const firstName = wc_customer_info?.first_name;
  const lastName = wc_customer_info?.last_name;

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleNavMenuClick = () => {
    setIsMobileNav(!isMobileNav);
    openDrawer();
  };

  const [navbar, setNavbar] = useState(false);

  const setFixedHandler = () => {
    if (typeof window !== "undefined") {
      window.scrollY >= 200 ? setNavbar(true) : setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setFixedHandler);
      return () => {
        window.removeEventListener("scroll", setFixedHandler);
      };
    }
  }, []);

  const {
    isOpen: isOpenBaseCurrency,
    onOpen: onOpenBaseCurrency,
    onOpenChange: onOpenChangeBaseCurrency,
  } = useDisclosure();

  const exchangeRATEMutation = useMutation(
    async (value: string) => {
      const response = await APICall(
        fetchExchangeRate,
        ["NGN", value],
        true,
        true
      );
      return response;
    },
    {
      onSuccess: async (data) => {
        FormToast({
          message: "Exchange rate retrieved successfully.",
          success: true,
        });
      },
      onError: (error: any) => {
        const errorMessage = "Failed to fetch exchange rate. Please try again.";
        FormToast({
          message: errorMessage,
          success: false,
        });
      },
    }
  );

  const handleCurrencyChange = async (keys: "all" | Set<React.Key>) => {
    const selectedValue = Array.from(keys)[0] as string;
    const selectedCurrencyObj = currencyOptions.find(
      (c) => c.code === selectedValue
    );
    if (!selectedCurrencyObj) return;

    try {
      const data = await exchangeRATEMutation.mutateAsync(
        selectedCurrencyObj.code
      );
      if (data) {
        dispatch(setExchangeRate(data));
        dispatch(setBaseCurrency(selectedCurrencyObj));
        setSelectedCurrency(selectedValue);
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  return (
    <>
      <header
        className={`w-full bg-background z-50 transition drop-shadow-md fixed top-0 ${
          navbar ? "" : ""
        }`}>
        {/* Desktop View */}
        {/* Desktop View */}
        <div className="hidden slg:block">
          <div className="grid grid-cols-12 items-center w-full max-w-[1200px] mx-auto py-4 px-5 xl:px-0">
            {/* Logo - Left aligned */}
            <div className="col-span-3 flex justify-start">
              <LogoImage />
            </div>

            {/* Search Bar - Centered */}
            <div className="col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:ring-primary focus:border-primary outline-none text-sm"
                  value={searchValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary text-lg">
                  {isSearchLoading ? (
                    <ImSpinner2 className="animate-spin" />
                  ) : (
                    <FaSearch />
                  )}
                </button>
              </div>
            </div>

            {/* User Actions - Right aligned */}
            <div className="col-span-3 flex items-center justify-end gap-6">
              {/* User Profile */}
              <div className="flex items-center gap-2">
                {wc_customer_info?.shipping?.address_2 ? (
                  <Picture
                    src={wc_customer_info?.shipping?.address_2}
                    alt={"user-image"}
                    loading="eager"
                    className="size-10 rounded-full object-contain"
                  />
                ) : firstName ? (
                  <div className="flex justify-center items-center w-12 h-12">
                    <span className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 text-white text-xl font-semibold">
                      {getFirstCharacter(firstName)}
                    </span>
                  </div>
                ) : (
                  <BsPersonFill className="w-8 h-8 text-primary" />
                )}

                <div className="flex flex-col text-primary font-semibold text-sm">
                  {firstName ? (
                    <div
                      className="flex gap-1.5 items-center cursor-pointer group relative"
                      onClick={handleisMobileNavClick}>
                      <span
                        title={firstName}
                        className="line-clamp-1 overflow-y-hidden w-12">
                        {firstName}
                      </span>
                      <SlArrowDown className="text-primary group-hover:text-primary group-hover:translate-y-[2px] transition duration-400 ease-out" />
                      <AnimatePresence>
                        {isUserClick && (
                          <motion.nav
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            className="flex flex-col text-black gap-3 pt-4 w-[9rem] bg-white absolute left-0 top-[1.5rem] rounded-2xl overflow-hidden cursor-pointer duration-500 ease-out drop-shadow-xl z-50 transition font-light">
                            {mobileDropDownLinks.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className={`${
                                  pathname === item.href
                                    ? "text-primary"
                                    : "text-black"
                                } flex gap-1.5 px-4 items-center hover:text-primary`}>
                                {item.icon}
                                {item.label}
                              </Link>
                            ))}
                            <span
                              onClick={() => signOut()}
                              className="text-center pt-1 pb-2 text-gray-500 hover:text-primary border-t">
                              Log Out
                            </span>
                          </motion.nav>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <span
                      className="cursor-pointer hover:text-primaryColor-200 transition"
                      onClick={() => router.push("/user/login")}>
                      Log In
                    </span>
                  )}
                </div>
              </div>

              {/* Currency Selector */}
              <Dropdown>
                <DropdownTrigger>
                  <button
                    type="button"
                    className="bg-background border border-primary hover:bg-black cursor-pointer transition-[.4] group text-primary text-2xl group-hover:text-white rounded-full p-0 size-10">
                    {baseCurrency?.symbol}
                  </button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Select Base Currency"
                  selectionMode="single"
                  selectedKeys={new Set([selectedCurrency])}
                  onSelectionChange={handleCurrencyChange}>
                  {currencyOptions.map((currency) => (
                    <DropdownItem
                      key={currency.code}
                      value={currency.code}
                      className="w-fit">
                      {`${currency.country} | ${currency.code} (${currency.symbol})`}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              {/* Cart */}
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => router.push("/cart")}>
                <div className="flex relative justify-center items-center rounded-full w-12 h-12 p-2 text-sm border">
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white shadow-lg flex justify-center items-center rounded-full">
                    {totalItems}
                  </span>
                  <FaShopify className="size-8 text-primary" />
                </div>
                <span className="truncate text-sm font-semibold text-primary w-16 overflow-hidden">
                  <FormatMoney2 value={calculateSubtotal()} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="slg:hidden">
          <div className="px-4 py-3">
            {/* Top Row - Hamburger, Logo, User Actions */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <GiHamburgerMenu
                  onClick={handleNavMenuClick}
                  className="text-2xl text-primary hover:scale-105 transition"
                />
                <LogoImage />
              </div>

              <div className="flex items-center gap-3">
                {/* Currency Selector */}
                <Dropdown>
                  <DropdownTrigger>
                    <button
                      type="button"
                      className="bg-background border border-primary hover:bg-black cursor-pointer transition-[.4] group text-primary text-xl group-hover:text-white rounded-full p-0 size-8">
                      {baseCurrency?.symbol}
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Select Base Currency"
                    selectionMode="single"
                    selectedKeys={new Set([selectedCurrency])}
                    onSelectionChange={handleCurrencyChange}>
                    {currencyOptions.map((currency) => (
                      <DropdownItem
                        key={currency.code}
                        value={currency.code}
                        className="w-fit text-sm">
                        {`${currency.country} | ${currency.code} (${currency.symbol})`}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>

                {/* User Profile */}
                {firstName ? (
                  <div
                    className="flex items-center cursor-pointer group relative"
                    onClick={handleisMobileNavClick}>
                    {wc_customer_info?.shipping?.address_2 ? (
                      <Picture
                        src={wc_customer_info?.shipping?.address_2}
                        alt={"user-image"}
                        loading="eager"
                        className="w-8 h-8 rounded-full object-contain"
                      />
                    ) : (
                      <span className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-300 text-white text-sm font-semibold">
                        {getFirstCharacter(firstName)}
                      </span>
                    )}
                    <SlArrowDown className="text-primary text-xs group-hover:text-primary group-hover:translate-y-[2px] transition duration-400 ease-out" />
                    <AnimatePresence>
                      {isUserClick && (
                        <motion.nav
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -100, opacity: 0 }}
                          className="flex flex-col text-black gap-3 pt-4 w-[9rem] bg-white absolute right-0 top-[2rem] rounded-2xl overflow-hidden cursor-pointer duration-500 ease-out drop-shadow-xl z-50 transition font-light">
                          {mobileDropDownLinks.map((item, i) => (
                            <div
                              key={i}
                              className="flex gap-2 px-4 items-center text-xs">
                              {item.icon}
                              <Link
                                href={item.href}
                                className={`${
                                  pathname === item.href
                                    ? "text-primary"
                                    : "text-black"
                                } hover:text-primary`}>
                                {item.label}
                              </Link>
                            </div>
                          ))}
                          <span
                            onClick={() => signOut()}
                            className="text-center text-xs pt-1 pb-2 text-gray-500 hover:text-primary border-t">
                            Log Out
                          </span>
                        </motion.nav>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <BsPersonFill
                    onClick={() => router.push("/user/login")}
                    className="w-6 h-6 text-primary"
                  />
                )}

                {/* Cart */}
                <div
                  onClick={() => router.push("/cart")}
                  className="flex relative justify-center items-center rounded-full w-10 h-10 p-2 text-xs border">
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white shadow-lg flex justify-center items-center rounded-full">
                    {totalItems}
                  </span>
                  <FaShopify className="size-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:ring-primaryColor-100 focus:border-primaryColor-100 outline-none text-sm"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary text-sm">
                {isSearchLoading ? (
                  <ImSpinner2 className="animate-spin" />
                ) : (
                  <FaSearch />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {drawerVisible && (
            <MobileNav
              closeDrawer={closeDrawer}
              drawerVisible={drawerVisible}
            />
          )}
        </div>

        {/* Bottom Header (Conditional) */}
        {pathname.includes("/category") ? (
          <CategoryPageBottomHeader />
        ) : pathname.includes("/home-item") ? (
          <ProductPageBottomHeader />
        ) : null}
      </header>

      {/* Currency Modal */}
      <Modal
        backdrop="opaque"
        isOpen={isOpenBaseCurrency}
        onOpenChange={onOpenChangeBaseCurrency}
        isDismissable={false}
        size="sm">
        <ModalContent>
          {(onClose) => <BaseCurrency onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
