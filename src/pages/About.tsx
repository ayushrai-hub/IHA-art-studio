import React from 'react';
import { Heart, Palette, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 leading-tight">
              Hello, I'm the heart behind
              <span className="text-terracotta-600 block">IHA</span>
            </h1>
            <p className="text-lg text-sage-600 leading-relaxed">
              Welcome to my world of colors, creativity, and community. I'm passionate about helping people discover their artistic potential and find healing through creative expression.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Artist in her studio"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sage-800 text-center mb-12">
            My Artistic Journey
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-sage-600 leading-relaxed space-y-6">
              <p>
                My love affair with art began in childhood, but it wasn't until my twenties that I discovered its true healing power. During a particularly challenging time in my life, I found solace in painting and creating with my hands. Art became my refuge, my therapy, and eventually, my calling.
              </p>
              <p>
                What started as personal healing evolved into something much bigger. I realized that the same therapeutic benefits I experienced could be shared with others. In 2021, I began hosting small art gatherings in my living room, inviting friends to create alongside me. The magic that happened in those intimate sessions was undeniable - people were not just creating art, they were finding pieces of themselves.
              </p>
              <p>
                Today, IHA has grown into a thriving community of over 500 beautiful souls who have joined me on this creative journey. Each workshop is designed not just to teach techniques, but to create a safe space where people can express themselves freely, connect with others, and discover the artist within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Why */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              Why I Do What I Do
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Art is more than just colors on canvas - it's a language of the soul, a path to healing, and a bridge to connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-terracotta-100 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800">Healing</h3>
              <p className="text-sage-600">
                Art provides a therapeutic outlet for emotions, stress, and life's challenges.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800">Expression</h3>
              <p className="text-sage-600">
                Everyone has a unique creative voice waiting to be discovered and expressed.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-terracotta-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800">Community</h3>
              <p className="text-sage-600">
                Creating together builds meaningful connections and lifelong friendships.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800">Growth</h3>
              <p className="text-sage-600">
                Each creative session is an opportunity for personal growth and self-discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              My Personal Work
            </h2>
            <p className="text-lg text-sage-600">
              A glimpse into my artistic journey and the pieces that inspire my teaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1793349/pexels-photo-1793349.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-to-r from-terracotta-600 to-terracotta-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">
            My Philosophy
          </h2>
          <blockquote className="text-xl text-terracotta-100 leading-relaxed italic">
            "Every person is an artist in their own unique way. My role is simply to provide the safe space, gentle guidance, and warm encouragement needed for that inner artist to bloom. When we create together, we heal together, and when we heal together, we grow together."
          </blockquote>
          <div className="mt-8 text-white font-medium">
            - With love and creativity
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;