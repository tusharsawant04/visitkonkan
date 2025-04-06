import { motion } from 'framer-motion';

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
}

const HeroSection = ({ searchTerm, setSearchTerm, category, setCategory }: HeroSectionProps) => {
  return (
    <motion.section 
      className="hero-section py-5 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 text-white mb-3">Discover Kokan&apos;s Magic</h1>
            <p className="lead text-white mb-4">Where Nature Meets Heritage</p>
            
            <div className="row g-3">
              <div className="col-md-8">
                <input 
                  type="text" 
                  className="form-control form-control-lg"
                  placeholder="Search your dream destination..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select 
                  className="form-select form-select-lg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="beach">Beaches</option>
                  <option value="fort">Forts</option>
                  <option value="waterfall">Waterfalls</option>
                  <option value="trekking">Trekking Spots</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;