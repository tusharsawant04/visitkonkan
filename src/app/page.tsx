import '../styles/custom.css';
import HeroSlider from '../components/Herosilder';
import Category from '../components/category';
import ExperienceList from "@/components/ExperienceList";
import FeaturedDestinations from '@/components/FeaturedDestinations';
import LocalExperiences from '@/components/LocalExperiences';
import CTABanner from '@/components/CTABanner';
import Layout from '.././components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogSection from '../components/BlogSection';
import ReviewSection from '../components/ReviewSection';
import ProductSlider from '../components/ProductSlider';


export default function Home() {
  return (
    <div className="home-page">
      <main className="overflow-hidden">
        <Layout>
          <HeroSlider />
          <Category />
          <ExperienceList />
          <ProductSlider />
          <FeaturedDestinations />
          {/* <LocalExperiences /> */}
          <BlogSection />
          <ReviewSection />
          {/* <section className="cta-section py-5">
            <CTABanner />
          </section> */}
      
        </Layout>
      </main>
    </div>
  );
}
