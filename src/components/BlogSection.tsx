'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import './BlogSection.css';

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
    excerpt: "Discover secluded beaches and pristine shorelines along the Konkan coast...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Travel Explorer",
    authorImage: "https://i.pravatar.cc/32?img=1",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Beaches"
  },
  {
    id: 2,
    title: "Local Cuisine Guide: Malvani Food",
    excerpt: "Explore the rich flavors and spices of traditional Malvani cuisine...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Food Enthusiast",
    authorImage: "https://i.pravatar.cc/32?img=2",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Food"
  },
  {
    id: 3,
    title: "Fort Tales: Historical Journey",
    excerpt: "Walk through the magnificent forts that tell tales of valor...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "History Buff",
    authorImage: "https://i.pravatar.cc/32?img=3",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "History"
  }
];

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    1024: 2,
    700: 1
  };

  return (
    <section className="blog-section">
      <div className="container-fluid px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="section-subtitle">Our Stories</span>
          <h2 className="section-title">Latest Travel Stories</h2>
          <p className="section-description">Get inspired by stories from Konkan</p>
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`masonry-item ${index % 3 === 0 ? 'large' : ''}`}
            >
              <div
                className="blog-card"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="blog-image-wrapper">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={index % 3 === 0 ? 600 : 400}
                    className="blog-image"
                  />
                  <div className="blog-category-badge">{post.category}</div>
                  <div className={`blog-content-overlay ${hoveredId === post.id ? 'active' : ''}`}>
                    <div className="blog-content">
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <div className="blog-meta">
                        <div className="author-info">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="author-avatar"
                          />
                          <span className="author-name">{post.author}</span>
                        </div>
                        <div className="post-meta">
                          <span>{post.date}</span>
                          <span className="separator">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="read-more-link">
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/blog" className="view-all-link">
            Explore All Stories
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
