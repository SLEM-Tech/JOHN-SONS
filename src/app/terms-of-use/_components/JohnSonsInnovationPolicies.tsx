import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// JOHN & SONS INNOVATION TECHNOLOGY SERVICES COMPANY LIMITED - Information Technology
const JohnSonsInnovationPolicies = () => {
  const searchParams = useSearchParams().toString();
  const search = searchParams.replace(/=$/, "");
  const [activeTab, setActiveTab] = useState<string>("termsOfUse");

  useEffect(() => {
    if (search === "terms-of-use") {
      setActiveTab("termsOfUse");
    } else if (search === "privacy-policy") {
      setActiveTab("privacyPolicy");
    } else if (search === "delivery-return") {
      setActiveTab("deliveryReturn");
    } else if (search === "refund-policy") {
      setActiveTab("refundPolicy");
    }
  }, [search]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="bg-background mx-auto pt-32 pb-24">
      <section className="flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center">
        <h4 className="text-white text-base sm:text-xl font-semibold leading-[120%]">
          Our Policies
        </h4>
        <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%] text-white">
          John & Sons Innovation Computer Store Policies
        </h3>
        <span className="text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl">
          At John & Sons Innovation, we provide high-quality computers, computer
          accessories, peripheral equipment, and licensed software solutions.
          Our policies ensure transparency, customer satisfaction, and a secure
          shopping experience across all our products and services.
        </span>
        <div className="flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition">
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "termsOfUse"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("termsOfUse")}
          >
            Terms of use
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "privacyPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("privacyPolicy")}
          >
            Privacy Policy
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "deliveryReturn"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("deliveryReturn")}
          >
            Delivery & Return
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "refundPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("refundPolicy")}
          >
            Refund Policy
          </button>
        </div>
      </section>

      <div className="flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20">
        {activeTab === "termsOfUse" && (
          <div id="termsOfUse" className="text-[#667085]">
            <h4 className="text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize">
              Terms of Use – John & Sons Innovation Computer Store
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              By shopping with John & Sons Innovation, you agree to the
              following terms and conditions governing the purchase of
              computers, accessories, software, and all related technology
              products from our store.
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">Product Categories:</span> We sell
                laptops, desktops, computer components, peripherals, printers,
                networking devices, accessories, UPS systems, and licensed
                software.
              </li>
              <li>
                <span className="font-medium">Product Descriptions:</span> All
                items listed on our website include accurate specifications and
                images. However, slight variations may occur due to manufacturer
                updates.
              </li>
              <li>
                <span className="font-medium">Software Licensing:</span> All
                software sold (OS, antivirus, productivity tools, etc.) is
                genuine and accompanied by valid activation keys. Installation
                support may be provided upon request.
              </li>
              <li>
                <span className="font-medium">Warranty Coverage:</span> Most
                hardware products include manufacturer warranty ranging from 6
                to 24 months. Warranty terms vary by brand and product type.
              </li>
              <li>
                <span className="font-medium">Order Acceptance:</span> Orders
                may be accepted or declined based on product availability,
                payment verification, or shipping restrictions.
              </li>
              <li>
                <span className="font-medium">Technical Support:</span> We
                provide basic setup assistance and troubleshooting for purchased
                hardware and software. Advanced support may incur additional
                fees.
              </li>
              <li>
                <span className="font-medium">Intellectual Property:</span>{" "}
                Product images, descriptions, and digital content remain the
                property of their respective manufacturers.
              </li>
              <li>
                <span className="font-medium">Misuse of Products:</span> We are
                not responsible for damage arising from incorrect installation,
                liquid damage, power surge, or physical mishandling.
              </li>
            </ul>

            <p className="mt-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Product Availability:</span> Stock
              availability may vary. Out-of-stock items may require pre-order or
              replacement with similar options.
            </p>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Order Cancellation:</span> Orders
              may be cancelled before shipping. Once dispatched, cancellation is
              no longer possible and falls under our return policy.
            </p>
          </div>
        )}

        {activeTab === "privacyPolicy" && (
          <div id="privacyPolicy" className="text-[#667085]">
            <h4 className="text-sm sm:text-xl xl:text-2xl font-semibold text-black">
              PRIVACY POLICY – JOHN & SONS INNOVATION COMPUTER STORE
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              We are committed to protecting your personal information and
              ensuring a safe and secure shopping experience for all customers
              who purchase computers, accessories, and software from our store.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              INFORMATION WE COLLECT
            </h4>
            <ul className="mt-2 list-decimal pl-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>Customer contact details (name, email, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>
                Payment information (processed securely by third-party gateways)
              </li>
              <li>Device information for account security</li>
              <li>Purchase history and customer support interactions</li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              HOW WE USE YOUR DATA
            </h4>
            <ul className="mt-2 list-disc pl-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>To process and deliver your orders efficiently</li>
              <li>To provide warranty support and product assistance</li>
              <li>To improve our online store and product offerings</li>
              <li>To verify payments and prevent fraudulent activities</li>
              <li>To send order updates, promotions, and technical notices</li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              DATA PROTECTION MEASURES
            </h4>
            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              We use encryption, secure servers, and industry-standard
              PCI-compliant payment processors to protect all customer
              information. Access to sensitive data is strictly controlled.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              THIRD-PARTY DISCLOSURE
            </h4>
            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Customer data is never sold. Limited information may be shared
              with trusted partners such as logistics companies, payment
              providers, and software vendors—strictly for order fulfillment.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CUSTOMER RIGHTS
            </h4>
            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Customers may request data correction, deletion, or account
              closure at any time by contacting support@johnsons-tech.com.ng.
            </p>
          </div>
        )}

        {activeTab === "deliveryReturn" && (
          <div id="deliveryReturn" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              DELIVERY & RETURN POLICY – JOHN & SONS INNOVATION COMPUTER STORE
            </h3>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              We ensure fast, secure, and reliable delivery of all computers,
              accessories, and software purchased from our online store.
            </p>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Delivery Information
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Orders within Lagos are delivered within 24–48 hours</li>
                <li>Nationwide deliveries take 2–5 working days</li>
                <li>Tracking information provided for all shipped items</li>
                <li>Same-day delivery may be available for in-stock items</li>
                <li>Shipping fees vary by location and product weight</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Return Policy
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Returns accepted within 7 days for eligible items</li>
                <li>Product must remain unused and in original packaging</li>
                <li>Software products are non-refundable once activated</li>
                <li>Opened accessories may attract restocking fees</li>
                <li>Warranty claims handled according to manufacturer rules</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Replacement Conditions
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Damaged or defective items replaced at no extra cost</li>
                <li>Wrong items delivered will be exchanged immediately</li>
                <li>
                  Faulty products must be verified by our technical team before
                  replacement
                </li>
                <li>
                  Physical damage not caused by us or courier is not covered
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Contact for Deliveries & Returns
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Delivery Support: logistics@johnsons-tech.com.ng</li>
                <li>Returns Desk: returns@johnsons-tech.com.ng</li>
                <li>Customer Care: +234-801-234-5006</li>
                <li>Website: www.johnsons-tech.com.ng</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "refundPolicy" && (
          <div id="refundPolicy" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              REFUND POLICY – JOHN & SONS INNOVATION COMPUTER STORE
            </h3>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              Effective Date: {new Date().toLocaleDateString("en-GB")}
            </p>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              Our refund policy ensures fair and transparent handling of refunds
              for computers, accessories, peripherals, and software purchased
              from our store.
            </p>

            <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">1. Refund Eligibility</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Items with manufacturer defects within 7 days</li>
                  <li>Wrong items delivered</li>
                  <li>Products damaged during delivery</li>
                  <li>
                    Hardware failing within warranty (handled through
                    manufacturer channels)
                  </li>
                  <li>
                    Software refunds only valid if activation key is unused and
                    unexposed
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">2. Non-Refundable Items</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Activated software licenses</li>
                  <li>Opened printer cartridges or consumables</li>
                  <li>
                    Physical damage caused by customer (drops, liquid damage,
                    power surge)
                  </li>
                  <li>Items missing accessories or original packaging</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">3. Refund Processing</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Refunds processed within 5–10 business days</li>
                  <li>Refunds issued via original payment method</li>
                  <li>Bank transfer available for cash-on-delivery orders</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">4. How to Request a Refund</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Email: refunds@johnsons-tech.com.ng</li>
                  <li>Include order number, product images, and reason</li>
                  <li>Our team will inspect and confirm product condition</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default JohnSonsInnovationPolicies;
