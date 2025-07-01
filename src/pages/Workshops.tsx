import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { workshops } from '../data/workshops';
import workshop1 from '../assets/images/workshop1.jpg';
import Workshop2 from '../assets/images/Workshop2.jpg';
import Workshop3 from '../assets/images/Workshop3.jpg';

const Workshops = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const categories = ['All', ...Array.from(new Set(workshops.map(w => w.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredWorkshops = workshops.filter(workshop => {
    const categoryMatch = filterCategory === 'All' || workshop.category === filterCategory;
    const difficultyMatch = filterDifficulty === 'All' || workshop.difficulty === filterDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 mb-4">
            Art Workshops
          </h1>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto">
            Join our creative community and explore various art forms in a supportive, inspiring environment. 
            Each workshop is designed to nurture your artistic spirit and connect you with fellow creatives.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-sage-600" />
            <span className="text-sage-700 font-medium">Filter by:</span>
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-sage-300 rounded-lg bg-white text-sage-700 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="px-4 py-2 border border-sage-300 rounded-lg bg-white text-sage-700 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'All' ? 'All Levels' : difficulty}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => (
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-sage-700">
                  {workshop.difficulty}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                    {workshop.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-sage-800 mb-2">
                  {workshop.title}
                </h3>
                
                <p className="text-sage-600 mb-4 leading-relaxed">
                  {workshop.shortDescription}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-sage-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center text-sm text-sage-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {workshop.time} • {workshop.duration}
                  </div>
                  <div className="flex items-center text-sm text-sage-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center text-sm text-sage-500">
                    <Users className="h-4 w-4 mr-2" />
                    Max {workshop.maxParticipants} participants
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

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-sage-400 mb-4">
              <Users className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-sage-600 mb-2">No workshops found</h3>
            <p className="text-sage-500">Try adjusting your filters to see more workshops.</p>
          </div>
        )}
      </section>

      {/* Past Workshops Preview */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              Past Workshop Highlights
            </h2>
            <p className="text-lg text-sage-600">
              Beautiful moments and creations from our wonderful community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[workshop1, Workshop2, Workshop3].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={image} 
                  alt={`Past workshop ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;