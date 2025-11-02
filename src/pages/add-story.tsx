'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from "../backend/lib/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function AddStoryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    story: '',
    metaKeywords: '',
    images: [] as string[], // all uploaded image URLs
    coverImage: '', // selected cover image URL
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  // ✅ Handle Multiple Image Upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const uploadedUrls: string[] = [];
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);

    for (const file of files) {
      const formDataCloud = new FormData();
      formDataCloud.append('file', file);
      formDataCloud.append('upload_preset', 'storyblog'); // unsigned preset name

      try {
        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: 'POST', body: formDataCloud }
        );
        const data = await uploadRes.json();
        if (data.secure_url) {
          uploadedUrls.push(data.secure_url);
        }
      } catch (error) {
        console.error('Upload error:', error);
      }
    }

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...uploadedUrls],
      coverImage: prev.coverImage || uploadedUrls[0], // set first as cover if none
    }));
  };

  // ✅ Remove an image
  const handleRemoveImage = (url: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== url),
      coverImage: prev.coverImage === url ? '' : prev.coverImage,
    }));
    setPreviews(prev => prev.filter(p => p !== url));
  };

  // ✅ Set as cover
  const handleSetCover = (url: string) => {
    setFormData(prev => ({ ...prev, coverImage: url }));
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.story || formData.images.length === 0) {
      alert('Please fill all required fields and upload at least one image.');
      return;
    }
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'stories'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert('✅ Story submitted successfully!');
      router.push('/stories');
    } catch (error) {
      console.error(error);
      alert('Error submitting story.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div
          className="card shadow-lg p-4 border-0 rounded-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-center fw-bold mb-4 text-primary">✍️ Share Your Travel Story</h2>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Story Title *</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. My First Konkan Trek Experience"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Excerpt */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Short Excerpt</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Give a short summary of your story..."
                value={formData.excerpt}
                onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
              />
            </div>

            {/* Multiple Image Upload */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Upload Images *</label>
              <div className="border border-2 border-dashed rounded-4 p-4 text-center bg-white mb-3">
                <input
                  type="file"
                  accept="image/*"
                  id="imageUpload"
                  className="d-none"
                  multiple
                  onChange={handleImageUpload}
                />
                <label htmlFor="imageUpload" className="btn btn-outline-primary">
                  📸 Choose Images
                </label>
              </div>

              {/* Preview Gallery */}
              {formData.images.length > 0 && (
                <div className="row g-3">
                  {formData.images.map((url, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                      <div className="card shadow-sm border-0 position-relative">
                        <Image
                          src={url}
                          alt={`Story image ${index + 1}`}
                          width={400}
                          height={300}
                          className="img-fluid rounded-4"
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-pill"
                          onClick={() => handleRemoveImage(url)}
                        >
                          ✕
                        </button>

                        <div className="form-check text-center mt-2 mb-2">
                          <input
                            type="radio"
                            name="coverImage"
                            id={`cover-${index}`}
                            className="form-check-input"
                            checked={formData.coverImage === url}
                            onChange={() => handleSetCover(url)}
                          />
                          <label htmlFor={`cover-${index}`} className="form-check-label">
                            {formData.coverImage === url ? '✅ Cover Image' : 'Set as Cover'}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Story Editor */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Full Story *</label>
              <ReactQuill
                value={formData.story}
                onChange={value => setFormData({ ...formData, story: value })}
                theme="snow"
                placeholder="Write your amazing travel story here..."
              />
            </div>

            {/* Meta Keywords */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Meta Keywords (SEO)</label>
              <input
                type="text"
                className="form-control"
                placeholder="konkan, beaches, malvan, travel"
                value={formData.metaKeywords}
                onChange={e => setFormData({ ...formData, metaKeywords: e.target.value })}
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-pill fw-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Publishing...' : 'Publish Story 🚀'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
