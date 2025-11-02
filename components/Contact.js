"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, Building2, Briefcase, Languages, Calendar, FileText, MessageSquare, Clock } from 'lucide-react';
import Link from 'next/link';
const ContactPage = () => {
  const [selectedService, setSelectedService] = useState('');

  const primaryColor = '#01add5';

  const services = [
    "Human Translation",
    "MTPE (Machine Translation Post-Editing)",
    "Transcription Services",
    "Subtitles & Captions",
    "Localization Testing",
    "Quality Assurance",
    "Medical & Healthcare Translation",
    "Legal & Government Translation",
    "Apps & Games Localization",
    "Press Release Translation",
    "Other"
  ];

  const offices = [
    {
      city: "VIP Road, Guwahati, Assam",
      type: "Headquarters",
      icon: "🏢"
    },
    {
      city: "Varthur Road, Bengaluru",
      type: "Additional Office",
      icon: "🏙️"
    },
    {
      city: "Noida, Sector 41, Delhi NCR",
      type: "Additional Office",
      icon: "🌆"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91-9864072186",
      link: "tel:+919864072186",
      description: "Mon-Sat, 9:00 AM - 6:00 PM IST"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "info@transoplanet.com",
      link: "mailto:info@transoplanet.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      value: "+91-9864072186",
      link: "https://wa.me/919864072186?text=Hi,%20I'm%20interested%20in%20your%20translation%20services",
      description: "Chat with us instantly"
    }
  ];

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
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <Clock className="inline w-5 h-5 mr-2" style={{ color: primaryColor }} />
              <span className="font-semibold text-gray-800">24 Hour Response</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <Phone className="inline w-5 h-5 mr-2" style={{ color: primaryColor }} />
              <span className="font-semibold text-gray-800">Direct Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to reach out to us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="bg-white rounded-xl border-2 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-6"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold mb-2 break-all" style={{ color: primaryColor }}>{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-2" style={{ borderColor: '#e5e7eb' }}>
              <form action="https://formsubmit.co/binod@transoplanet.com" method="POST" className="space-y-6">
                {/* Hidden fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Transoplanet" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5" style={{ color: primaryColor }} />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                    style={{ focusBorderColor: primaryColor }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5" style={{ color: primaryColor }} />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                    placeholder="Your company name (optional)"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" style={{ color: primaryColor }} />
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Language Pair */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sourceLanguage" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Languages className="w-5 h-5" style={{ color: primaryColor }} />
                      Source Language
                    </label>
                    <input
                      type="text"
                      id="sourceLanguage"
                      name="sourceLanguage"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                      placeholder="e.g., English"
                    />
                  </div>

                  <div>
                    <label htmlFor="targetLanguage" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Languages className="w-5 h-5" style={{ color: primaryColor }} />
                      Target Language
                    </label>
                    <input
                      type="text"
                      id="targetLanguage"
                      name="targetLanguage"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                      placeholder="e.g., Hindi"
                    />
                  </div>
                </div>

                {/* Expected Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" style={{ color: primaryColor }} />
                    Expected Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5" style={{ color: primaryColor }} />
                    Project Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-2 focus:outline-none transition resize-none"
                    placeholder="Please provide details about your project, word count, file formats, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transform hover:scale-[1.02] transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  Send Enquiry
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at any of our locations across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-8"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="text-6xl mb-4">{office.icon}</div>
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                >
                  {office.type}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{office.city}</h3>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is standing by to help you with your translation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919864072186" 
              className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition inline-flex items-center justify-center gap-2"
              style={{ color: primaryColor }}
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a 
              href="https://wa.me/919864072186?text=Hi,%20I'm%20interested%20in%20your%20translation%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold  transition inline-flex items-center justify-center gap-2"
              style={{ hoverColor: primaryColor }}
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
