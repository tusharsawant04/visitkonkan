'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../backend/lib/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  images?: string[];
   image?: string;  
  createdAt?: any;
}

export default function StoriesSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const q = query(collection(db, 'stories'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Story[];
        setStories(data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  if (loading) {
    return <p className="text-center py-5">Loading stories...</p>;
  }

  return (
    <section
      className="position-relative py-5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="container position-relative z-2">
        <div className="text-center mb-5 text-light">
          <h2 className="fw-bold display-5">Traveler Stories</h2>
          <p className="lead">Real journeys. Real emotions. Shared with love.</p>
        </div>

        {/* Navigation Buttons */}
       

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={swiper => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {stories.map(story => {
            const imageUrl =
              story.coverImage ||
              story.image ||
              story.images?.[0] ||
              '/fallback.jpg';

            return (
              <SwiperSlide key={story.id}>
                <div
                  className="card h-100 border-0 shadow-lg overflow-hidden bg-white"
                  style={{
                    borderRadius: '20px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Story Image */}
                  <div className="position-relative" style={{ height: '220px' }}>
                    <Image
                      src={imageUrl}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover rounded-top-4"
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 text-light p-3"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                      }}
                    >
                      <h5 className="fw-bold mb-0 text-truncate">{story.title}</h5>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <p
                      className="text-muted mb-3"
                      style={{
                        minHeight: '60px',
                        maxHeight: '60px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {story.excerpt || 'No excerpt available.'}
                    </p>

                    <button
                      className="btn btn-primary rounded-pill fw-semibold mt-auto"
                      onClick={() => router.push(`/stories/${story.id}`)}
                    >
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
