import React from "react";
import PageLayout from "../../components/Client/PageLayout";

const ReturnExchange = () => {
  return (
    <>
    <PageLayout>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Return & Exchange Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Return Eligibility</h2>
            <p className="text-gray-600 mb-4">
              We want you to be completely satisfied with your purchase. You may return or exchange items under the following conditions:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Items must be returned within 30 days of the original purchase date</li>
                <li>Products must be unused, unworn, and in the same condition you received them</li>
                <li>Items must be in their original packaging with all tags attached</li>
                <li>Proof of purchase (receipt or order confirmation) is required</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4">
              The following items cannot be returned or exchanged:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Intimate or hygiene-related items</li>
                <li>Customized or personalized products</li>
                <li>Gift cards</li>
                <li>Opened or used beauty and personal care products</li>
                <li>Downloadable software products</li>
                <li>Perishable items</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Return Process</h2>
            <p className="text-gray-600 mb-4">
              To initiate a return, please follow these steps:
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>Log into your account and select the item you wish to return</li>
                <li>Choose the reason for return from the provided options</li>
                <li>Print the pre-paid return shipping label (if applicable)</li>
                <li>Package the item securely in its original packaging</li>
                <li>Drop off the package at the designated shipping carrier</li>
              </ol>
            </p>
            <p className="text-gray-600">
              Returns without a return authorization may be rejected or incur additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Refund Methods</h2>
            <p className="text-gray-600 mb-4">
              Refunds will be processed as follows:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Original payment method will be refunded for the item cost</li>
                <li>Shipping costs are non-refundable unless the item is defective</li>
                <li>Refunds are typically processed within 5-7 business days</li>
                <li>Refund amount will be the original purchase price minus any shipping costs</li>
              </ul>
            </p>
            <p className="text-gray-600">
              Please allow additional time for the refund to appear on your statement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Exchange Policy</h2>
            <p className="text-gray-600 mb-4">
              If you prefer an exchange:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Exchanges can be made within 30 days of original purchase</li>
                <li>Item must be in original condition with all tags attached</li>
                <li>Size or color exchanges are subject to availability</li>
                <li>Any price difference will be charged or refunded</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Damaged or Defective Items</h2>
            <p className="text-gray-600 mb-4">
              In case of damaged or defective items:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Report the issue within 7 days of receiving the item</li>
                <li>Provide clear photos of the damage or defect</li>
                <li>We will replace the item or provide a full refund</li>
                <li>Shipping for replacement is free for verified defective items</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. International Returns</h2>
            <p className="text-gray-600 mb-4">
              International customers should note:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Return shipping costs are the responsibility of the customer</li>
                <li>Customs duties and import taxes are non-refundable</li>
                <li>Additional restrictions may apply based on local regulations</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">8. Contact Information</h2>
            <p className="text-gray-600">
              For returns and exchanges, please contact:
              <br />
              Email: returns@yourcompany.com
              <br />
              Phone: +1 (555) 987-6543
              <br />
              Support Hours: Monday-Friday, 9 AM - 5 PM (Your Local Time)
            </p>
          </section>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              *Return and exchange policies are subject to change without prior notice
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </PageLayout>
    </>
  );
};

export default ReturnExchange;