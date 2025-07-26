export interface Testimonial {
  name: string;
  workshop: string;
  quote: string;
  image: string;
}

// Function to generate a random avatar based on name
export const getAvatarUrl = (name: string) => {
  const colors = ['FFD1DC', 'FFECB3', 'B5EAD7', 'C7CEEA', 'E2F0CB', 'FFDAC1', 'B5EAD7', 'C7CEEA', 'E2F0CB', 'FFDAC1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${randomColor}&color=fff&size=128`;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Tejas Godara',
    workshop: 'Sunday Workshop',
    quote: 'It was my first time attending a workshop. And it was one of the best experience of my life. Himani mam and everyone present there were very helpful and friendly. Th refreshments were very tasty😋. I will always look forward to attend more workshops by her 🫶',
    image: getAvatarUrl('Tejas Godara')
  },
  {
    name: 'Loveleen singh',
    workshop: 'Sunday Workshop',
    quote: 'Himani is a Sweetheart, so talented and so humble.. in two weeks I have attended two workshops with her and I must say, it was so much fun.. she explains you each and every detail, and even give you the history of the art form one is doing.. I highly recommend her.. please guys go and attend her workshops and I am sure you will love it.. you will also enjoy the snacks they serve, they are yummy!!! Lots of love N blessings to you Himani..',
    image: getAvatarUrl('Loveleen singh')
  },
  {
    name: 'Shubhanshi Mani Tripathi',
    workshop: 'art and craft workshop',
    quote: "I recently attended an art and craft workshop by Iha by Himani, and it was a truly enriching experience. The workshop was well-organized, with a warm and welcoming atmosphere that allowed everyone to express their creativity freely. Himani's expertise and patient guidance made even complex techniques feel approachable. I left feeling inspired and equipped with new skills and a unique piece of art to cherish. Highly recommended for anyone looking to explore their artistic side!",
    image: getAvatarUrl('Shubhanshi Mani Tripathi')
  },
  {
    name: 'Rakhi Tiwari',
    workshop: 'Sunday Workshop',
    quote: 'I had the pleasure of viewing artwork by Himani Mam, and it left me truly captivated. Her attention to detail and the emotions she conveys through her pieces are remarkable. Each stroke feels intentional, drawing you into the depth of the subject matter. The colors she chooses evoke a sense of calm, while also inspiring thought and reflection. It is evident that she puts her heart into her work, and that passion shines through in every piece. I would highly recommend her art to anyone looking for something both beautiful and meaningful.❤️',
    image: getAvatarUrl('Rakhi Tiwari')
  },
  {
    name: 'Anshika Gupta',
    workshop: 'Resin Art Workshop',
    quote: 'She is very awesome! ❤️ I really loved to be a part of her resin art workshop! Totally worth it!! ❤️ Very supportive and so down to earth with amazing skills ! I am waiting for her next workshop! You must visit her studio once ! And contact her for your artistic requirements and also for gaining knowledge from her ! ❤️❤️👍',
    image: getAvatarUrl('Anshika Gupta')
  },
  {
    name: 'Kriti Negi',
    workshop: 'Sunday Workshop',
    quote: 'I really had a great time attending the workshop.. Both of the host were very helpful in helping us in making our art perfect. Would really recommend their workshop .Looking forward for more 🩵',
    image: getAvatarUrl('Kriti Negi')
  }
];