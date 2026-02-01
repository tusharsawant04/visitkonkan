// ✅ Import only CSS needed for this page
'use client';
import "../styles/custom.css";
import Layout from '../components/layout';
import ScrollReveal from '../components/ScrollReveal';
// ✅ Lazy load non-critical components
const HeroSlider = dynamic(() => import("../components/Herosilder"), { ssr: true });
const Category = dynamic(() => import("../components/category"), { ssr: false });
const ExperienceList = dynamic(() => import("@/components/ExperienceList"), { ssr: false });
const FeaturedDestinations = dynamic(() => import("@/components/FeaturedDestinations"), { ssr: false });
const BlogSection = dynamic(() => import("../components/BlogSection"), { ssr: false });
const ReviewSection = dynamic(() => import("../components/ReviewSection"), { ssr: false });
const ProductSlider = dynamic(() => import("../components/ProductSlider"), { ssr: false });

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="overflow-hidden home-page">
      <Layout>

      <HeroSlider />

      {/* ✅ Fold Content Below */}
      {/* <ScrollReveal><Category /></ScrollReveal> */}
      <ScrollReveal delay={80}><ExperienceList /></ScrollReveal>
      <ScrollReveal delay={160}><ProductSlider /></ScrollReveal>
      <ScrollReveal delay={240}><FeaturedDestinations /></ScrollReveal>
      <ScrollReveal delay={320}><BlogSection /></ScrollReveal>
      <section id="ig-widget" className="ig-section">
  
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div className="elfsight-app-28cdfe42-7a25-430d-96ec-6a9db3d9933f" data-elfsight-app-lazy></div>
     
    </section>
      {/* <ScrollReveal delay={400}><ReviewSection /></ScrollReveal> */}
      </Layout>
    </main>
  );
}
