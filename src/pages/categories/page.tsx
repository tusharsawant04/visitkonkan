// app/categories/page.tsx

import CategoryCard from '../../components/CategoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layout';

// Make sure this data is correct and your image paths are valid
const categoriesData = [
  {
    title: 'Beaches',
    description: 'Golden sand & clear waters',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '/icons/beach-icon.svg',
    href: '/categories/beaches/page',
  },
  {
    title: 'Historical Forts',
    description: 'Ancient warrior history',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '/icons/fort-icon.svg',
    href: '/categories/forts/page',
  },
  {
    title: 'Food & Cuisine',
    description: 'Local Konkani flavors',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '/icons/food-icon.svg',
    href: '/categories/food/page',
  },
  {
    title: 'Adventure & Water Sports',
    description: 'Scuba diving, rafting',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '/icons/adventure-icon.svg',
    href: '/categories/adventure/page',
  },
  {
    title: 'Wildlife & Nature',
    description: 'Bird sanctuaries, trekking',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '/icons/nature-icon.svg',
    href: '/categories/nature/page',
  },
  {
    title: 'Cultural Festivals',
    description: 'Traditional dance & music',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    iconUrl: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/> <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    href: '/categories/culture/page',
  },
];

export default function AllCategoriesPage() {
  return (
    <Layout>
      <div className="bg-light min-vh-100">
        <main className="container py-5">
          {/* Header Section - This part is good! */}
          <div className="text-center mb-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Explore Categories
                </li>
              </ol>
            </nav>
            <h1 className="display-4 fw-bolder text-dark">
              Explore All Experiences in Konkan
            </h1>
            <p className="lead text-muted mt-3">
              From serene beaches to majestic forts, your Konkan adventure starts here.
            </p>
          </div>

          {/* THIS IS THE PART YOU NEED TO ADD - The Grid of Cards */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {categoriesData.map((category) => (
              <div className="col" key={category.title}>
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  imageUrl={category.imageUrl}
                  iconUrl={category.iconUrl}
                  href={category.href}
                />
              </div>
            ))}
          </div>

        </main>
      </div>
    </Layout>
  );
}