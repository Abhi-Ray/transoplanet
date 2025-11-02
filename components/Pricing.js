
"use client";
import React, { useState } from 'react';
import { DollarSign, FileText, Award, Zap, CheckCircle, Star, TrendingUp, ArrowRight, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const PricingPage = () => {
  const [pricingType, setPricingType] = useState('word');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const primaryColor = '#01add5';

  const perWordPricing = [
    {
      category: "Standard Translation",
      languages: "Most Indian & European languages",
      price: "₹5 - ₹8",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Professional native translators",
        "Quality assurance review",
        "Standard turnaround time",
        "Basic formatting included"
      ]
    },
    {
      category: "Technical/Specialized",
      languages: "Medical, Legal, Technical content",
      price: "₹10 - ₹15",
      icon: <Award className="w-8 h-8" />,
      features: [
        "Subject matter experts",
        "Industry-specific terminology",
        "Multi-level review process",
        "Glossary development"
      ]
    },
    {
      category: "Urgent/Rush",
      languages: "24-48 hour delivery",
      price: "₹12 - ₹20",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Priority processing",
        "Fast turnaround",
        "Dedicated team assignment",
        "24/7 project support"
      ]
    }
  ];

  const projectPricing = [
    {
      title: "Starter",
      subtitle: "Small Projects",
      range: "Under 1,000 words",
      price: "₹12,500",
      priceNote: "minimum",
      icon: <FileText className="w-10 h-10" />,
      features: [
        "Professional translation",
        "One round of revisions",
        "5-7 day turnaround",
        "Email support",
        "Basic quality assurance",
        "Common file formats"
      ],
      popular: false
    },
    {
      title: "Professional",
      subtitle: "Medium Projects",
      range: "1,000 - 5,000 words",
      price: "₹40,000",
      priceNote: "starting at",
      icon: <TrendingUp className="w-10 h-10" />,
      features: [
        "Expert translators",
        "Two rounds of revisions",
        "3-5 day turnaround",
        "Priority support",
        "Advanced quality checks",
        "All file formats",
        "Terminology management",
        "Project manager assigned"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      subtitle: "Large Projects",
      range: "5,000+ words",
      price: "Custom",
      priceNote: "contact us",
      icon: <Award className="w-10 h-10" />,
      features: [
        "Dedicated team",
        "Unlimited revisions",
        "Custom turnaround",
        "24/7 dedicated support",
        "Premium QA process",
        "Custom workflows",
        "Translation memory",
        "Volume discounts",
        "API integration available"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How do you calculate translation costs?",
      answer: "We calculate costs based on word count, language pair, complexity, and turnaround time. Standard translations are priced per word, while specialized content may have higher rates due to expert requirements."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer competitive volume discounts for large projects and ongoing translation needs. Contact our sales team for custom pricing based on your requirements."
    },
   {
  question: "What payment methods do you accept?",
  answer: "We accept bank transfers, credit/debit cards, UPI, PayPal, Wire Transfer, and ACH (for US and UK clients). For enterprise clients, we also offer invoice-based payment terms."
}
,
    {
      question: "Are revisions included in the price?",
      answer: "Yes, all packages include at least one round of revisions. Professional and Enterprise packages include additional revision rounds to ensure your complete satisfaction."
    },
    {
      question: "Do you charge extra for urgent projects?",
      answer: "Rush projects require priority allocation of resources and may incur additional charges. The exact pricing depends on the deadline and project scope."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Fair Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Quality translation services at competitive rates with no hidden fees
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>No</span> Hidden Fees
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>Volume</span> Discounts
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>Flexible</span> Plans
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-2">
              <button
                onClick={() => setPricingType('word')}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  pricingType === 'word'
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={pricingType === 'word' ? { backgroundColor: primaryColor } : {}}
              >
                Per Word Pricing
              </button>
              <button
                onClick={() => setPricingType('project')}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  pricingType === 'project'
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={pricingType === 'project' ? { backgroundColor: primaryColor } : {}}
              >
                Project Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Per Word Pricing */}
      {pricingType === 'word' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Per Word Pricing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible pricing based on your content type and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {perWordPricing.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#e5e7eb' }}>
                  <div className="p-6">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.category}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.languages}</p>
                    <div className="text-3xl font-bold mb-6" style={{ color: primaryColor }}>
                      {item.price}
                      <span className="text-sm text-gray-600 font-normal">/word</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/contact"
                      className="block w-full text-center text-white py-2 px-4 rounded-lg hover:opacity-90 transition text-sm font-medium"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Packages */}
      {pricingType === 'project' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect package for your translation needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projectPricing.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-xl border-2 hover:shadow-lg transition-all duration-300 ${
                    pkg.popular ? 'shadow-lg' : ''
                  }`}
                  style={{ borderColor: pkg.popular ? primaryColor : '#e5e7eb' }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1" style={{ backgroundColor: primaryColor }}>
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                    >
                      {pkg.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{pkg.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4 font-medium">{pkg.range}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {pkg.price}
                      </div>
                      <p className="text-gray-600 text-sm">{pkg.priceNote}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="/contact"
                      className="block w-full text-center text-white py-2 px-4 rounded-lg hover:opacity-90 transition text-sm font-medium"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {pkg.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border-2 transition-all duration-300 cursor-pointer"
                style={{ borderColor: expandedFaq === index ? primaryColor : '#e5e7eb' }}
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: primaryColor }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" />
                    )}
                  </div>
                  
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: primaryColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition" style={{ color: primaryColor }}>
              Get Custom Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold transition  hover:opacity-90" style={{ color: 'white' }}>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
