'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import './BlogSection.css'; // External styles (optional)

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

// TEMP: Empty blog posts array for now
const blogPosts: BlogPost[] = [];

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1400: 2,
    1024: 2,
    700: 1,
  };

  return (
    <section className="blog-section py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
            Latest Travel Stories
          </h2>
          <p className="text-gray-600 mt-2">Get inspired by stories from Konkan</p>
          <div className="text-center mb-10">
        <Link
          href="/add-story"
          className="text-3xl md:text-4xl font-bold mt-2 text-gray-800  "
        >
          ✍️ Share Your Travel Story
        </Link>
</div>
        </motion.div>

        {/* Empty State */}
        {blogPosts.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1Z9_oYgoTruMaDpgzt8DK0-GEDScDz24a"
              alt="Traveling illustration"
              width={400}
              height={400}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              The Journey Is Just Beginning...
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto mt-2">
              Our Konkan tales are still packing their bags. From hidden beaches to spicy coastal cuisine — stories worth telling are coming soon. Stay tuned!
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
            >
              Back to Home
            </Link>
          </motion.div>
        ) : (
          // Blog Cards Grid (Masonry)
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
                  className="blog-card group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                  onMouseEnter={() => setHoveredId(post.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={index % 3 === 0 ? 600 : 400}
                      className="blog-image w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white text-sm text-blue-600 font-semibold px-3 py-1 rounded shadow">
                      {post.category}
                    </div>
                  </div>
                  <div
                    className={`blog-content p-5 bg-white transition-all duration-300 ${
                      hoveredId === post.id ? 'bg-gray-50' : ''
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:underline mt-4"
                    >
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        )}
      </div>
    </section>
  );
}
