
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Card, { CardBody } from '../components/common/Card';

const PrivacyPolicyPage = () => {

  return (
    <div className="pt-20">
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', link: '/' },
              { name: 'Privacy Policy', link: '/privacy-policy' }
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-lg text-blue-200">
            Last updated: September 30, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
              <Card className="mb-8">
                <CardBody className="p-8">
                  <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              ANJO Traders ("us", "we", or "our") operates the https://www.anjotraders.com website (the "Service").
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

                    <h2 id="information-collection" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Information Collection and Use</h2>
                    <p>
                      We collect several different types of information for various purposes to provide and improve our Service to you.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Types of Data Collected</h3>
                    <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Personal Data</h4>
                    <p>
                      While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                    </p>
                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Email address</li>
                        <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>First name and last name</li>
                        <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Phone number</li>
                        <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Address, State, Province, ZIP/Postal code, City</li>
                        <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Cookies and Usage Data</li>
                      </ul>
                    </div>

                    <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Usage Data</h4>
                    <p>
                      We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>

                    <h2 id="use-of-data" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Use of Data</h2>
                    <p>ANJO Traders uses the collected data for various purposes:</p>
                    <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To provide and maintain our Service</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To notify you about changes to our Service</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To provide customer support</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To gather analysis or valuable information so that we can improve our Service</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To monitor the usage of our Service</li>
                        <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>To detect, prevent and address technical issues</li>
                      </ul>
                    </div>

                    <h2 id="disclosure-of-data" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Disclosure of Data</h2>
                    <p>
                      We may disclose your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <div className="bg-gray-50 border-l-4 border-orange-500 p-4 my-4">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-orange-600 mr-2">⚖️</span>To comply with a legal obligation</li>
                        <li className="flex items-center"><span className="text-orange-600 mr-2">🛡️</span>To protect and defend the rights or property of ANJO Traders</li>
                        <li className="flex items-center"><span className="text-orange-600 mr-2">🔍</span>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li className="flex items-center"><span className="text-orange-600 mr-2">👥</span>To protect the personal safety of users of the Service or the public</li>
                        <li className="flex items-center"><span className="text-orange-600 mr-2">⚖️</span>To protect against legal liability</li>
                      </ul>
                    </div>

                    <h2 id="security-of-data" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Security of Data</h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                      <div className="flex items-start">
                        <span className="text-yellow-600 text-2xl mr-3">🔒</span>
                        <div>
                          <p className="font-semibold text-yellow-800 mb-2">Data Security Commitment</p>
                          <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2 id="service-providers" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Service Providers</h2>
                    <p>
                      We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>

                    <h2 id="links-to-other-sites" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Links to Other Sites</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                      <div className="flex items-start">
                        <span className="text-blue-600 text-2xl mr-3">🔗</span>
                        <div>
                          <p className="font-semibold text-blue-800 mb-2">External Links Notice</p>
                          <p>
                            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2 id="changes-to-policy" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Changes to This Privacy Policy</h2>
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>

                    <h2 id="contact-us" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-blue-600 mr-2">📧</span>
                          <strong>Email:</strong>
                          <a href="mailto:info@anjotraders.com" className="text-blue-600 hover:underline ml-1">info@anjotraders.com</a>
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-600 mr-2">🌐</span>
                          <strong>Website:</strong>
                          <a href="/contact" className="text-blue-600 hover:underline ml-1">https://www.anjotraders.com/contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
