import { Listing } from '../backend/lib/data';

interface InteractiveMapProps {
  listings: Listing[];
  hoveredListingId: string | null;
}

const InteractiveMap = ({ listings, hoveredListingId }: InteractiveMapProps) => {
  // NOTE: This is a placeholder for a real map component (like react-leaflet or @vis.gl/react-google-maps).
  // A real implementation would use the `listings` coordinates to render actual map markers.
  return (
    <div className="card shadow-sm h-100" style={{ minHeight: '500px' }}>
      <div className="card-body p-0 position-relative">
        <div 
          className="w-100 h-100 rounded" 
          style={{ 
            backgroundImage: `url('/images/map-placeholder.png')`, // Create a generic map screenshot
            backgroundSize: 'cover'
          }}
        >
          <div className='position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10'></div>
          {/* Example of rendering a simple pin. A real map would do this automatically. */}
          {listings.map(listing => (
              <div 
                key={listing.id} 
                className={`position-absolute badge rounded-pill ${listing.id === hoveredListingId ? 'bg-primary scale-125' : 'bg-secondary'} transition-all`}
                // These styles are for demonstration only
                style={{
                    top: `${listing.coordinates.lat % 1 * 100}%`,
                    left: `${listing.coordinates.lng % 1 * 100}%`,
                    transition: 'all 0.2s ease-in-out'
                }}
              >
                  {listing.name.split(' ')[0]}
              </div>
          ))}
        </div>
        <div className="card-footer text-center small text-muted">
            This is a map placeholder. Hover over a listing to see interaction.
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;