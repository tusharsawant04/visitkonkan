import Image from 'next/image';
import { Listing } from '../backend/lib/data';

interface ListingCardProps {
  listing: Listing;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ListingCard = ({ listing, onMouseEnter, onMouseLeave }: ListingCardProps) => {
  return (
    <div 
      className="card shadow-sm border-0 h-100" 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <div className="row g-0">
        <div className="col-md-4 position-relative">
          <Image
            src={listing.image}
            alt={listing.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">{listing.name}</h5>
            <p className="card-text text-muted small">{listing.location}</p>
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-success me-2">{listing.rating} ★</span>
              <span className="text-muted small">({listing.reviewCount} reviews)</span>
            </div>
            <div className='mb-3'>
              {listing.tags.map(tag => (
                <span key={tag} className="badge rounded-pill bg-light text-dark me-1">{tag}</span>
              ))}
            </div>
            <p className="card-text small">{listing.description}</p>
            <a href="#" className="btn btn-sm btn-outline-primary">Explore Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;