import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Card, { CardBody } from '../components/common/Card';

const TermsAndConditionsPage = () => {
  const tableOfContents = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'links-to-other-sites', title: 'Links To Other Web Sites' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes' },
    { id: 'contact-us', title: 'Contact Us' }
  ];

  return (
    <div className="pt-16">
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', link: '/' },
              { name: 'Terms and Conditions', link: '/terms-and-conditions' }
            ]}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-blue-100 mb-4">Please read these terms carefully before using our services.</p>
          <p className="text-lg text-blue-200">Last updated: September 30, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-gray-50 border-gray-200">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="mb-8">
                <CardBody className="p-8">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <h2 id="acceptance" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Acceptance of Terms</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-blue-600 text-2xl mr-3">📋</span>
                        <div>
                          <p className="font-semibold text-blue-800 mb-2">Agreement to Terms</p>
                          <p className="mb-3">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://www.anjotraders.com website (the "Service") operated by ANJO Traders ("us", "we", or "our").</p>
                          <p className="mb-3">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                          <p className="text-blue-700 font-medium">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="intellectual-property" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Intellectual Property</h2>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-purple-600 text-2xl mr-3">©️</span>
                        <div>
                          <p className="font-semibold text-purple-800 mb-2">Ownership Rights</p>
                          <p>The Service and its original content, features and functionality are and will remain the exclusive property of ANJO Traders and its licensors. This includes all trademarks, copyrights, and intellectual property rights associated with our platform.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="links-to-other-sites" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Links To Other Web Sites</h2>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-orange-600 text-2xl mr-3">🔗</span>
                        <div>
                          <p className="font-semibold text-orange-800 mb-2">External Links Policy</p>
                          <p className="mb-3">Our Service may contain links to third-party web sites or services that are not owned or controlled by ANJO Traders.</p>
                          <p className="mb-3">ANJO Traders has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that ANJO Traders shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                          <p className="text-orange-700 font-medium">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="termination" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Termination</h2>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-red-600 text-2xl mr-3">🚫</span>
                        <div>
                          <p className="font-semibold text-red-800 mb-2">Account Termination</p>
                          <p className="mb-3">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                          <p className="text-red-700">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="disclaimer" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Disclaimer</h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-yellow-600 text-2xl mr-3">⚠️</span>
                        <div>
                          <p className="font-semibold text-yellow-800 mb-2">Service Disclaimer</p>
                          <p className="text-yellow-700">Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="governing-law" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Governing Law</h2>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-green-600 text-2xl mr-3">⚖️</span>
                        <div>
                          <p className="font-semibold text-green-800 mb-2">Legal Jurisdiction</p>
                          <p className="mb-3">These Terms shall be governed and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.</p>
                          <p className="text-green-700 text-sm">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="changes" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Changes</h2>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start">
                        <span className="text-indigo-600 text-2xl mr-3">📝</span>
                        <div>
                          <p className="font-semibold text-indigo-800 mb-2">Terms Updates</p>
                          <p className="mb-3">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                          <p className="text-indigo-700 font-medium">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="contact-us" className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us:</p>
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
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
