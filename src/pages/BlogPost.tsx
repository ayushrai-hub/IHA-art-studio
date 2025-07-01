import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const post = {
    title: 'Art as Therapy: Healing Through Creative Expression',
    content: `
      <p>Art has been a source of healing and expression for humanity throughout history. In recent years, the therapeutic benefits of creative expression have gained recognition in both clinical and personal development settings. Whether you're dealing with stress, trauma, or simply seeking a deeper connection with yourself, art can be a powerful ally on your journey.</p>

      <h2>The Science Behind Art Therapy</h2>
      <p>Research has shown that engaging in creative activities stimulates the release of dopamine, the neurotransmitter associated with pleasure and reward. This natural high can help combat depression and anxiety while promoting a sense of accomplishment and self-worth.</p>

      <p>When we create art, we activate different parts of our brain simultaneously, fostering new neural connections and enhancing cognitive flexibility. This process, known as neuroplasticity, can help us develop new ways of thinking and responding to challenges.</p>

      <h2>Finding Your Creative Voice</h2>
      <p>One of the most beautiful aspects of art therapy is that there's no "right" way to do it. Your creative expression is uniquely yours, and the process is often more important than the final product. Here are some ways to begin:</p>

      <ul>
        <li><strong>Start small:</strong> Begin with simple exercises like doodling or sketching your emotions</li>
        <li><strong>Use color intuitively:</strong> Choose colors that speak to you without overthinking</li>
        <li><strong>Embrace imperfection:</strong> Remember that art is about expression, not perfection</li>
        <li><strong>Create regularly:</strong> Even 10 minutes of creative time can make a difference</li>
      </ul>

      <h2>The Community Aspect</h2>
      <p>While art can be deeply personal, sharing your creative journey with others can amplify its healing effects. In our workshops, we've witnessed incredible transformations when people feel safe to express themselves authentically and receive support from fellow artists.</p>

      <p>The act of creating alongside others breaks down barriers and fosters genuine connections. When we share our vulnerabilities through art, we often discover that we're not alone in our struggles, and this realization can be profoundly healing.</p>

      <h2>Getting Started Today</h2>
      <p>You don't need expensive supplies or formal training to begin your healing journey with art. A simple notebook and a pencil can be enough to start. The key is to approach your practice with openness, curiosity, and self-compassion.</p>

      <p>Remember, every mark you make is a step toward understanding yourself better. Trust the process, honor your unique expression, and allow art to be the bridge between your inner world and the healing you seek.</p>
    `,
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'March 10, 2024',
    category: 'Art & Healing',
    readTime: '5 min read',
    author: 'IHA'
  };

  return (
    <div className="py-12">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sage-500 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div>
              {post.readTime}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-sage-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-sage-200">
          <div className="bg-sage-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-sage-800 mb-4">
              Ready to Start Your Creative Journey?
            </h3>
            <p className="text-sage-600 mb-6">
              Join our upcoming workshops and discover the healing power of art in a supportive community.
            </p>
            <Link
              to="/workshops"
              className="inline-block bg-terracotta-600 text-white px-8 py-3 rounded-xl hover:bg-terracotta-700 transition-colors duration-200 font-medium"
            >
              View Workshops
            </Link>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-sage-800 text-center mb-12">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '5 Essential Watercolor Techniques for Beginners',
              image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
              slug: 'watercolor-techniques'
            },
            {
              title: 'The Meditation of Clay: Finding Peace Through Pottery',
              image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
              slug: 'mindful-pottery'
            },
            {
              title: 'Starting Your Nature Journal: A Complete Guide',
              image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
              slug: 'nature-journaling-guide'
            }
          ].map((relatedPost, index) => (
            <Link
              key={index}
              to={`/blog/${relatedPost.slug}`}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <img 
                src={relatedPost.image} 
                alt={relatedPost.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-sage-800 line-clamp-2">
                  {relatedPost.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;