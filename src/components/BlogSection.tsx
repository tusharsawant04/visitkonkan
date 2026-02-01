import React, { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hidden Beaches of Konkan Coast",
    excerpt: "Discover pristine shores untouched by mass tourism, where golden sands meet turquoise waters.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    author: "Priya Sharma",
    authorImage: "https://i.pravatar.cc/150?img=5",
    date: "Jan 15, 2026",
    readTime: "5 min",
    category: "Beaches"
  },
  {
    id: 2,
    title: "Traditional Konkan Cuisine Guide",
    excerpt: "From sol kadhi to bombil fry, explore the authentic flavors that define coastal Maharashtra.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
    author: "Rahul Desai",
    authorImage: "https://i.pravatar.cc/150?img=12",
    date: "Jan 12, 2026",
    readTime: "7 min",
    category: "Food"
  },
  {
    id: 3,
    title: "Ancient Forts Along the Coast",
    excerpt: "Journey through history as we explore magnificent fortresses with breathtaking ocean views.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    author: "Ananya Kulkarni",
    authorImage: "https://i.pravatar.cc/150?img=9",
    date: "Jan 10, 2026",
    readTime: "6 min",
    category: "Heritage"
  },
  {
    id: 4,
    title: "Monsoon Magic in Konkan",
    excerpt: "Experience the region's transformation during the rainy season - lush greenery and cascading waterfalls await.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    author: "Vikram Patil",
    authorImage: "https://i.pravatar.cc/150?img=13",
    date: "Jan 8, 2026",
    readTime: "8 min",
    category: "Nature"
  },
  {
    id: 5,
    title: "Village Life: A Cultural Journey",
    excerpt: "Step into the heart of Konkan villages and discover traditions that have endured for centuries.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    author: "Meera Joshi",
    authorImage: "https://i.pravatar.cc/150?img=10",
    date: "Jan 5, 2026",
    readTime: "9 min",
    category: "Culture"
  },
  {
    id: 6,
    title: "Water Sports Adventure Guide",
    excerpt: "From parasailing to scuba diving, discover thrilling water activities along the Konkan coastline.",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&h=600&fit=crop",
    author: "Arjun Naik",
    authorImage: "https://i.pravatar.cc/150?img=8",
    date: "Jan 3, 2026",
    readTime: "6 min",
    category: "Adventure"
  }
];

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string>('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || filteredPosts.length <= slidesPerView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredPosts.length, slidesPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPosts.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="blog-section">
      <div className="bg-gradient" />
      <div className="noise-overlay" />

      <div className="container">
        {/* Header */}
        <div className="header-wrapper">
          <div className="floating-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>DISCOVER</span>
          </div>
          
          <h2 className="main-title">
            Latest Travel
            <span className="gradient-text"> Stories</span>
          </h2>
          
          <p className="subtitle">
            Get inspired by authentic experiences from the Konkan coast
          </p>

          <a href="/add-story" className="share-story-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            <span>Share Your Story</span>
          </a>
        </div>

        {/* Category Filter */}
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentIndex(0);
              }}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        {filteredPosts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✈️</div>
            <h3 className="empty-title">The Journey Is Just Beginning...</h3>
            <p className="empty-text">
              Our Konkan tales are still packing their bags. From hidden beaches to spicy coastal cuisine — stories worth telling are coming soon!
            </p>
            <a href="/" className="home-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Back to Home
            </a>
          </div>
        ) : (
          <div className="slider-wrapper">
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                }}
              >
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="blog-card"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="card-inner">
                      <div className="card-glow" />
                      
                      <div className="image-wrapper">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="blog-image"
                        />
                        <div className="image-gradient" />
                        <div className="category-badge">{post.category}</div>
                      </div>

                      <div className="content-wrapper">
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-excerpt">{post.excerpt}</p>

                        <div className="meta-info">
                          <div className="author-info">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="author-avatar"
                            />
                            <span className="author-name">{post.author}</span>
                          </div>
                          
                          <div className="post-meta">
                            <span>{post.date}</span>
                            <span className="dot">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <a href={`/blog/${post.id}`} className="read-more">
                          <span>Read Article</span>
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {filteredPosts.length > slidesPerView && (
              <>
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
              </>
            )}

            {/* Pagination Dots */}
            {filteredPosts.length > slidesPerView && (
              <div className="pagination">
                {Array.from({ length: Math.ceil(filteredPosts.length - slidesPerView + 1) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }

        .blog-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E');
          opacity: 0.5;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        .header-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .floating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem 0;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .share-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          color: #667eea;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .share-story-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: #fff;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: #fff;
        }

        .filter-btn.active {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(255, 255, 255, 1);
          color: #667eea;
        }

        .slider-wrapper {
          position: relative;
        }

        .slider-container {
          overflow: hidden;
          padding: 1rem 0 3rem;
        }

        .slider-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-card {
          flex-shrink: 0;
          padding: 0 1rem;
          box-sizing: border-box;
        }

        .card-inner {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }

        .card-inner:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .card-inner:hover .card-glow {
          opacity: 0.4;
        }

        .image-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-inner:hover .blog-image {
          transform: scale(1.1);
        }

        .image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .category-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: #667eea;
          font-size: 0.875rem;
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .content-wrapper {
          padding: 1.75rem;
        }

        .blog-title {
          font-size: 1.375rem;
          font-weight: 800;
          color: #1a202c;
          margin: 0 0 1rem 0;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-excerpt {
          color: #4a5568;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .meta-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 1rem;
          gap: 0.5rem;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #667eea;
        }

        .author-name {
          font-weight: 600;
          color: #2d3748;
          font-size: 0.875rem;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.8125rem;
          flex-shrink: 0;
        }

        .dot {
          color: #cbd5e0;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9375rem;
        }

        .read-more:hover {
          gap: 1rem;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-prev {
          left: -30px;
        }

        .nav-next {
          right: -30px;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .pagination .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .pagination .dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .pagination .dot.active {
          width: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.95);
        }

        .empty-state {
          text-align: center;
          padding: 5rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 32px;
          max-width: 600px;
          margin: 0 auto;
        }

        .empty-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .empty-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1a202c;
          margin: 0 0 1rem 0;
        }

        .empty-text {
          color: #4a5568;
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .home-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .home-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        @media (max-width: 1024px) {
          .nav-prev {
            left: 10px;
          }

          .nav-next {
            right: 10px;
          }
        }

        @media (max-width: 768px) {
          .blog-section {
            padding: 4rem 0;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .filter-container {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
          }

          .image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}