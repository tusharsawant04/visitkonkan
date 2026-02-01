import React, { useState, useEffect } from 'react';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
}

const mockStories: Story[] = [
  {
    id: '1',
    title: 'Sunrise at Tarkarli Beach',
    excerpt: 'As the first light touched the turquoise waves, Tarkarli felt like a whispered promise of peace. The sea breeze carried stories of fishermen, salt, and endless horizons.',
    coverImage: 'https://images.unsplash.com/photo-1601050690597-9b2c55b41d6b?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Sindhudurg Fort by the Sea',
    excerpt: 'Standing on centuries-old stones while waves crashed below, I felt history breathing through the walls. A fort that still guards the soul of Konkan.',
    coverImage: 'https://images.unsplash.com/photo-1584467735871-b63a3c8f8b6f?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Hidden Waterfall of Devkund',
    excerpt: 'After trekking through dense forest trails, the sound of roaring water led to a hidden paradise. Cold mist, green cliffs, and pure magic.',
    coverImage: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Misty Mornings in Amboli',
    excerpt: 'Wrapped in clouds and silence, Amboli felt like walking inside a dream. Every turn revealed waterfalls, valleys, and wonder.',
    coverImage: 'https://images.unsplash.com/photo-1627730457565-18e1b8bafcd1?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Temple Bells of Ganpatipule',
    excerpt: 'With the Arabian Sea as its backdrop, the temple echoed devotion and calm. A place where faith meets the rhythm of waves.',
    coverImage: 'https://images.unsplash.com/photo-1604403421046-0f9a3a5c92a2?w=800&h=600&fit=crop'
  }
];


export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockStories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockStories.length) % mockStories.length);
    setIsAutoPlaying(false);
  };

  const getVisibleStories = (): (Story & { position: number })[] => {
    const stories: (Story & { position: number })[] = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + mockStories.length) % mockStories.length;
      stories.push({ ...mockStories[index], position: i });
    }
    return stories;
  };

  return (
    <section className="stories-section">
      <div className="bg-gradient" />
      <div className="bg-overlay" />
      
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container">
        <div className="header-content">
          <div className="label">EXPERIENCES</div>
          <h2 className="section-title">
            Stories That
            <span className="gradient-text"> Inspire</span>
          </h2>
          <p className="section-subtitle">
            Discover authentic travel experiences from our community of adventurers
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {getVisibleStories().map((story, idx) => (
              <article
                key={`${story.id}-${idx}`}
                className={`story-card ${story.position === 0 ? 'active' : ''} ${story.position === -1 ? 'prev' : ''} ${story.position === 1 ? 'next' : ''}`}
                onClick={() => story.position !== 0 && goToSlide(mockStories.findIndex(s => s.id === story.id))}
              >
                <div className="card-inner">
                  <div className="image-container">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="story-image"
                    />
                    <div className="image-overlay" />
                    <div className="card-number">
                      {String(mockStories.findIndex(s => s.id === story.id) + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="content-container">
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-text">{story.excerpt}</p>

                    <button className="read-btn">
                      <span>Read More</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button onClick={prevSlide} className="nav-btn nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={nextSlide} className="nav-btn nav-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="pagination">
          {mockStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stories-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
          background: linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #1e1b4b);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 50%);
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="rgba(255,255,255,0.02)" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: pulse 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
          top: -250px;
          left: -250px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent);
          bottom: -200px;
          right: -200px;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .header-content {
          text-align: center;
          margin-bottom: 5rem;
          animation: fadeIn 1s ease;
        }

        .label {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 1rem 0;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .carousel-container {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-card {
          position: absolute;
          width: 400px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .story-card.active {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 3;
          pointer-events: auto;
        }

        .story-card.prev {
          transform: translateX(-450px) scale(0.85);
          opacity: 0.5;
          z-index: 1;
          filter: blur(2px);
        }

        .story-card.next {
          transform: translateX(450px) scale(0.85);
          opacity: 0.5;
          z-index: 1;
          filter: blur(2px);
        }

        .story-card.active:hover {
          transform: translateY(-8px) scale(1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
                      0 0 80px rgba(96, 165, 250, 0.2);
        }

        .story-card.prev:hover,
        .story-card.next:hover {
          opacity: 0.7;
          filter: blur(1px);
        }

        .card-inner {
          position: relative;
          height: 100%;
        }

        .image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .story-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .story-card.active:hover .story-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }

        .story-card.active:hover .image-overlay {
          opacity: 0.8;
        }

        .card-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: #fff;
          font-weight: 700;
          font-size: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .content-container {
          padding: 2rem;
        }

        .story-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .story-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9375rem;
          line-height: 1.7;
          margin: 0 0 2rem 0;
        }

        .read-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .read-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .read-btn:hover::before {
          left: 100%;
        }

        .read-btn:hover {
          transform: translateX(4px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        .read-btn svg {
          transition: transform 0.3s ease;
        }

        .read-btn:hover svg {
          transform: translateX(4px);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-prev {
          left: 2rem;
        }

        .nav-next {
          right: 2rem;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 3rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .dot.active {
          width: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
        }

        @media (max-width: 1024px) {
          .story-card.prev {
            transform: translateX(-350px) scale(0.8);
          }

          .story-card.next {
            transform: translateX(350px) scale(0.8);
          }
        }

        @media (max-width: 768px) {
          .stories-section {
            padding: 5rem 0;
          }

          .header-content {
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .carousel-container {
            height: 550px;
          }

          .story-card {
            width: 320px;
          }

          .story-card.prev,
          .story-card.next {
            transform: scale(0.7);
            opacity: 0;
            pointer-events: none;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
          }

          .nav-prev {
            left: 1rem;
          }

          .nav-next {
            right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}