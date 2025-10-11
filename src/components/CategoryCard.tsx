// app/components/CategoryCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './global.css';

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
  href: string;
};

const CategoryCard = ({ title, description, imageUrl, iconUrl, href }: CategoryCardProps) => {
  return (
    <Link href={href} className="d-block text-decoration-none">
      {/* SOLUTION: We wrap the card in a div with Bootstrap's `ratio` class.
        - `ratio-1x1` makes it a perfect square. You can also use `ratio-4x3`, `ratio-16x9`, etc.
        - The `category-card` class for hover effects is now on this wrapper.
      */}
      <div className="category-card ratio ratio-1x1 rounded-4 overflow-hidden shadow-lg">
        <div className="card bg-dark text-white border-0 h-100">
          <Image
            src={imageUrl}
            alt={`Image for ${title}`}
            fill
            style={{ objectFit: 'cover' }}
            className="category-card-img card-img"
          />
          <div className="card-img-overlay d-flex flex-column p-0 gradient-overlay">
            <div className="align-self-end m-3">
              <div 
                className="icon-backdrop rounded-circle d-flex align-items-center justify-content-center" 
                style={{ height: '3rem', width: '3rem' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/> <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
            </div>
            <div className="mt-auto p-4">
              <h3 className="fw-bold">{title}</h3>
              <p className="mb-0 text-light">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;