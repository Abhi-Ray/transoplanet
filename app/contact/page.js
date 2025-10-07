"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone, Mail, MapPin, Send, Clock, MessageSquare, FileText, Calendar, Building2, User, Briefcase, Languages, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    sourceLanguage: '',
    targetLanguage: '',
    message: '',
    deadline: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);


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
      city: "Guwahati",
      state: "Assam",
      country: "India",
      type: "Headquarters",
      icon: "🏢",
      color: "from-blue-500 to-blue-600"
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      type: "Regional Office",
      icon: "🏙️",
      color: "from-purple-500 to-purple-600"
    },
    {
      city: "Delhi",
      state: "",
      country: "India",
      type: "Regional Office",
      icon: "🌆",
      color: "from-green-500 to-green-600"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91-9864072186",
      link: "tel:+919864072186",
      description: "Mon-Sat, 9:00 AM - 6:00 PM IST",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "info@transoplanet.com",
      link: "mailto:info@transoplanet.com",
      description: "We'll respond within 24 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      value: "+91-9864072186",
      link: "https://wa.me/919864072186?text=Hi,%20I'm%20interested%20in%20your%20translation%20services",
      description: "Chat with us instantly",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you for your enquiry! We\'ll get back to you within 24 hours.'
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        sourceLanguage: '',
        targetLanguage: '',
        message: '',
        deadline: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 2000);
  };

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
            Let's Connect
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className={`bg-gradient-to-br ${method.color} rounded-3xl p-8 text-white hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group`}
              >
                <div className="mb-4 group-hover:scale-110 transition">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-2xl font-semibold mb-2 break-all">{method.value}</p>
                <p className="text-sm opacity-90">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <AlertCircle className="w-6 h-6" />
                  )}
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Your company name (optional)"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
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
                      <Languages className="w-5 h-5 text-blue-600" />
                      Source Language
                    </label>
                    <input
                      type="text"
                      id="sourceLanguage"
                      name="sourceLanguage"
                      value={formData.sourceLanguage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="e.g., English"
                    />
                  </div>

                  <div>
                    <label htmlFor="targetLanguage" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Languages className="w-5 h-5 text-blue-600" />
                      Target Language
                    </label>
                    <input
                      type="text"
                      id="targetLanguage"
                      name="targetLanguage"
                      value={formData.targetLanguage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="e.g., Hindi"
                    />
                  </div>
                </div>

                {/* Expected Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Expected Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Project Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Please provide details about your project, word count, file formats, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our locations across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${office.color} rounded-3xl p-8 text-white hover:shadow-2xl transform hover:-translate-y-2 transition duration-300`}
              >
                <div className="text-6xl mb-4">{office.icon}</div>
                <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {office.type}
                </div>
                <h3 className="text-2xl font-bold mb-2">{office.city}</h3>
                {office.state && <p className="text-lg opacity-90 mb-1">{office.state}</p>}
                <p className="text-lg opacity-90">{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Business Hours
              </h2>
              <p className="text-gray-600">We're here to help you during these hours</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="font-semibold text-gray-900">Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span className="text-gray-600">9:00 AM - 2:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span className="text-red-600 font-semibold">Closed</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
              <p className="text-center text-gray-700">
                <strong>Note:</strong> For urgent requests outside business hours, please use our WhatsApp contact and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600">
              Headquarters in Guwahati, with offices in Bangalore and Delhi
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <div className="aspect-video bg-white rounded-2xl shadow-inner flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Map Integration
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Interactive map showing our office locations in Guwahati, Bangalore, and Delhi would appear here in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
