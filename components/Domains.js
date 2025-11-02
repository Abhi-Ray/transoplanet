"use client";
import React, { useState } from 'react';
import { Heart, Scale, Wallet, Laptop, Megaphone, BookOpen, Wrench, Landmark, Gamepad2, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Language from './Language';

const DomainsPage = () => {
  const [expandedDomain, setExpandedDomain] = useState(null);

  const primaryColor = '#01add5';

  const domains = [
    {
      id: 1,
      icon: <Heart className="w-12 h-12" />,
      title: "Medical & Healthcare Translation",
      tagline: "Where precision meets compassion",
      description: "Medical translation requires absolute accuracy and deep subject matter expertise. From patient documentation to clinical trials, we ensure medical information is translated with precision that can impact lives.",
      examples: [
        "Medical reports and patient records",
        "Clinical trial documentation",
        "Pharmaceutical product information",
        "Healthcare policy documents",
        "Medical device manuals",
        "Patient education materials",
        "Insurance claims and documentation"
      ]
    },
    {
      id: 2,
      icon: <Scale className="w-12 h-12" />,
      title: "Legal Translation",
      tagline: "Every clause counts",
      description: "Legal documents demand meticulous attention to terminology and legal structures across jurisdictions. Our legal experts ensure compliance while maintaining the exact intent of the original document.",
      examples: [
        "Contracts and agreements",
        "Court documents and litigation",
        "Patent applications",
        "Intellectual property documentation",
        "Terms and conditions",
        "Legal contracts and NDAs",
        "Regulatory compliance documents"
      ]
    },
    {
      id: 3,
      icon: <Wallet className="w-12 h-12" />,
      title: "Financial & Insurance Translation",
      tagline: "Translating trust and transparency",
      description: "Financial accuracy is critical. We translate complex financial documents, insurance policies, and regulatory filings while maintaining compliance with international financial standards.",
      examples: [
        "Financial statements and reports",
        "Insurance policies and claims",
        "Banking documentation",
        "Investment prospectuses",
        "Tax documentation",
        "Financial compliance reports",
        "Audit reports and financial audits"
      ]
    },
    {
      id: 4,
      icon: <Laptop className="w-12 h-12" />,
      title: "IT & Software Localization",
      tagline: "Turning apps into global experiences",
      description: "Software localization goes beyond translation. We ensure your applications, user interfaces, and documentation resonate with users in every market while maintaining functionality and user experience.",
      examples: [
        "Software user interfaces",
        "Application documentation",
        "API documentation",
        "Help files and support content",
        "Mobile app localization",
        "Web platform localization",
        "Technical specifications and guides"
      ]
    },
    {
      id: 5,
      icon: <Megaphone className="w-12 h-12" />,
      title: "Marketing & Transcreation",
      tagline: "Adapting ideas, not just words",
      description: "Marketing messages need cultural resonance, not just linguistic accuracy. Our transcreation services adapt your brand voice, slogans, and campaigns to connect emotionally with target audiences.",
      examples: [
        "Marketing campaigns and advertisements",
        "Brand messaging and slogans",
        "Social media content",
        "Website copy and landing pages",
        "Email marketing campaigns",
        "Product descriptions",
        "Brand guidelines and tone"
      ]
    },
    {
      id: 6,
      icon: <BookOpen className="w-12 h-12" />,
      title: "E-learning & Educational Content",
      tagline: "Learning made local",
      description: "Educational content must be culturally appropriate and pedagogically sound. We localize courses, training materials, and educational platforms to engage learners worldwide.",
      examples: [
        "Online course content",
        "Training manuals and materials",
        "Textbooks and educational resources",
        "E-learning platform content",
        "Assessment and exam materials",
        "Educational videos and scripts",
        "Student guides and handbooks"
      ]
    },
    {
      id: 7,
      icon: <Wrench className="w-12 h-12" />,
      title: "Technical Translation",
      tagline: "Manuals that speak every language",
      description: "Complex technical documentation requires specialized expertise. We translate manuals, specifications, and technical guides ensuring clarity and accuracy for global technical audiences.",
      examples: [
        "Technical manuals and guides",
        "Engineering documentation",
        "Product specifications",
        "Installation and maintenance guides",
        "Technical support documentation",
        "CAD documentation",
        "Safety data sheets"
      ]
    },
    {
      id: 8,
      icon: <Landmark className="w-12 h-12" />,
      title: "Government & Public Policy",
      tagline: "Making governance multilingual",
      description: "Government and public policy translation ensures citizens and stakeholders understand official information. We handle sensitive government documents with the utmost accuracy and confidentiality.",
      examples: [
        "Government policies and regulations",
        "Public announcements and notices",
        "Citizenship and visa documentation",
        "Public health guidelines",
        "Government reports and statistics",
        "Constitutional and legal documents",
        "Administrative and procedural documents"
      ]
    },
    {
      id: 9,
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Game Localization",
      tagline: "When play meets culture",
      description: "Gaming localization includes dialogue, narratives, UI elements, and cultural adaptation. We ensure games feel native to each market while preserving the original creative vision.",
      examples: [
        "Game dialogue and narrative",
        "In-game UI and menus",
        "Game documentation and guides",
        "Promotional materials for games",
        "In-game text and signage",
        "Story scripts and cinematics",
        "Community and forum content"
      ]
    }
  ];

  const toggleDomain = (id) => {
    setExpandedDomain(expandedDomain === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Industry Domains
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized translation expertise across 9 major industry domains
          </p>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {domains.map((domain) => (
              <div 
                key={domain.id} 
                className="bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden"
                style={{ borderColor: expandedDomain === domain.id ? primaryColor : '#e5e7eb' }}
              >
                <button
                  onClick={() => toggleDomain(domain.id)}
                  className="w-full p-6 flex items-start space-x-4 hover:bg-gray-50 transition cursor-pointer text-left"
                >
                  <div 
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                  >
                    {domain.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1" style={{ color: primaryColor }} >
                      {domain.tagline}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{domain.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{domain.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-gray-400 text-2xl">
                    {expandedDomain === domain.id ? '−' : '+'}
                  </div>
                </button>
                
                {expandedDomain === domain.id && (
                  <div className="px-6 pb-6 border-t-2 bg-gray-50" style={{ borderColor: '#e5e7eb' }}>
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed mb-6">{domain.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Document Types We Handle:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {domain.examples.map((example, idx) => (
                            <div key={idx} className="flex items-start space-x-3 bg-white p-3 rounded-lg border border-gray-200">
                              <div 
                                className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" 
                                style={{ backgroundColor: primaryColor }}
                              ></div>
                              <span className="text-gray-700">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/contact"
                      className="inline-block text-white py-3 px-8 rounded-lg hover:opacity-90 transition font-medium"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Discuss Your Project
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

          <Language/>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: primaryColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Domain-Specific Translation?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Our specialized teams are ready to help. Tell us about your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition" style={{ color: primaryColor }}>
              Get a Free Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold transition">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomainsPage;