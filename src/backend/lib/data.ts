// This is a dummy database. In a real app, you'd get this from a CMS or database.

export interface Listing {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  description: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  listings: Listing[];
}

const db: Category[] = [
  {
    slug: 'historical-forts',
    title: 'Historical Forts',
    description: 'Discover the legacy of Maratha warriors. These forts are not just stone structures but living chronicles of history.',
    heroImage: '/images/forts-hero.jpg',
    listings: [
      { id: 'f1', name: 'Raigad Fort', location: 'Raigad District', rating: 4.8, reviewCount: 1245, tags: ['Trekking', 'Cable Car', 'History'], description: 'A majestic hill fort that served as the capital of the Maratha Empire.', image: '/images/forts.jpg', coordinates: { lat: 18.234, lng: 73.447 } },
      { id: 'f2', name: 'Sindhudurg Fort', location: 'Malvan', rating: 4.9, reviewCount: 987, tags: ['Coastal', 'History', 'Boating'], description: 'A sea fort surrounded by the Arabian Sea, a testament to naval architecture.', image: '/images/fort-sindhudurg.jpg', coordinates: { lat: 16.046, lng: 73.461 } },
      { id: 'f3', name: 'Pratapgad Fort', location: 'Satara District', rating: 4.7, reviewCount: 850, tags: ['Mountain', 'Trekking', 'Views'], description: 'Famous for the Battle of Pratapgad, offering stunning valley views.', image: '/images/fort-pratapgad.jpg', coordinates: { lat: 17.925, lng: 73.593 } },
    ]
  },
  {
    slug: 'beaches',
    title: 'Serene Beaches',
    description: 'From bustling shores to hidden coves, find your perfect spot in the sun.',
    heroImage: '/images/beach-hero.jpg',
    listings: [
      { id: 'b1', name: 'Tarkarli Beach', location: 'Malvan', rating: 4.7, reviewCount: 1100, tags: ['Scuba Diving', 'Clear Water', 'Dolphin'], description: 'Famous for its crystal clear water and a hub for water sports.', image: '/images/beach.jpg', coordinates: { lat: 16.02, lng: 73.48 } },
      { id: 'b2', name: 'Ganpatipule Beach', location: 'Ratnagiri', rating: 4.6, reviewCount: 1500, tags: ['Pilgrimage', 'Family', 'Clean'], description: 'A pristine beach known for its temple of Lord Ganesha right on the shore.', image: '/images/beach-ganpatipule.jpg', coordinates: { lat: 17.14, lng: 73.26 } },
    ]
  }
];

export const getCategoryDataBySlug = (slug: string): Category | undefined => {
  return db.find(category => category.slug === slug);
};