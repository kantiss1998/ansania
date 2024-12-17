import React from "react";
import DiscountCard from "../../components/Client/Card/DiscountCard";
import PageLayout from "../../components/Client/PageLayout";

const Discount = () => {
  const discounts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBCJ8JMM7WfCcsKT_2huiiHxWLKog0uBUBw&s",
      name: "Summer Blast Sale",
      code: "SUMMER2024",
      description:
        "Get 30% off on all summer collection items. Hurry, offer valid for a limited time!",
      promotionPeriod: "June 1 - August 31, 2024",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBCJ8JMM7WfCcsKT_2huiiHxWLKog0uBUBw&s",
      name: "New Customer Discount",
      code: "WELCOME20",
      description:
        "20% off for first-time customers. Start your shopping journey with great savings!",
      promotionPeriod: "Ongoing",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBCJ8JMM7WfCcsKT_2huiiHxWLKog0uBUBw&s",
      name: "Weekend Special",
      code: "WEEKEND15",
      description:
        "Enjoy 15% off on all weekend purchases. Perfect time to treat yourself!",
      promotionPeriod: "Every Friday-Sunday",
    },
  ];
  return (
    <>
      <PageLayout>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Discount Offers
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {discounts.map((discount) => (
                <DiscountCard key={discount.id} discount={discount} />
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Discount;
