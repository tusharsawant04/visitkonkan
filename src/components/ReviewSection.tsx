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
        const snapshot = await getDocs(q);
        setStories(snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as Story[]);
      } catch (e) {
        console.error(e);
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
    <section className="stories-section">
      <div className="stories-overlay" />

      <div className="container position-relative z-2">
        <div className="text-center mb-5 text-light">
          <h2 className="fw-bold display-5">Traveler Stories</h2>
          <p className="lead opacity-75">
            Real journeys. Real emotions. Shared with love.
          </p>
        </div>

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
              story.coverImage || story.image || story.images?.[0] || '/fallback.jpg';

            return (
              <SwiperSlide key={story.id}>
                <article className="story-card">
                  <div className="story-img-wrapper">
                    <Image
                      src={imageUrl}
                      alt={story.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="story-img"
                    />
                    <div className="story-title-overlay">
                      <h5 className="fw-semibold text-truncate">{story.title}</h5>
                    </div>
                  </div>

                  <div className="story-body">
                    <p className="story-excerpt">
                      {story.excerpt || 'No excerpt available.'}
                    </p>

                    <button
                      className="btn story-btn"
                      onClick={() => router.push(`/stories/${story.id}`)}
                    >
                      Read Story →
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .stories-section {
          position: relative;
          padding: 5rem 0;
          background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')
            center/cover fixed;
        }

        .stories-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .story-card {
          height: 100%;
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .story-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.35);
        }

        .story-img-wrapper {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .story-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .story-card:hover .story-img {
          transform: scale(1.1);
        }

        .story-title-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
          color: #fff;
        }

        .story-body {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          height: calc(100% - 230px);
        }

        .story-excerpt {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .story-btn {
          margin-top: auto;
          align-self: flex-start;
          border-radius: 999px;
          padding: 10px 22px;
          font-weight: 600;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          color: #fff;
          border: none;
          transition: transform 0.3s ease;
        }

        .story-btn:hover {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
