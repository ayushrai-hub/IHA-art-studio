import workshop1 from '../assets/images/workshop1.jpg';
import Workshop2 from '../assets/images/Workshop2.jpg';
import Workshop3 from '../assets/images/Workshop3.jpg';

export interface Workshop {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  location: string;
  image: string;
  materials: string[];
  agenda: string[];
  maxParticipants: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  pastImages?: string[];
}

export const workshops: Workshop[] = [
  {
    id: '1',
    title: 'Watercolor Dreams',
    shortDescription: 'Learn the beautiful art of watercolor painting while creating dreamy landscapes.',
    fullDescription: 'Dive into the enchanting world of watercolor painting in this comprehensive workshop. You\'ll learn fundamental techniques including wet-on-wet, wet-on-dry, and color blending while creating stunning landscape pieces. Perfect for beginners who want to explore this magical medium.',
    date: 'March 15, 2024',
    time: '10:00 AM',
    duration: '3 hours',
    price: 1200,
    location: 'Art Studio, Koramangala',
    image: workshop1,
    materials: [
      'Watercolor paints (provided)',
      'Watercolor paper',
      'Various brushes',
      'Water containers',
      'Paper towels',
      'Masking tape'
    ],
    agenda: [
      'Introduction to watercolor basics (30 mins)',
      'Color mixing and palette preparation (45 mins)',
      'Technique practice: wet-on-wet (45 mins)',
      'Break (15 mins)',
      'Creating your landscape piece (45 mins)',
      'Finishing touches and sharing (15 mins)'
    ],
    maxParticipants: 12,
    difficulty: 'Beginner',
    category: 'Painting',
    pastImages: [
      workshop1,
      Workshop2
    ]
  },
  {
    id: '2',
    title: 'Pottery & Mindfulness',
    shortDescription: 'Center yourself while creating beautiful ceramic pieces with your hands.',
    fullDescription: 'Combine the therapeutic benefits of pottery with mindfulness practices in this unique workshop. You\'ll learn basic hand-building techniques while focusing on the present moment, creating both beautiful pottery and inner peace.',
    date: 'March 22, 2024',
    time: '2:00 PM',
    duration: '4 hours',
    price: 1500,
    location: 'Clay Studio, Whitefield',
    image: Workshop2,
    materials: [
      'Clay (provided)',
      'Pottery tools',
      'Aprons',
      'Water bowls',
      'Glazes for decoration'
    ],
    agenda: [
      'Mindfulness meditation (15 mins)',
      'Introduction to clay and centering (30 mins)',
      'Basic hand-building techniques (60 mins)',
      'Creating your first piece (90 mins)',
      'Break with herbal tea (15 mins)',
      'Glazing and finishing (30 mins)',
      'Reflection and sharing circle (15 mins)'
    ],
    maxParticipants: 8,
    difficulty: 'Beginner',
    category: 'Pottery',
    pastImages: [
      Workshop2,
      Workshop3
    ]
  },
  {
    id: '3',
    title: 'Abstract Expression',
    shortDescription: 'Free your creative spirit through bold colors and expressive brushstrokes.',
    fullDescription: 'Let go of perfectionism and embrace the freedom of abstract art. This workshop focuses on emotional expression through color, texture, and movement. You\'ll create powerful abstract pieces while exploring your inner artist.',
    date: 'March 29, 2024',
    time: '11:00 AM',
    duration: '3.5 hours',
    price: 1350,
    location: 'Art Studio, Koramangala',
    image: Workshop3,
    materials: [
      'Acrylic paints',
      'Large canvases',
      'Various brushes',
      'Palette knives',
      'Texture mediums',
      'Protective clothing'
    ],
    agenda: [
      'Introduction to abstract art (20 mins)',
      'Color theory and emotion (40 mins)',
      'Technique exploration (60 mins)',
      'Break (15 mins)',
      'Creating your abstract masterpiece (75 mins)',
      'Group discussion and sharing (15 mins)'
    ],
    maxParticipants: 10,
    difficulty: 'Intermediate',
    category: 'Painting',
    pastImages: [
      Workshop3,
      workshop1
    ]
  },
  {
    id: '4',
    title: 'Nature Journaling',
    shortDescription: 'Combine art and nature observation in beautiful handmade journals.',
    fullDescription: 'Create your own nature journal while learning botanical illustration techniques. This outdoor workshop combines art with nature appreciation, teaching you to observe and capture the beauty of the natural world.',
    date: 'April 5, 2024',
    time: '9:00 AM',
    duration: '4 hours',
    price: 1100,
    location: 'Cubbon Park Pavilion',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: [
      'Handmade journals',
      'Watercolor pencils',
      'Fine liner pens',
      'Portable water containers',
      'Field guides',
      'Magnifying glasses'
    ],
    agenda: [
      'Journal binding basics (45 mins)',
      'Nature observation techniques (30 mins)',
      'Botanical sketching workshop (60 mins)',
      'Break in nature (15 mins)',
      'Field work and journaling (90 mins)',
      'Sharing and reflection (15 mins)'
    ],
    maxParticipants: 15,
    difficulty: 'Beginner',
    category: 'Mixed Media'
  },
  {
    id: '5',
    title: 'Mandala Meditation Art',
    shortDescription: 'Create intricate mandalas while exploring meditation and sacred geometry.',
    fullDescription: 'Discover the meditative power of mandala creation in this peaceful workshop. You\'ll learn about sacred geometry while creating intricate, symmetrical designs that promote mindfulness and inner calm.',
    date: 'April 12, 2024',
    time: '3:00 PM',
    duration: '3 hours',
    price: 1000,
    location: 'Meditation Center, Indiranagar',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: [
      'Premium drawing paper',
      'Compass and rulers',
      'Fine-tip markers',
      'Colored pencils',
      'Gold leaf pens',
      'Templates'
    ],
    agenda: [
      'Meditation and centering (20 mins)',
      'Introduction to mandala symbolism (25 mins)',
      'Sacred geometry basics (35 mins)',
      'Creating your mandala (90 mins)',
      'Final meditation with completed work (10 mins)'
    ],
    maxParticipants: 12,
    difficulty: 'Beginner',
    category: 'Drawing'
  },
  {
    id: '6',
    title: 'Textile Art Workshop',
    shortDescription: 'Explore fiber arts through weaving, embroidery, and fabric manipulation.',
    fullDescription: 'Dive into the rich world of textile arts in this hands-on workshop. You\'ll learn basic weaving techniques, decorative embroidery, and fabric manipulation to create unique textile art pieces.',
    date: 'April 19, 2024',
    time: '1:00 PM',
    duration: '4.5 hours',
    price: 1600,
    location: 'Craft Studio, Jayanagar',
    image: 'https://images.pexels.com/photos/1793349/pexels-photo-1793349.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: [
      'Small looms',
      'Various yarns and threads',
      'Embroidery hoops',
      'Needles and scissors',
      'Fabric pieces',
      'Beads and embellishments'
    ],
    agenda: [
      'Introduction to textile arts (30 mins)',
      'Basic weaving techniques (75 mins)',
      'Break (15 mins)',
      'Embroidery and embellishment (90 mins)',
      'Finishing techniques (45 mins)',
      'Showcase and discussion (15 mins)'
    ],
    maxParticipants: 8,
    difficulty: 'Intermediate',
    category: 'Textile'
  }
];