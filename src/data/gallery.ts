export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'workshop' | 'event' | 'artwork';
  featured?: boolean;
}

// Import all images at build time
const imageModules = import.meta.glob('/src/assets/images/gallery/*.{jpg,jpeg,png,webp}', { 
  eager: true,
  import: 'default',
  query: '?url'
});

// Helper to get image URL
const getImageUrl = (imageName: string): string => {
  try {
    const imagePath = `/src/assets/images/gallery/${imageName}`;
    const module = imageModules[imagePath];
    if (!module) {
      console.error(`Image not found: ${imageName}`);
      return '';
    }
    return module as string;
  } catch (err) {
    console.error(`Error loading image: ${imageName}`, err);
    return '';
  }
};

// Gallery images data
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: getImageUrl('memory1.jpg'),
    alt: 'The girl gang',
    category: 'workshop',
    featured: true
  },
  {
    id: 2,
    src: getImageUrl('memory2.jpg'),
    alt: 'Moon in hand',
    category: 'workshop'
  },
  {
    id: 3,
    src: getImageUrl('memory3.jpg'),
    alt: 'Photo colab',
    category: 'event'
  },
  {
    id: 4,
    src: getImageUrl('memory4.jpg'),
    alt: 'Mandalas',
    category: 'artwork'
  },
  {
    id: 5,
    src: getImageUrl('memory5.jpg'),
    alt: 'Art exhibition',
    category: 'event',
    featured: true
  },
  {
    id: 6,
    src: getImageUrl('memory6.jpg'),
    alt: 'Creative workshop',
    category: 'workshop'
  },
  {
    id: 7,
    src: getImageUrl('memory7.jpg'),
    alt: 'Art gallery',
    category: 'artwork',
    featured: true
  }
].filter(img => img.src); // Filter out any images that failed to load
