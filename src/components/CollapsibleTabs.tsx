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
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'attractions' ? 'active' : ''}`} 
            id="attractions-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#attractions" 
            type="button" 
            role="tab" 
            aria-controls="attractions" 
            aria-selected={activeTab === 'attractions'}
          >
            Nearby Attractions
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'activities' ? 'active' : ''}`}
            id="activities-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#activities" 
            type="button" 
            role="tab" 
            aria-controls="activities" 
            aria-selected={activeTab === 'activities'}
          >
            Activities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
            id="hotels-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#hotels" 
            type="button" 
            role="tab" 
            aria-controls="hotels" 
            aria-selected={activeTab === 'hotels'}
          >
            Hotels
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            id="reviews-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#reviews" 
            type="button" 
            role="tab" 
            aria-controls="reviews" 
            aria-selected={activeTab === 'reviews'}
          >
            Reviews
          </button>
        </li>
      </ul>
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