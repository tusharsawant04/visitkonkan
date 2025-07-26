'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Layout from '../../components/layout';

import { useRouter } from 'next/router';
const destinations = [
  {
    id: 1,
    slug: 'ganpti-pule',
    name: 'Ganpatipule Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Beautiful beach with famous Ganpati temple',
    rating: 4.5,
    category: 'Beach',
    details: `🌊 **Ganpatipule Beach** is a tranquil and sacred destination on the Konkan coast. Its white sands and the 400-year-old Swayambhu Ganpati Temple make it both spiritually and visually stunning.

### Highlights:
- Temple located right on the beach
- Water sports and camel rides
- Clean, peaceful, and ideal for family vacations

🚩 Must Visit During: Diwali or Ganesh Chaturthi

📌 Future Additions:
- Local stories
- Travel packages
- Homestay info
- Cultural tours`
  },
  {
    id: 2,
    slug: 'tarkarli',
    name: 'Tarkarli Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Crystal clear waters perfect for water sports',
    rating: 4.8,
    category: 'Beach',
    details: `🌴 **Tarkarli Beach** is one of India's top coastal destinations for **scuba diving** and **snorkeling**, thanks to its transparent blue waters and vibrant marine life.

### Highlights:
- Scuba diving & parasailing
- Houseboat stays
- Nearby Malvan cuisine spots

🧭 Future Features:
- Adventure bundle section
- Certified guides listing
- Local seafood reviews`
  },
  {
    id: 3,
    slug: 'sindhudurg',
    name: 'Sindhudurg Fort',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Historic sea fort with amazing architecture',
    rating: 4.7,
    category: 'Heritage',
    details: `🏰 **Sindhudurg Fort** was built by Chhatrapati Shivaji Maharaj and stands proud amidst the Arabian Sea.

### Highlights:
- Iconic Maratha architecture
- Surrounded by water on all sides
- Close to Malvan beach

🔮 Coming Soon:
- Guided fort tour info
- Historical timelines
- QR code-based AR exploration`
  }
];

const DiscoverMorePage = () => {
 
   const router = useRouter();
  const { discovermore } = router.query;
  console.log(router)
  const destination = destinations.find(dest => dest.slug === discovermore);

  if (!destination) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <h2>Destination not found.</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="discover-more-page py-5">
        <div className="container">
          <h1 className="page-title mb-4">{destination.name}</h1>
          <div className="destination-detail-card">
            <Image
              src={destination.image}
              alt={destination.name}
              width={800}
              height={500}
              className="img-fluid rounded shadow"
            />
            <div className="destination-meta mt-4">
              <p className="text-muted"><strong>Category:</strong> {destination.category}</p>
              <p className="text-warning"><strong>Rating:</strong> ⭐ {destination.rating}</p>
              <div className="destination-details markdown-body mt-3">
                <div dangerouslySetInnerHTML={{ __html: destination.details.replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscoverMorePage;
