import React from "react";
import PageLayout from "../../components/Client/PageLayout";

const PrivacyPolicy = () => {
  return (
    <>
      <PageLayout>
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Privacy Policy
              </h1>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  1. Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to our Privacy Policy. We are committed to protecting
                  your personal information and being transparent about how we
                  collect, use, and safeguard your data.
                </p>
                <p className="text-gray-600">
                  By using our platform, you agree to the terms of this Privacy
                  Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  2. Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect various types of information:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email
                      address, phone number, shipping address
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Credit card details
                      (processed securely by our payment partners)
                    </li>
                    <li>
                      <strong>Device Information:</strong> IP address, browser
                      type, device type, operating system
                    </li>
                    <li>
                      <strong>Usage Information:</strong> Pages visited, time
                      spent on site, products viewed
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Customer service
                      interactions, feedback, support requests
                    </li>
                  </ul>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  3. How We Collect Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect information through:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Direct registration on our platform</li>
                    <li>Purchases and order processing</li>
                    <li>Customer service interactions</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Third-party analytics services</li>
                  </ul>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  4. Use of Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use your information to:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>
                      Communicate about your purchases, orders, and account
                    </li>
                    <li>Provide customer support</li>
                    <li>Personalize your shopping experience</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Improve our platform and services</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  5. Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We may share your information with:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Payment processors for transaction completion</li>
                    <li>Shipping partners for order delivery</li>
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  We do not sell or rent your personal information to third
                  parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  6. Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement various security measures:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Encryption of sensitive data</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security audits</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>
                      Compliance with industry-standard security protocols
                    </li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  However, no method of transmission over the Internet is 100%
                  secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  7. Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  Contact us to exercise these rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  8. Cookies and Tracking
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies to:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Improve user experience</li>
                    <li>Analyze site traffic</li>
                    <li>Personalize content</li>
                    <li>Deliver targeted advertising</li>
                  </ul>
                </p>
                <p className="text-gray-600">
                  You can manage cookie preferences in your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  9. Children's Privacy
                </h2>
                <p className="text-gray-600">
                  Our platform is not intended for children under 13. We do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  10. Contact Information
                </h2>
                <p className="text-gray-600">
                  For privacy-related inquiries:
                  <br />
                  Email: privacy@yourcompany.com
                  <br />
                  Phone: +1 (555) 123-4567
                  <br />
                  Address: [Your Company Address]
                </p>
              </section>

              <div className="text-center mt-10">
                <p className="text-sm text-gray-500">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  *Privacy policy is subject to change without prior notice
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default PrivacyPolicy;
