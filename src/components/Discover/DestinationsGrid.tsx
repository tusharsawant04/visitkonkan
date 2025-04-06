import { motion } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Destination {
  rating: ReactNode;
  category: ReactNode;
  imageUrl: string | StaticImport;
  id: string;
  name: string;
  image: string;
  description: string;
}

interface DestinationsGridProps {
  view: string;
  setView: (view: string) => void;
  displayedPlaces: Destination[];
  loadingRef: (node?: Element | null) => void;
  hasMore: boolean;
}

const DestinationsGrid = ({ view, setView, displayedPlaces, loadingRef, hasMore }: DestinationsGridProps) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 mb-0">Popular Destinations</h2>
          <div className="btn-group">
            <button 
              className={`btn btn-outline-primary ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button 
              className={`btn btn-outline-primary ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        <div className={`row g-4 ${view === 'list' ? 'flex-column' : ''}`}>
          {displayedPlaces.map((place, index) => (
            <motion.div
              key={index}
              className={view === 'grid' ? 'col-md-6 col-lg-4' : 'col-12'}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <Image 
                    src={place.imageUrl}
                    alt={place.name}
                    width={400}
                    height={300}
                    className="card-img-top"
                  />
                  <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                    {place.category}
                  </span>
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">
                    ★ {place.rating}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">{place.description}</p>
                  <div className="d-flex gap-2">
                    <Link 
                      href={`/PlaceInformation?place=${place.name}`}
                      className="btn btn-primary flex-grow-1"
                    >
                      Explore More
                    </Link>
                    <Link 
                      href={`/PlanTrip?place=${place.name}`}
                      className="btn btn-success flex-grow-1"
                    >
                      Plan Trip
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div ref={loadingRef} className="text-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsGrid;