import React from 'react';
import { Star } from 'lucide-react';
import { testimonials, getAvatarUrl } from '../data/testimonials';

const Reviews = () => {
  // Add avatar URLs to all testimonials
  const extendedTestimonials = [
    ...testimonials,
    {
      name: 'Diksha Kumar',
      workshop: 'Workshop',
      quote: 'Watching your journey over the past two years has been truly inspiring. Your passion for art and craft is contagious, and your workshops are a testament to your talent and dedication.',
      image: getAvatarUrl('Diksha Kumar')
    },
    {
      name: 'Jhanvi S',
      workshop: 'Workshop',
      quote: 'She is a fabulous artist and had lots of fun attending her workshop! Have been following her work for past 2 years and her work has been just wonderful',
      image: getAvatarUrl('Jhanvi S')
    },
    {
      name: 'Upasana Sharma',
      workshop: 'Workshop',
      quote: 'It was soo nice working with you mam..the way you deal with your costumers is remarkably good. Would love to be a part of your further workshops as well',
      image: getAvatarUrl('Upasana Sharma')
    },
    {
      name: 'Kriti Sharma',
      workshop: 'Workshop',
      quote: 'We amazing craft dedicated peaceful experience, A must try with ur girl gang',
      image: getAvatarUrl('Kriti Sharma')
    },
    {
      name: 'Kunjal Mittal',
      workshop: 'Workshop',
      quote: 'It was my first time attending a workshop. And it was one of the best experience. Himani di and everyone present there were very helpful and friendly. I will always look forward to attend more workshops with her 🫶',
      image: getAvatarUrl('Kunjal Mittal')
    },
    {
      name: 'Prabhat Jain',
      workshop: 'Workshop',
      quote: 'Very detailed workshop right from the basics. Thank you for an amazing learning and experience.',
      image: getAvatarUrl('Prabhat Jain')
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 mb-4">
            What Our Artists Say
          </h1>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto">
            Read stories from our wonderful community of creative souls who have discovered healing, 
            joy, and connection through art workshops.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">500+</div>
            <div className="text-sage-600">Happy Artists</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">5.0</div>
            <div className="text-sage-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">50+</div>
            <div className="text-sage-600">Workshops Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">95%</div>
            <div className="text-sage-600">Recommended</div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-sage-700 italic leading-relaxed mb-8">
              "I recently attended an art and craft workshop by Iha by Himani, and it was a truly enriching experience. The workshop was well-organized, with a warm and welcoming atmosphere that allowed everyone to express their creativity freely. Himani’s expertise and patient guidance made even complex techniques feel approachable. I left feeling inspired and equipped with new skills and a unique piece of art to cherish. Highly recommended for anyone looking to explore their artistic side!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src={getAvatarUrl('Shubhanshi Mani Tripathi')} 
                alt="Featured reviewer"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-sage-800">Shubhanshi Mani Tripathi</div>
                <div className="text-sage-500">Art and Craft Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-sage-600 leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-sage-800">{testimonial.name}</div>
                  <div className="text-sm text-sage-500">{testimonial.workshop}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              Happy Moments
            </h2>
            <p className="text-lg text-sage-600">
              Capturing joy, creativity, and connection in our workshops
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1793349/pexels-photo-1793349.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
            ].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={image} 
                  alt={`Workshop moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-terracotta-600 to-terracotta-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Join Our Creative Community
          </h2>
          <p className="text-xl text-terracotta-100 mb-8">
            Experience the joy of creating, healing, and connecting with fellow artists. 
            Your creative journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/workshops"
              className="inline-flex items-center px-8 py-4 bg-white text-terracotta-600 font-medium rounded-xl hover:bg-cream-50 transition-all duration-200 transform hover:scale-105"
            >
              Browse Workshops
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-terracotta-600 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;