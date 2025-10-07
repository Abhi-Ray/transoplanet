"use client";
import React, { useState } from 'react';
import { Globe, Menu, X, Phone, Mail, MapPin, MessageSquare, CheckCircle, Star, TrendingUp, Zap, Award, FileText, Clock, Shield, DollarSign, Calculator, ChevronDown, ChevronUp, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

const PricingPage = () => {
  const [pricingType, setPricingType] = useState('word');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [calculatorData, setCalculatorData] = useState({
    wordCount: '',
    serviceType: 'standard',
    urgency: 'normal'
  });

  const perWordPricing = [
    {
      category: "Standard Translation",
      languages: "Most Indian & European languages",
      price: "$0.06 - $0.10",
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
      price: "$0.12 - $0.18",
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
      price: "$0.15 - $0.25",
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
      price: "$150",
      priceNote: "minimum",
      icon: <FileText className="w-12 h-12" />,
      gradient: "from-blue-500 to-cyan-500",
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
      price: "$500",
      priceNote: "starting at",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500",
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
      icon: <Award className="w-12 h-12" />,
      gradient: "from-orange-500 to-red-500",
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

  const addOnServices = [
    {
      service: "Proofreading",
      price: "$0.02 - $0.04 per word",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      service: "Desktop Publishing",
      price: "$30 - $80 per page",
      icon: <FileText className="w-6 h-6" />
    },
    {
      service: "Notarization/Certification",
      price: "$25 - $50 per document",
      icon: <Award className="w-6 h-6" />
    },
    {
      service: "Rush Delivery (24 hours)",
      price: "+50% of base price",
      icon: <Clock className="w-6 h-6" />
    },
    {
      service: "Transcription",
      price: "$1.50 - $3.00 per minute",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      service: "Subtitle Creation",
      price: "$8 - $15 per minute",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const volumeDiscounts = [
    { volume: "10,000 - 50,000 words", discount: "10% off" },
    { volume: "50,000 - 100,000 words", discount: "15% off" },
    { volume: "100,000+ words", discount: "20% off" },
    { volume: "Long-term contracts", discount: "Up to 25% off" }
  ];

  const faqs = [
    {
      question: "How is the final price calculated?",
      answer: "The final price is calculated based on word count, language pair, complexity, turnaround time, and any additional services required. We provide detailed quotes after reviewing your specific requirements."
    },
    {
      question: "Do you offer discounts for large projects?",
      answer: "Yes! We offer volume discounts starting at 10% for projects over 10,000 words, scaling up to 25% for long-term contracts and very large projects."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit cards, PayPal, and for enterprise clients, we can arrange invoicing with NET 30 payment terms."
    },
    {
      question: "Is there a minimum order requirement?",
      answer: "Yes, our minimum project fee is $150 to ensure quality service delivery for all clients."
    },
    {
      question: "How quickly can you deliver translations?",
      answer: "Standard turnaround is 2,000-3,000 words per day. Rush services are available for urgent projects with 24-48 hour delivery at premium rates."
    },
    {
      question: "Are revisions included in the price?",
      answer: "Yes, all projects include at least one round of revisions. Professional and Enterprise packages include additional revision rounds."
    },
    {
      question: "Do you charge extra for specialized content?",
      answer: "Technical, medical, and legal translations typically cost 20-50% more than standard translation due to the specialized expertise required."
    },
    {
      question: "Can I get a sample translation before committing?",
      answer: "Yes, we can provide a sample translation of up to 200 words for qualified projects to demonstrate our quality."
    }
  ];

  const calculateEstimate = () => {
    const wordCount = parseInt(calculatorData.wordCount) || 0;
    if (wordCount === 0) return 0;

    let baseRate = 0.08; // standard rate

    if (calculatorData.serviceType === 'technical') {
      baseRate = 0.15;
    } else if (calculatorData.serviceType === 'urgent') {
      baseRate = 0.20;
    }

    let total = wordCount * baseRate;

    // Apply volume discount
    if (wordCount >= 10000 && wordCount < 50000) {
      total *= 0.90;
    } else if (wordCount >= 50000 && wordCount < 100000) {
      total *= 0.85;
    } else if (wordCount >= 100000) {
      total *= 0.80;
    }

    return total.toFixed(2);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6">
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Fair Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Quality translation services at competitive rates with no hidden fees
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">No</span> Hidden Fees
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">Volume</span> Discounts
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">Flexible</span> Plans
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
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Per Word Pricing
              </button>
              <button
                onClick={() => setPricingType('project')}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  pricingType === 'project'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Project Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Per Word Pricing */}
      {pricingType === 'word' && (
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Per Word Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible pricing based on your content type and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {perWordPricing.map((item, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition border border-gray-100">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.category}</h3>
                  <p className="text-gray-600 mb-4">{item.languages}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-6">
                    {item.price}
                    <span className="text-lg text-gray-600 font-normal">/word</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition">
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Packages */}
      {pricingType === 'project' && (
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Packages</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect package for your translation needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projectPricing.map((pkg, index) => (
                <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition border-2 ${pkg.popular ? 'border-purple-500' : 'border-gray-100'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-gradient-to-r ${pkg.gradient} text-white p-6 rounded-2xl mb-6 -mt-4`}>
                    <div className="flex justify-between items-start mb-4">
                      {pkg.icon}
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-lg opacity-90">{pkg.subtitle}</p>
                  </div>

                  <p className="text-gray-600 text-center mb-4 font-medium">{pkg.range}</p>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-gray-600">{pkg.priceNote}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2`}>
                    {pkg.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add-on Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your translation project with additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-blue-600 bg-white p-3 rounded-xl shadow-md">
                    {addon.icon}
                  </div>
                  <DollarSign className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.service}</h3>
                <p className="text-blue-600 font-bold text-lg">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Volume Discounts</h2>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              Save more with larger projects and long-term partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {volumeDiscounts.map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition text-center">
                <div className="text-6xl font-bold text-white mb-4">{item.discount}</div>
                <p className="text-white text-lg font-medium">{item.volume}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white text-xl mb-6">
              Need a custom quote for your specific requirements?
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition">
              Contact Us for Enterprise Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Price Calculator</h2>
              <p className="text-xl text-gray-600">
                Get an instant estimate for your translation project
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Word Count</label>
                  <input
                    type="number"
                    placeholder="Enter word count"
                    value={calculatorData.wordCount}
                    onChange={(e) => setCalculatorData({...calculatorData, wordCount: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Service Type</label>
                  <select
                    value={calculatorData.serviceType}
                    onChange={(e) => setCalculatorData({...calculatorData, serviceType: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  >
                    <option value="standard">Standard Translation</option>
                    <option value="technical">Technical/Specialized</option>
                    <option value="urgent">Urgent/Rush</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <p className="text-gray-600 mb-2">Estimated Cost</p>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  ${calculateEstimate()}
                </div>
                <p className="text-gray-600 mb-6">
                  This is an estimate. Final pricing may vary based on specific requirements.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
                  Request Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us today for a detailed quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
              Get Custom Quote <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
