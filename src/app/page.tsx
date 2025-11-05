// ✅ Import only CSS needed for this page
import "../styles/custom.css";
import Layout from '../components/layout';
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
      <Category />
      <ExperienceList />
      <ProductSlider />
      <FeaturedDestinations />
      <BlogSection />
      <ReviewSection />
      </Layout>
    </main>
  );
}
