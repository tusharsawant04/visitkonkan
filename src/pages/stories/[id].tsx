'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../backend/lib/firebase';
import Image from 'next/image';
import Layout from '../../components/layout';

interface Story {
  title: string;
  story: string;
  image: string[];
  createdAt?: any;
}

export default function StoryDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      if (!id) return;
      const docRef = doc(db, 'stories', id as string);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      if (docSnap.exists()) setStory(docSnap.data() as Story);
    };
    fetchStory();
  }, [id]);

  if (!story)
    return (
      <Layout>
        <div className="d-flex justify-content-center align-items-center vh-100 text-muted fs-5">
          Loading story...
        </div>
      </Layout>
    );

  return (
    <Layout>
      <section className="container py-5">
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mx-auto" style={{ maxWidth: '900px' }}>
          {/* Image Section */}
          <div className="position-relative">
          
            {story.image?.map((imgUrl, index) => (
  <Image
    key={index}
    src={imgUrl}
    alt={`${story.title} - ${index + 1}`}
    width={900}
    height={450}
    className="card-img-top object-fit-cover mb-3"
    style={{ height: '450px' }}
  />
))}
          </div>

          {/* Story Content */}
          <div className="card-body p-5">
            <h1 className="card-title fw-bold text-primary mb-3">{story.title}</h1>

            {story.createdAt && (
              <p className="text-muted small mb-4">
                {new Date(story.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}

            <div
              className="card-text fs-5 lh-lg text-dark"
              dangerouslySetInnerHTML={{ __html: story.story }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
