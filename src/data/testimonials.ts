export interface Testimonial {
  name: string;
  workshop: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    workshop: 'Watercolor Dreams',
    quote: 'This workshop was exactly what my soul needed. The peaceful atmosphere and gentle guidance helped me create something beautiful while finding inner calm.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Rahul Mehta',
    workshop: 'Pottery & Mindfulness',
    quote: 'I never thought pottery could be so therapeutic. The combination of mindfulness and creating with my hands was transformative.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Ananya Gupta',
    workshop: 'Abstract Expression',
    quote: 'I discovered a side of myself I never knew existed. The freedom to express without judgment was liberating and healing.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Vikram Singh',
    workshop: 'Nature Journaling',
    quote: 'This workshop reconnected me with nature and gave me a new way to appreciate the beauty around us. Highly recommend!',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Meera Patel',
    workshop: 'Mandala Meditation Art',
    quote: 'The meditative aspect of creating mandalas helped me find peace in a chaotic time. The instructor created such a safe, nurturing space.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Arjun Kumar',
    workshop: 'Textile Art Workshop',
    quote: 'As someone who works in tech, this hands-on creative experience was exactly what I needed. The sense of accomplishment was incredible.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];