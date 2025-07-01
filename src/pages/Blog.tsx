import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    slug: 'art-as-therapy',
    title: 'Art as Therapy: Healing Through Creative Expression',
    excerpt: 'Discover how art can be a powerful tool for emotional healing and personal growth. Learn about the therapeutic benefits of creative expression.',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 10, 2024',
    category: 'Art & Healing',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'watercolor-techniques',
    title: '5 Essential Watercolor Techniques for Beginners',
    excerpt: 'Master the basics of watercolor painting with these fundamental techniques that every beginner should know.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 5, 2024',
    category: 'DIY Tutorials',
    readTime: '7 min read'
  },
  {
    id: '3',
    slug: 'community-spotlight',
    title: 'Community Spotlight: Sarah\'s Journey with Abstract Art',
    excerpt: 'Meet Sarah, one of our wonderful community members, and learn how abstract art helped her find confidence and self-expression.',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 28, 2024',
    category: 'Community Stories',
    readTime: '4 min read'
  },
  {
    id: '4',
    slug: 'mindful-pottery',
    title: 'The Meditation of Clay: Finding Peace Through Pottery',
    excerpt: 'Explore the meditative aspects of working with clay and how pottery can become a form of moving meditation.',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 25, 2024',
    category: 'Art & Healing',
    readTime: '6 min read'
  },
  {
    id: '5',
    slug: 'nature-journaling-guide',
    title: 'Starting Your Nature Journal: A Complete Guide',
    excerpt: 'Learn how to create and maintain a beautiful nature journal that combines art, observation, and mindfulness.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 20, 2024',
    category: 'DIY Tutorials',
    readTime: '8 min read'
  },
  {
    id: '6',
    slug: 'color-psychology',
    title: 'The Psychology of Color in Art and Life',
    excerpt: 'Understand how different colors affect our emotions and learn to use color psychology in your artistic practice.',
    image: 'https://images.pexels.com/photos/1793349/pexels-photo-1793349.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 15, 2024',
    category: 'Art & Healing',
    readTime: '6 min read'
  }
];

const categories = ['All', 'DIY Tutorials', 'Art & Healing', 'Community Stories'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 mb-4">
            Art & Life Blog
          </h1>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto">
            Inspiration, tutorials, and stories from our creative community. Explore the intersection of art, healing, and personal growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-terracotta-600 text-white'
                  : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img 
                src={filteredPosts[0].image} 
                alt={filteredPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-terracotta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                  {filteredPosts[0].category}
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
                {filteredPosts[0].title}
              </h2>
              <p className="text-sage-600 leading-relaxed mb-6">
                {filteredPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-sage-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {filteredPosts[0].date}
                </div>
                <div className="text-sm text-sage-500">
                  {filteredPosts[0].readTime}
                </div>
              </div>
              <Link
                to={`/blog/${filteredPosts[0].slug}`}
                className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors duration-200"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-sage-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sage-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-sage-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="text-sm text-sage-500">
                    {post.readTime}
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
            Stay Inspired
          </h2>
          <p className="text-lg text-sage-600 mb-8">
            Subscribe to our newsletter for the latest art tips, workshop announcements, and creative inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-terracotta-600 text-white font-medium rounded-lg hover:bg-terracotta-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;