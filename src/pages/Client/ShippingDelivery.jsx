import React from "react";
import PageLayout from "../../components/Client/PageLayout";

const ShippingDelivery = () => {
  return (
    <>
      <PageLayout>
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Shipping & Delivery
              </h1>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  1. Shipping Coverage
                </h2>
                <p className="text-gray-600 mb-4">
                  We provide shipping services to the following regions:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>All major cities and metropolitan areas</li>
                    <li>Selected suburban and rural locations</li>
                    <li>
                      International shipping available for select countries
                    </li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  Please note that some remote areas may have limited or
                  extended delivery times.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  2. Shipping Methods
                </h2>
                <div className="text-gray-600">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Standard Shipping</h3>
                    <p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Delivery time: 3-5 business days</li>
                        <li>Free for orders above $50</li>
                        <li>Flat rate of $5 for orders below $50</li>
                      </ul>
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Express Shipping</h3>
                    <p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Delivery time: 1-2 business days</li>
                        <li>Additional charge of $15</li>
                        <li>Guaranteed faster delivery</li>
                      </ul>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">
                      International Shipping
                    </h3>
                    <p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Delivery time: 7-14 business days</li>
                        <li>Shipping rates vary by destination</li>
                        <li>Customs and import taxes may apply</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  3. Order Processing
                </h2>
                <p className="text-gray-600 mb-4">
                  Our order processing timeline:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Orders are processed within 1-2 business days</li>
                    <li>
                      You will receive a confirmation email with tracking
                      information
                    </li>
                    <li>Processing does not include shipping time</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  Weekend and holiday orders will be processed on the next
                  business day.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  4. Tracking Your Order
                </h2>
                <p className="text-gray-600 mb-4">
                  You can track your order through:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Order tracking link in your confirmation email</li>
                    <li>Our website's order tracking page</li>
                    <li>Customer support contact</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  Tracking information becomes available once the package is
                  shipped.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  5. Shipping Restrictions
                </h2>
                <p className="text-gray-600 mb-4">
                  We cannot ship:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Hazardous or flammable materials</li>
                    <li>Perishable goods without special packaging</li>
                    <li>Items prohibited by local or international law</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  Orders containing restricted items will be cancelled without
                  refund.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  6. Damaged or Lost Packages
                </h2>
                <p className="text-gray-600 mb-4">
                  If your package is:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Damaged upon arrival, contact us within 48 hours with
                      photos
                    </li>
                    <li>
                      Lost in transit, we will investigate and resend or refund
                    </li>
                    <li>Requires proof of damage for replacement</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  We work closely with our shipping partners to ensure safe
                  delivery.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  7. Contact Information
                </h2>
                <p className="text-gray-600">
                  For shipping inquiries, please contact:
                  <br />
                  Email: shipping@yourcompany.com
                  <br />
                  Phone: +1 (555) 123-4567
                  <br />
                  Support Hours: Monday-Friday, 9 AM - 5 PM (Your Local Time)
                </p>
              </section>

              <div className="text-center mt-10">
                <p className="text-sm text-gray-500">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  *Shipping policies are subject to change without prior notice
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ShippingDelivery;
