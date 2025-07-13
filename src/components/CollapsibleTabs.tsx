import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyAttractions from './TabContent/NearbyAttractions';
import Activities from './TabContent/Activities';
import Hotels from './TabContent/Hotels';
import Reviews from './TabContent/Reviews';

interface CollapsibleTabsProps {
  place: string;
  activeTab: string;
}

const CollapsibleTabs: React.FC<CollapsibleTabsProps> = ({ place, activeTab }) => {
  return (
    <div className="container my-5">
    
      <div className="tab-content" id="myTabContent">
        <div 
          className={`tab-pane fade ${activeTab === 'attractions' ? 'show active' : ''}`} 
          id="attractions" 
          role="tabpanel" 
          aria-labelledby="attractions-tab"
        >
          <NearbyAttractions place={place} />
        </div>
        <div 
          className={`tab-pane fade ${activeTab === 'activities' ? 'show active' : ''}`} 
          id="activities" 
          role="tabpanel" 
          aria-labelledby="activities-tab"
        >
          <Activities place={place} />
        </div>
        <div 
          className={`tab-pane fade ${activeTab === 'hotels' ? 'show active' : ''}`} 
          id="hotels" 
          role="tabpanel" 
          aria-labelledby="hotels-tab"
        >
          <Hotels place={place} />
        </div>
        <div 
          className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} 
          id="reviews" 
          role="tabpanel" 
          aria-labelledby="reviews-tab"
        >
          <Reviews place={place} />
        </div>
      </div>
    </div>
  );
};

export default CollapsibleTabs;