import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Palette } from 'lucide-react';
import { workshops } from '../data/workshops';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const featuredWorkshops = workshops.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-50 to-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-sage-800 leading-tight">
                  Discover Your
                  <span className="text-terracotta-600 block">Creative Soul</span>
                </h1>
                <p className="text-lg text-sage-600 leading-relaxed max-w-xl">
                  Join our inspiring DIY art workshops where creativity meets community. Express yourself, learn new techniques, and create beautiful art in a warm, welcoming environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/workshops"
                  className="inline-flex items-center px-8 py-4 bg-terracotta-600 text-white font-medium rounded-xl hover:bg-terracotta-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Workshops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-sage-300 text-sage-700 font-medium rounded-xl hover:bg-sage-50 transition-all duration-200"
                >
                  My Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Artist creating beautiful artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta-200 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-sage-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Artist portrait"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-800">
                Art as Healing, Community as Growth
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                I believe that art has the power to heal, inspire, and connect us. Through my workshops, I create spaces where people can explore their creativity, find inner peace, and build meaningful connections with fellow art lovers.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div className="text-2xl font-bold text-sage-800">500+</div>
                  <div className="text-sm text-sage-600">Happy Artists</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-6 w-6 text-sage-600" />
                  </div>
                  <div className="text-2xl font-bold text-sage-800">50+</div>
                  <div className="text-sm text-sage-600">Workshops</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Palette className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div className="text-2xl font-bold text-sage-800">3</div>
                  <div className="text-sm text-sage-600">Years</div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors duration-200"
              >
                Read my full story
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-800 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Join our creative community and discover new artistic techniques in these hands-on workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-terracotta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{workshop.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sage-600 mb-4 leading-relaxed">
                    {workshop.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-sage-500">
                      {workshop.date} • {workshop.time}
                    </div>
                    <div className="text-sm text-sage-500">
                      {workshop.duration}
                    </div>
                  </div>
                  <Link
                    to={`/workshop/${workshop.id}`}
                    className="w-full bg-terracotta-600 text-white py-3 px-4 rounded-xl hover:bg-terracotta-700 transition-colors duration-200 text-center block font-medium"
                  >
                    Learn More & Register
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/workshops"
              className="inline-flex items-center px-8 py-4 border-2 border-terracotta-600 text-terracotta-600 font-medium rounded-xl hover:bg-terracotta-600 hover:text-white transition-all duration-200"
            >
              View All Workshops
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-800 mb-4">
              What Our Artists Say
            </h2>
            <p className="text-lg text-sage-600">
              Stories from our wonderful community of creative souls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-sage-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-sage-800">{testimonial.name}</h4>
                    <p className="text-sm text-sage-500">{testimonial.workshop}</p>
                  </div>
                </div>
                <p className="text-sage-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-terracotta-600 to-terracotta-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-terracotta-100 mb-8">
            Join our community of artists and discover the joy of creating something beautiful with your own hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/workshops"
              className="inline-flex items-center px-8 py-4 bg-white text-terracotta-600 font-medium rounded-xl hover:bg-cream-50 transition-all duration-200 transform hover:scale-105"
            >
              Browse Workshops
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-terracotta-600 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;