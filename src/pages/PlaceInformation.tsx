import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaceInformation.css';

const GoogleMap = dynamic(() => import('../components/GoogleMap'), { ssr: false });
const CollapsibleTabs = dynamic(() => import('../components/CollapsibleTabs'), { ssr: false });
const PlanYourTrip = dynamic(() => import('../components/PlanYourTrip'), { ssr: false });

const PlaceInformation = () => {
  const router = useRouter();
  const { place } = router.query;
  const [activeTab, setActiveTab] = useState('overview');

  // Ensure place is a string
  const placeName = Array.isArray(place) ? place[0] : place;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="place-information">
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="place-title"
            {...fadeInUp}
          >
            {placeName}
          </motion.h1>
          <motion.div 
            className="place-quick-info"
            {...fadeInUp}
          >
            <span><i className="fas fa-map-marker-alt"></i> Konkan Region</span>
            <span><i className="fas fa-star"></i> 4.5/5</span>
            <span><i className="fas fa-users"></i> 1000+ visitors</span>
          </motion.div>
        </div>
      </motion.header>

      <div className="content-wrapper">
        <motion.nav 
          className="tab-navigation"
          {...fadeInUp}
        >
          {['overview', 'attractions', 'activities', 'reviews'].map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.nav>

        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="main-content"
              {...fadeInUp}
            >
              <CollapsibleTabs place={placeName || ''} activeTab={activeTab} />
              
              <section className="photos-section">
                <h2>Photo Gallery</h2>
                <div className="photo-grid">
                  {[1, 2, 3, 4, 5, 6].map((photo) => (
                    <motion.div 
                      key={photo}
                      className="photo-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={`/images/${placeName?.toLowerCase()}-${photo}.jpg`}
                        alt={`${placeName} photo ${photo}`}
                        width={300}
                        height={200}
                        layout="responsive"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>

            <motion.aside 
              className="sidebar"
              {...fadeInUp}
            >
              <div className="map-container">
                <GoogleMap place={placeName || ''} />
              </div>
              <PlanYourTrip place={placeName || ''} />
            </motion.aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceInformation;