import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container, Section, Typography, Button } from '../components';

// WhatsApp contact number
const WHATSAPP_NUMBER = '918360967932';
const PHONE_NUMBER = '+91 83609 67932';
const EMAIL = 'ihabyhimani@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/ihabyhimani/';
const YOUTUBE_URL = 'https://www.youtube.com/@ihabyhimani8';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message (you can replace this with a toast notification)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-sage-50">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" className="mb-4">
              Get in Touch
            </Typography>
            <Typography variant="subtitle1" className="max-w-2xl mx-auto">
              Have questions or want to book a session? Reach out to us and we'll get back to you as soon as possible.
            </Typography>
          </motion.div>
        </Container>
      </Section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="mb-6">Send Us a Message</Typography>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="text-sm text-sage-600 mb-4">
                * Required fields
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <Typography variant="h2" className="mb-6">Contact Information</Typography>
              <Typography variant="body1" className="mb-6">
                We'd love to hear from you! Join to get latest updates and reach out through any of these channels.
              </Typography>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-600 mr-4">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <Typography variant="subtitle1" className="text-sage-800">Our Studio</Typography>
                  <Typography variant="body2" className="text-sage-600">
                    ihabyhimani Art Studio<br />
                    SCO-22, Gurudwara Road, Sector 8-B<br />
                    Chandigarh-160009, India
                  </Typography>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-600 mr-4">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <Typography variant="subtitle1" className="text-sage-800">Phone</Typography>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-sage-600 hover:text-terracotta-600 transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <div className="mt-2">
                    <div className="inline-block bg-green-500 p-0.5 rounded-md">
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
                      >
                        <span className="mr-1">💬</span> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-600 mr-4">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <Typography variant="subtitle1" className="text-gray-900 font-medium">
                    Instagram Channel
                  </Typography>
                  <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 p-0.5 rounded-md">
                    <a 
                      href={INSTAGRAM_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                      Join to get latest updates
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-600 mr-4">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <Typography variant="subtitle1" className="text-sage-800">Email</Typography>
                  <a href={`mailto:${EMAIL}`} className="text-sage-600 hover:text-terracotta-600 transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-600 mr-4">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <Typography variant="subtitle1" className="text-sage-800">Working Hours</Typography>
                  <Typography variant="body2" className="text-sage-600">
                    Monday - Friday: 11:00 AM - 6:00 PM<br />
                    Sunday: Workshop Day
                  </Typography>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Typography variant="subtitle1" className="text-sage-800 mb-3">Follow Us</Typography>
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/ihabyhimani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sage-600 hover:text-terracotta-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sage-600 hover:text-terracotta-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href={YOUTUBE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sage-600 hover:text-terracotta-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sage-600 hover:text-green-600 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <span className="text-2xl">💬</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <Section className="mt-16">
          <Typography variant="h2" className="text-center mb-8">Find Us on the Map</Typography>
          <a 
            href="https://maps.app.goo.gl/j2FiE1SpgeVajYM59" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition-opacity duration-200"
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.010012408241!2d76.7976291!3d30.7398199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed49fc031591%3A0x778b8cf3ee4e6e12!2sIha%20by%20Himani!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                title="Iha by Himani Art Studio Location"
              ></iframe>
            </div>
          </a>
        </Section>
      </Container>

      {/* FAQ Section */}
      <Section className="bg-sage-50">
        <Container>
          <Typography variant="h2" className="text-center mb-12">Frequently Asked Questions</Typography>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Do I need any prior art experience?</h3>
              <p className="text-sage-600">Not at all! Our workshops are designed for all skill levels, and we provide gentle guidance throughout.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-sage-800 mb-2">What materials do I need to bring?</h3>
              <p className="text-sage-600">All materials are provided. Just bring yourself and an open mind!</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Can I book a private workshop?</h3>
              <p className="text-sage-600">Yes! We offer private sessions for individuals and groups. Contact us for pricing and availability.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-sage-800 mb-2">What is your cancellation policy?</h3>
              <p className="text-sage-600">The ticket amount is non-refundable, and no refunds will be issued for any reason.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-terracotta-600 text-white">
        <Container className="text-center">
          <Typography variant="h2" className="text-white mb-6">Ready to Start Creating?</Typography>
          <Typography variant="body1" className="text-terracotta-100 mb-8 max-w-2xl mx-auto">
            Book a workshop or private session today and begin your artistic journey with us.
          </Typography>
          <Button 
            variant="secondary" 
            size="lg"
            className="mx-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
