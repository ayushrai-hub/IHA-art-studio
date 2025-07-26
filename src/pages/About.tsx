import React from 'react';
import { Palette, Users, Award, MessageCircle, Instagram } from 'lucide-react';
import aboutImage from '../assets/images/hi-mini.jpg';

const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              Hello, I'm <span className="text-terracotta-600">Himani</span>
            </h1>
            <p className="text-sage-600 mb-6">
              I'm Himani Rai Jain, a Chandigarh-based artist who has carved a unique path in the art world with my vibrant studio. My passion lies in blending traditional and modern art forms to empower individuals of all ages with confidence and self-expression through hands-on creative experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://wa.me/918360967932"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/ihabyhimani/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={aboutImage} 
              alt="Himani Rai Jain" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-sage-50 py-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-6">
              Welcome to My Creative Space
            </h2>
            <div className="w-20 h-1 bg-terracotta-500 mx-auto mb-8"></div>
            <p className="text-sage-600 mb-8">
              At IHA by Himani, we believe that everyone has an artist within them. Our workshops and classes are designed to help you discover and nurture your creative potential in a supportive and inspiring environment.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-8 text-center">
          Our Workshops
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-terracotta-600 mb-4">Traditional Art Forms</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-terracotta-500 mr-2">•</span>
                <span>Lippan Art</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta-500 mr-2">•</span>
                <span>Block Printing and other traditional art forms</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-terracotta-600 mb-4">Modern Art Forms</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-terracotta-500 mr-2">•</span>
                <span>Resin Art</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta-500 mr-2">•</span>
                <span>Texture Art</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta-500 mr-2">•</span>
                <span>Acrylic Pouring and other modern art forms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-terracotta-50 py-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Expert Guidance</h3>
              <p className="text-sage-600">Learn from experienced artists with years of teaching expertise.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Small Groups</h3>
              <p className="text-sage-600">Personalized attention in small, focused class sizes.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Quality Materials</h3>
              <p className="text-sage-600">All materials provided with your workshop registration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Experiences */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-12 text-center">
            Unique Experiences Beyond the Studio
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-terracotta-600 mb-4">Cafe Collaborations</h3>
              <p className="text-sage-600">
                Partnering with cafes like Greko and SOCIAL, we elevate coffee outings into creative adventures. Relax, learn, and craft keepsakes to treasure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-terracotta-600 mb-4">Creative Celebrations</h3>
              <p className="text-sage-600">
                Host unforgettable birthday parties where guests create art, enjoy delicious food, and leave with handmade treasures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-terracotta-600 mb-4">Custom Orders</h3>
              <p className="text-sage-600">
                Commission bespoke gifts for milestones or loved ones. Work closely with Himani to bring your vision to life, creating cherished tokens of love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-terracotta-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-6">
              Our Philosophy
            </h2>
            <div className="w-20 h-1 bg-terracotta-500 mx-auto mb-8"></div>
            <p className="text-sage-600 text-lg leading-relaxed">
              For Himani, art is more than a craft—it's a source of calm, joy, and connection. Her studio fosters a culture of creativity with integrity, prioritizing self-development over commercial gain. By nurturing individuality and hands-on learning, Himani's workshops inspire a community where art heals, connects, and transforms lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-800 mb-6">
          Ready to Start Your Creative Journey?
        </h2>
        <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
          Join one of our workshops or contact us to learn more about our programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/workshops" 
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Workshops
          </a>
          <a 
            href="/contact" 
            className="border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
