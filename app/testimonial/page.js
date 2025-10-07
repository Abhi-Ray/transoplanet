"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone, Mail, MapPin, Star, Quote, Building2, MapPinned, TrendingUp, Users, Award, CheckCircle, MessageSquare } from 'lucide-react';

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');


  const testimonials = [
    {
      id: 1,
      name: "Asian Absolute",
      company: "Asian Absolute",
      location: "Beijing, China",
      region: "Asia",
      rating: 5,
      text: "Willing to work again",
      highlight: "Excellent partnership and reliable service delivery.",
      icon: "🇨🇳"
    },
    {
      id: 2,
      name: "The Loc Master",
      company: "The Loc Master",
      location: "Giza, Egypt",
      region: "Middle East",
      rating: 5,
      text: "Great job and delivery always before deadline. High quality and would love to work again.",
      highlight: "Consistently ahead of schedule with exceptional quality.",
      icon: "🇪🇬"
    },
    {
      id: 3,
      name: "LM Language Service",
      company: "LM Language Service",
      location: "New York, USA",
      region: "North America",
      rating: 5,
      text: "We are willing to work again.",
      highlight: "Professional service that meets our high standards.",
      icon: "🇺🇸"
    },
    {
      id: 4,
      name: "Adapt Language Service",
      company: "Adapt Language Service",
      location: "California, USA",
      region: "North America",
      rating: 5,
      text: "We are willing to work again.",
      highlight: "Reliable partner for our translation needs.",
      icon: "🇺🇸"
    },
    {
      id: 5,
      name: "Simpson Soft UK",
      company: "Simpson Soft UK",
      location: "London, UK",
      region: "Europe",
      rating: 5,
      text: "We are happy with the work and quality and wish Transoplanet all the best and of course would recommend them to other clients.",
      highlight: "Outstanding quality worthy of recommendation.",
      icon: "🇬🇧"
    },
    {
      id: 6,
      name: "Lingo Translation",
      company: "Lingo Translation",
      location: "New Jersey, USA",
      region: "North America",
      rating: 5,
      text: "On time and accurate.",
      highlight: "Punctual and precise in every delivery.",
      icon: "🇺🇸"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "99%", label: "Satisfaction Rate", color: "from-purple-500 to-purple-600" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "95%", label: "Repeat Clients", color: "from-green-500 to-green-600" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "15+", label: "Years Experience", color: "from-orange-500 to-orange-600" }
  ];

  const clientLogos = [
    "Asian Absolute", "The Loc Master", "LM Language", "Adapt Language",
    "Simpson Soft UK", "Lingo Translation"
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.region === filter);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Client Success Stories
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12">
            Trusted by translation companies and businesses worldwide for quality, reliability, and excellence
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition`}>
                <div className="mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Regions
            </button>
            <button
              onClick={() => setFilter('Asia')}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                filter === 'Asia' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Asia
            </button>
            <button
              onClick={() => setFilter('North America')}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                filter === 'North America' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              North America
            </button>
            <button
              onClick={() => setFilter('Europe')}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                filter === 'Europe' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Europe
            </button>
            <button
              onClick={() => setFilter('Middle East')}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                filter === 'Middle East' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Middle East
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="text-6xl text-blue-200 mb-4">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-900 font-medium">
                    {testimonial.highlight}
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{testimonial.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <MapPinned className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of companies worldwide who trust Transoplanet for their translation needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transform hover:scale-105 transition border border-blue-100"
              >
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">{logo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have You Worked With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              We'd love to hear about your experience! Share your feedback and help others discover our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition inline-flex items-center justify-center gap-2"
              >
                Leave a Review
                <Star className="w-5 h-5" />
              </a>
              <a 
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TestimonialsPage;
