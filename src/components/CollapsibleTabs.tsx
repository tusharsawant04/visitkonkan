import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyAttractions from './TabContent/NearbyAttractions';
import Activities from './TabContent/Activities';
import Hotels from './TabContent/Hotels';
import Reviews from './TabContent/Reviews';

interface CollapsibleTabsProps {
  place: string;
}

const CollapsibleTabs: React.FC<CollapsibleTabsProps> = ({ place }) => {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="attractions-tab" data-bs-toggle="tab" data-bs-target="#attractions" type="button" role="tab" aria-controls="attractions" aria-selected="true">Nearby Attractions</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="activities-tab" data-bs-toggle="tab" data-bs-target="#activities" type="button" role="tab" aria-controls="activities" aria-selected="false">Activities</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="false">Hotels</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="attractions" role="tabpanel" aria-labelledby="attractions-tab">
          <NearbyAttractions place={place} />
        </div>
        <div className="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab">
          <Activities place={place} />
        </div>
        <div className="tab-pane fade" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
          <Hotels place={place} />
        </div>
        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
          <Reviews place={place} />
        </div>
      </div>
    </div>
  );
};

export default CollapsibleTabs;