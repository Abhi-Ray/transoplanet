"use client";
import React, { useState } from 'react';
import { Globe, Users, FileCheck, TrendingUp, Award, Target, Heart, Shield, Zap, CheckCircle, Building2, MapPinned, Clock, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Transoplanet established in Guwahati, India with a vision to bridge language barriers"
    },
    {
      year: "2013",
      title: "10 Languages",
      description: "Expanded our services to cover 10 Indian and Asian languages"
    },
    {
      year: "2016",
      title: "Bangalore Office",
      description: "Opened our second office in Bangalore to serve South India better"
    },
    {
      year: "2019",
      title: "50M+ Words",
      description: "Achieved milestone of translating 50 million words"
    },
    {
      year: "2022",
      title: "Delhi Expansion",
      description: "Established presence in Delhi, expanding to 32+ languages"
    },
    {
      year: "2025",
      title: "100M+ Words",
      description: "Crossed 100 million words translated with 99% client satisfaction"
    }
  ];

  const approach = [
    {
      step: "01",
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Understanding Client Needs",
      description: "We begin by thoroughly understanding your requirements, industry context, target audience, and specific objectives to ensure perfect alignment."
    },
    {
      step: "02",
      icon: <Users className="w-12 h-12" />,
      title: "Expert Translation & Review",
      description: "Native translators with domain expertise work on your content, followed by thorough peer review to ensure accuracy and naturalness."
    },
    {
      step: "03",
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "Our QA team performs comprehensive checks for terminology consistency, cultural appropriateness, and technical accuracy."
    },
    {
      step: "04",
      icon: <Zap className="w-12 h-12" />,
      title: "Timely Delivery",
      description: "We deliver your translations on time, every time, with post-delivery support to ensure your complete satisfaction."
    }
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Accuracy",
      front: "Precision in Every Word",
      back: "We maintain the highest standards of accuracy, ensuring every translation preserves the original meaning and intent while adapting perfectly to the target language."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Confidentiality",
      front: "Your Trust, Our Priority",
      back: "We implement strict confidentiality protocols and NDAs to protect your sensitive information. Your documents are handled with utmost security and privacy."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Timeliness",
      front: "Deadlines We Honor",
      back: "Time is valuable. We respect your deadlines and deliver quality translations on schedule, helping you stay ahead in your global initiatives."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Cultural Sensitivity",
      front: "Beyond Words",
      back: "We understand that translation is more than words—it's about conveying meaning across cultures. Our team ensures cultural appropriateness in every project."
    }
  ];

  const expertise = [
    { language: "Hindi", region: "Indian", percentage: 100 },
    { language: "Bengali", region: "Indian", percentage: 100 },
    { language: "Tamil", region: "Indian", percentage: 100 },
    { language: "Telugu", region: "Indian", percentage: 100 },
    { language: "Marathi", region: "Indian", percentage: 100 },
    { language: "Gujarati", region: "Indian", percentage: 100 },
    { language: "Urdu", region: "South Asian", percentage: 100 },
    { language: "Nepali", region: "South Asian", percentage: 100 },
    { language: "Thai", region: "South-East Asian", percentage: 95 },
    { language: "Vietnamese", region: "South-East Asian", percentage: 95 },
    { language: "Indonesian", region: "South-East Asian", percentage: 95 },
    { language: "Spanish", region: "European", percentage: 100 },
    { language: "French", region: "European", percentage: 100 },
    { language: "German", region: "European", percentage: 100 }
  ];

  const offices = [
    {
      city: "Guwahati",
      state: "Assam, India",
      type: "Headquarters",
      icon: <Building2 className="w-8 h-8" />,
      description: "Our main office and operations center"
    },
    {
      city: "Bangalore",
      state: "Karnataka, India",
      type: "Regional Office",
      icon: <MapPinned className="w-8 h-8" />,
      description: "Serving South India with excellence"
    },
    {
      city: "Delhi",
      state: "India",
      type: "Branch Office",
      icon: <MapPinned className="w-8 h-8" />,
      description: "Supporting North India operations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Transoplanet</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Bridging Languages, Connecting Cultures for Over 15 Years
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, Transoplanet emerged from a simple yet powerful vision: to break down language barriers and enable seamless global communication.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What began as a small translation service in Guwahati has grown into a trusted partner for businesses worldwide, specializing in Indian, South Asian, South-East Asian, and European languages.
                </p>
                <p className="text-lg text-gray-700">
                  Today, with offices across India and a team of expert linguists, we've successfully translated over 100 million words, maintaining an impressive 99% client satisfaction rate.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-4 rounded-full shadow">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">32+</div>
                      <div className="text-gray-600">Languages Supported</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-4 rounded-full shadow">
                      <FileCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">100M+</div>
                      <div className="text-gray-600">Words Translated</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-4 rounded-full shadow">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">99%</div>
                      <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accurate, culturally sensitive, and timely translation services that empower businesses to communicate effectively across borders and cultures.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted translation partner in Asia, known for exceptional quality, innovation, and customer service in language solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">15+ Years of Excellence and Growth</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-purple-300"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">A Proven Process for Excellence</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition border border-blue-100 h-full">
                    <div className="text-6xl font-bold text-blue-200 mb-4">{step.step}</div>
                    <div className="text-blue-600 mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Language Expertise</h2>
            <p className="text-xl text-gray-600">32+ Languages Across Multiple Regions</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((lang, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{lang.language}</h3>
                      <p className="text-sm text-gray-600">{lang.region}</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{lang.percentage}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The Principles That Guide Us</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative h-80 cursor-pointer"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`absolute inset-0 transition-all duration-500 transform ${flippedCard === index ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'}`}>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-white shadow-xl">
                    <div className="mb-6">{value.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-blue-100 text-center">{value.front}</p>
                  </div>
                </div>
                <div className={`absolute inset-0 transition-all duration-500 transform ${flippedCard === index ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'}`}>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center shadow-xl border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700">{value.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving You From Across India</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">{office.icon}</div>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {office.type}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.state}</p>
                <p className="text-gray-700">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your global communication goals
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
