import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto">
            Have questions about our workshops? Want to book a private session? 
            Or just want to chat about art and creativity? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-sage-800 mb-6">
              Send us a Message
            </h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="workshop-inquiry">Workshop Inquiry</option>
                      <option value="private-session">Private Session</option>
                      <option value="corporate-workshop">Corporate Workshop</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your inquiry, questions, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta-600 text-white py-4 px-6 rounded-xl hover:bg-terracotta-700 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sage-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-sage-50 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-sage-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                    <p className="text-sage-600">hello@iha-art.com</p>
                    <p className="text-sm text-sage-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Phone</h3>
                    <p className="text-sage-600">+91 98765 43210</p>
                    <p className="text-sm text-sage-500">Mon-Fri, 10 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Studio Locations</h3>
                    <p className="text-sage-600">Art Studio, Koramangala, Bangalore</p>
                    <p className="text-sage-600">Clay Studio, Whitefield, Bangalore</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Social Media</h3>
                    <p className="text-sage-600">@iha_art</p>
                    <p className="text-sm text-sage-500">Follow for daily inspiration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-sage-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    Do I need any prior art experience?
                  </h3>
                  <p className="text-sage-600 text-sm">
                    Not at all! Our workshops are designed for all skill levels, and we provide gentle guidance throughout.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    What materials do I need to bring?
                  </h3>
                  <p className="text-sage-600 text-sm">
                    All materials are provided. Just bring yourself and an open mind!
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    Can I book a private workshop?
                  </h3>
                  <p className="text-sage-600 text-sm">
                    Yes! We offer private sessions for individuals and groups. Contact us for pricing and availability.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    What is your cancellation policy?
                  </h3>
                  <p className="text-sage-600 text-sm">
                    You can cancel up to 48 hours before the workshop for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-terracotta-600 to-terracotta-700 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-terracotta-100 mb-8">
            Don't wait to begin your artistic journey. Browse our upcoming workshops and find your perfect creative experience.
          </p>
          <a
            href="/workshops"
            className="inline-block bg-white text-terracotta-600 px-8 py-4 rounded-xl hover:bg-cream-50 transition-colors duration-200 font-medium"
          >
            View Workshops
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;