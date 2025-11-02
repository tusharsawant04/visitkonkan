'use client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const categories = [
  { 
    title: "Beaches", 
    slug: "beaches",
    desc: "Golden sand & clear waters", 
    icon: "🏝️", 
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    longDesc: "Konkan’s beaches are a serene blend of golden sands, clear blue waters, and gentle sea breeze. Stretching from Alibaug to Vengurla, each beach offers its own charm — from peaceful sunsets to exciting water sports. The region is also famous for beachside stays, coconut groves, and authentic seafood cuisine.",
    topPlaces: [
      { name: "Ganpatipule Beach", img: "https://images.unsplash.com/photo-1519817914152-22d216bb9170" },
      { name: "Tarkarli Beach", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { name: "Devgad Beach", img: "https://images.unsplash.com/photo-1601758123927-1965c6de8bf0" },
      { name: "Malvan Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
      { name: "Diveagar Beach", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { name: "Velneshwar Beach", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77" }
    ]
  },

  { 
    title: "Historical Forts", 
    slug: "historical-forts",
    desc: "Ancient warrior history", 
    icon: "🏰", 
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    longDesc: "Konkan’s coastline is dotted with magnificent forts that once guarded the Maratha empire. These forts — built by Chhatrapati Shivaji Maharaj and other dynasties — stand as symbols of bravery and maritime strategy. Visitors can explore their massive ramparts, sea views, and ancient cannons while reliving the region’s glorious past.",
    topPlaces: [
      { name: "Sindhudurg Fort", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df" },
      { name: "Vijaydurg Fort", img: "https://images.unsplash.com/photo-1524666041070-9d87656c25c5" },
      { name: "Suvarnadurg Fort", img: "https://images.unsplash.com/photo-1534854638093-bada1813ca19" },
      { name: "Murud-Janjira Fort", img: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2" },
      { name: "Kolaba Fort", img: "https://images.unsplash.com/photo-1604747457998-67c2c618a8a8" }
    ]
  },

  { 
    title: "Food & Cuisine", 
    slug: "food-cuisine",
    desc: "Local Konkani flavors", 
    icon: "🥘", 
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    longDesc: "Konkani cuisine is an explosion of coastal flavors — coconut, tamarind, kokum, and spices blend beautifully in every dish. From spicy fish curries to vegetarian delights, the cuisine reflects the culture and love for local ingredients. Don't miss Solkadhi, Kombdi Vade, Modak, and Malvani seafood thalis.",
    topPlaces: [
      { name: "Malvani Cuisine", img: "https://images.unsplash.com/photo-1590080875837-79dcdb9a18a7" },
      { name: "Kokani Fish Curry", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19" },
      { name: "Solkadhi Drink", img: "https://images.unsplash.com/photo-1617196030112-bd3e0e4d1e64" },
      { name: "Kombdi Vade", img: "https://images.unsplash.com/photo-1585238342028-60b3f3b6b5e7" },
      { name: "Ukadiche Modak", img: "https://images.unsplash.com/photo-1630839437035-543f1c54c433" }
    ]
  },

  { 
    title: "Adventure & Water Sports", 
    slug: "adventure-water-sports",
    desc: "Scuba diving, rafting", 
    icon: "🚤", 
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
    longDesc: "The Konkan coast is a paradise for adventure enthusiasts. From scuba diving in Tarkarli to river rafting in Kundalika and parasailing in Alibaug, the region offers heart-thumping experiences. Its combination of sea, rivers, and mountains creates a perfect backdrop for thrill-seekers.",
    topPlaces: [
      { name: "Tarkarli Scuba Diving", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
      { name: "Kundalika River Rafting", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2" },
      { name: "Alibaug Parasailing", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { name: "Devkund Waterfall Trek", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { name: "Murud Jet Skiing", img: "https://images.unsplash.com/photo-1493810329807-2b2dba3b5f68" }
    ]
  },

  { 
    title: "Wildlife & Nature", 
    slug: "wildlife-nature",
    desc: "Bird sanctuaries, trekking", 
    icon: "🌲", 
    image: "https://images.unsplash.com/photo-1562087225-54afaf1c1c56",
    longDesc: "From dense rainforests to mangrove swamps, Konkan is a biodiversity hotspot. Nature lovers can explore wildlife sanctuaries, waterfalls, and lush valleys teeming with exotic flora and fauna. Trekking trails through Amboli Ghat and Dajipur forests offer stunning views and peaceful getaways.",
    topPlaces: [
      { name: "Dajipur Wildlife Sanctuary", img: "https://images.unsplash.com/photo-1590080875837-79dcdb9a18a7" },
      { name: "Amboli Ghat", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { name: "Karnala Bird Sanctuary", img: "https://images.unsplash.com/photo-1533142266415-ac591a4c3b1f" },
      { name: "Radhanagari Forest", img: "https://images.unsplash.com/photo-1562087225-54afaf1c1c56" },
      { name: "Tilari Dam", img: "https://images.unsplash.com/photo-1590532888360-9a267f02a4ed" }
    ]
  },

  { 
    title: "Cultural Festivals", 
    slug: "cultural-festivals",
    desc: "Traditional Konkani dance & music", 
    icon: "🎭", 
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    longDesc: "Konkan celebrates its traditions through vibrant festivals filled with music, dance, and devotion. From the grandeur of Ganesh Chaturthi to the colorful Holi of Sindhudurg, every festival is a cultural spectacle that binds the community with joy and spirituality.",
    topPlaces: [
      { name: "Ganesh Chaturthi (All Konkan)", img: "https://images.unsplash.com/photo-1620740975562-b7c6b9da4cb5" },
      { name: "Shimgotsav Festival", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
      { name: "Dahi Handi Celebrations", img: "https://images.unsplash.com/photo-1567535167795-6ab8b3b91f15" },
      { name: "Navratri Festivities", img: "https://images.unsplash.com/photo-1584697964365-0b0813c1a5c8" },
      { name: "Local Folk Dance & Dashavtar Shows", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df" }
    ]
  }
];


export default function CategoryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const category = categories.find((c) => c.slug === slug);

  const title = category?.title || "Explore Konkan";
  const desc = category?.desc || "Discover hidden gems of the Konkan coast.";
  const image = category?.image || "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0";

  if (!category) {
    return (
      <Layout>
        <div className="container text-center my-5">
          <h2>Category Not Found</h2>
          <Link href="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{`${category.title} | Visit Konkan`}</title>
        <meta name="description" content={category.desc} />
        <meta property="og:title" content={category.title} />
        <meta property="og:description" content={category.desc} />
        <meta property="og:image" content={category.image} />
      </Head>

      {/* 🌅 Hero Section */}
      <section className="position-relative text-white">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="hero-swiper"
        >
          {(category.topPlaces || []).map((place: any, idx: number) => (
            <SwiperSlide key={idx}>
              <div
                className="hero-slide position-relative"
                style={{
                  height: "70vh",
                  backgroundImage: `url(${place.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.75)"
                }}
              >
                <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                  <h1 className="fw-bold display-4">{place.name}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
          <h1 className="display-3 fw-bold">{category.icon} {category.title}</h1>
          <p className="fs-5 text-light-50">{category.desc}</p>
        </div>
      </section>

      {/* 📜 Content Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image
              src={category.image}
              alt={category.title}
              width={700}
              height={450}
              className="img-fluid rounded-4 shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-semibold mb-3">About {category.title}</h2>
            <p className="text-secondary fs-6" style={{ lineHeight: '1.8' }}>
              {category.longDesc}
            </p>
            <Link 
              href="/categories"
              className="btn text-white mt-3"
              style={{
                background: "linear-gradient(135deg, #0077b6, #023e8a)",
                borderRadius: "10px",
                fontWeight: "500",
                padding: "10px 24px",
              }}
            >
              ← Back to All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* ✨ Explore More Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Explore More Experiences</h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categories.filter(c => c.slug !== slug).slice(0,3).map((c, idx) => (
              <Link 
                key={idx} 
                href={`/categories/${c.slug}`} 
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 shadow-sm" style={{ width: '18rem' }}>
                  <Image 
                    src={c.image} 
                    alt={c.title} 
                    width={300} 
                    height={180} 
                    className="card-img-top rounded-top"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{c.icon} {c.title}</h5>
                    <p className="card-text text-muted small">{c.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
