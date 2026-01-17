import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import './discover.css';
import ReviewsList from "@/components/ReviewsList";
import ReviewForm from "@/components/ReviewForm";
import Head from "next/head"; 

// --- INTERFACE AND DATA ---
export interface Experience {
  name: string;
  slug: string;
  desc: string;
  rating: string;
  price: number;
  img: string[];
  history: string;
  whatToCarry?: string[];
  itinerary: {
    time: string;
    description: string;
    day: number;
  }[];
  location: string;
  reviews: {
    name: string;
    comment: string;
    rating: number;
  }[];
}

export const experiences: Experience[] = [
  {
  name: "Rajgad Trek",
  slug: "rajgad-trek",
  desc: "Rajgad is an enormous fort located around 60 km south-west of Pune. Known as the 'King of Forts', it served as the first capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. The fort is admired for its massive architecture, breathtaking views, and rich historical significance. It was here that Shivaji Maharaj spent nearly 25 years shaping his empire.",
  rating: "5.0/5",
  price: 1399,
  img: [
    "https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D",
    "https://images.unsplash.com/photo-1589644873574-345111273e9b",
    "https://images.unsplash.com/photo-1599106242383-271adeb2e828"
  ],
  history: "Rajgad Fort, once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, stands as a symbol of strength, strategy, and architectural brilliance. The fort was the seat of power for over 25 years before the capital shifted to Raigad. Its vast expanse covers several miles and offers commanding views of the Sahyadri mountain ranges. Rajgad witnessed significant historical events, including the birth of Shivaji Maharaj’s son Rajaram and the death of his queen, Saibai.\n\nThe fort is divided into four main parts: Balekilla (Citadel), Padmavati Machi, Sanjivani Machi, and Suvela Machi. Each section has its own unique historical and architectural importance:\n\nBalekilla (Citadel): The highest point of Rajgad, offering panoramic views of the surrounding hills. This was the main residence of Shivaji Maharaj and contains remains of old structures, bastions, and watchtowers.\n\nPadmavati Machi: The most popular plateau on the fort, often used as the camping and resting point for trekkers. It houses the Padmavati Temple and several water tanks that provided a sustainable water supply for the soldiers.\n\nSanjivani Machi: An engineering marvel, this long and fortified extension features triple-layered defensive walls. It provided excellent defense during battles and strategic control of the surrounding valleys.\n\nSuvela Machi: Known for its natural beauty and the famous 'Nedhe' (a natural hole in the mountain), this section offers mesmerizing views of Torna Fort and nearby peaks.\n\nApart from these, other major attractions include:\n- Pali Darwaja: The main entrance of the fort, known for its strong structure and historic design.\n- Chor Darwaja: A secret and narrow passageway used during emergencies or surprise attacks.\n- Padmavati Temple: A serene spot near the main entrance, often used by trekkers to rest or stay overnight.\n- Sadar (Rajwada Ruins): The remains of the royal palace complex where Shivaji Maharaj held meetings and conducted administrative work.\n- Gunjavane Darwaja: Another entrance often used by trekkers starting from the Gunjavane base village.\n- Water Cisterns: Several natural and man-made tanks such as Padmavati Talav and Suvela Talav provided water to the residents throughout the year.\n\nBest Time to Visit: The ideal time to visit Rajgad is from October to February when the weather is cool and pleasant. During the monsoon (June to September), the fort turns lush green, but the paths can be slippery.\n\nTrek Difficulty: Moderate. The trek involves steep climbs and rocky paths but rewards trekkers with breathtaking views and an incredible historical experience.\n\nRajgad’s strategic location and magnificent design made it one of the strongest forts in Maharashtra. Even today, its ancient gateways, stone ruins, and panoramic vistas echo the glory of the Maratha Empire and the legacy of Chhatrapati Shivaji Maharaj.",
  whatToCarry: [
    "A sturdy backpack (20-30 litres) with a rain cover.",
    "Trekking shoes with good grip (mandatory).",
    "Torch or headlamp with extra batteries.",
    "At least 2-3 litres of water.",
    "Ready-to-eat food like protein bars, fruits, or dry snacks.",
    "A valid Government ID proof.",
    "Personal medication (if any).",
    "Raincoat or poncho (especially during monsoon).",
    "Extra pair of clothes and a towel."
  ],
  itinerary: [
    { time: "8:00 PM", description: "Departure from Mumbai", day: 1 },
    { time: "4:00 AM", description: "Arrival at base village (Gunjavane or Pali)", day: 2 },
    { time: "5:00 AM", description: "Start trek with morning briefing", day: 2 },
    { time: "6:30 AM", description: "Reach top, explore Padmavati Machi and Balekilla", day: 2 },
    { time: "10:00 AM", description: "Explore Sanjivani and Suvela Machi", day: 2 },
    { time: "1:00 PM", description: "Start descent towards base village", day: 2 },
    { time: "2:30 PM", description: "Lunch and rest at base", day: 2 },
    { time: "4:00 PM", description: "Departure for Mumbai", day: 2 },
    { time: "10:00 PM", description: "Arrival in Mumbai (trip concludes)", day: 2 }
  ],
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15149.37807094207!2d73.6806019445163!3d18.32431871239534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e00815e12041%3A0x1968d374a4a1643c!2sRajgad%20Fort!5e0!3m2!1sen!2sin!4v1677334551225!5m2!1sen!2sin",
  reviews: [
    { name: "Paratik Gawade", comment: "Truly unforgettable experience!", rating: 5 },
    { name: "Rahul Dhayalkar", comment: "Amazing trek, great planning!", rating: 4 },
    { name: "Unknown", comment: "Loved the views and history!", rating: 5 }
  ]
},

  {
    name: "Raigad Trek",
    slug: "raigad-trek",
    desc: "Walk the ancient paths of Shivaji Maharaj’s capital where clouds kiss the fort and history whispers through every stone.",
    rating: "5.0/5",
    price: 1599, // Added price
    img: [
      "https://images.unsplash.com/photo-1615678229953-6116a446a2a9",
      "https://images.unsplash.com/photo-1579333338278-a95229643194",
      "https://images.unsplash.com/photo-1600255957903-5188849b4f74"
    ],
    history: "Raigad Fort served as the magnificent capital of the Maratha Empire after Chhatrapati Shivaji Maharaj was crowned in 1674. Perched atop a hill in the Sahyadris, it was considered impregnable and houses the samadhi (tomb) of Shivaji Maharaj, along with ruins of palaces, markets, and reservoirs, echoing its glorious past.",
    whatToCarry: [
        "A sturdy backpack (20-30 litres) with a rain cover.",
        "Trekking shoes with good grip (mandatory).",
        "Torch or headlamp with extra batteries.",
        "At least 2-3 litres of water.",
        "Ready-to-eat food like protein bars, fruits, or dry snacks.",
        "A valid Government ID proof.",
        "Personal medication (if any).",
        "Raincoat or poncho (especially during monsoon).",
        "Extra pair of clothes and a towel."
    ],
    itinerary: [
      { time: "8:00 PM", description: "Departure from Mumbai", day: 1 },
      { time: "4:00 AM", description: "Base village arrival", day: 2 },
      { time: "5:00 AM", description: "Start trek", day: 2 },
      { time: "6:30 AM", description: "Reach top, explore fort", day: 2 },
      { time: "1:00 PM", description: "Start descent", day: 2 },
      { time: "2:30 PM", description: "Lunch and rest", day: 2 },
      { time: "4:00 PM", description: "Return to Mumbai", day: 2 },
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.43265780516!2d73.4431878441113!3d18.23438804914106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be83f609e535261%3A0x7b3339343355f543!2sRaigad%20Fort!5e0!3m2!1sen!2sin!4v1677334645012!5m2!1sen!2sin",
    reviews: [
      { name: "Paratik Gawade", comment: "Truly unforgettable experience!", rating: 5 },
      { name: "Rahul Dhayalkar", comment: "Amazing trek, great planning!", rating: 4 },
      { name: "Unknown", comment: "Loved the views and history!", rating: 5 }
    ]
  },
  {
   "name": "Naneghat Trek",
   "slug": "naneghat-trek",
   "desc": "Naneghat, which translates to 'Coin Pass', is a historic mountain pass in the Western Ghats range of Maharashtra... The trek is famous for its large, rock-cut cave with ancient Brahmi script inscriptions...",
   "rating": "4.8/5",
   "price": 1299, // Added price
   "img": [
     "https://drive.google.com/uc?export=view&id=16Nf82PmKNIddjwlbUGIXzzp-6ipQBBj0",
     "https://drive.google.com/uc?export=view&id=1uPd05Hw8a22iSFePlhhjOlENMXfll-aH",
     "https://drive.google.com/uc?export=view&id=1NlRUAtiYe8B98UJcGHybQ1rfJkQm7H-U",
     "https://drive.google.com/uc?export=view&id=1HCCMSTyVqDxRueV2_cl9B7vQxAPzglrT",
     "https://drive.google.com/uc?export=view&id=1EBXvt6_K4SCbxFoLu8Ri4NBxQKc1BGCX",
     "https://drive.google.com/uc?export=view&id=1sdq2MM5Zse6w2VOmosnX4JUPokMYf_wk",
     "https://images.unsplash.com/photo-1621749809973-19a9d700354c",
     "https://images.unsplash.com/photo-1600255957903-5188849b4f74",
     "https://images.unsplash.com/photo-1634547265287-c5835b139775"
   ],
   "history": "Naneghat served as a crucial trade corridor during the reign of the Satavahana dynasty... The caves at the summit contain significant inscriptions in Brahmi script, which credit the Satavahana Queen Naganika for the construction and maintenance of the pass...",
   "whatToCarry": [
    "A sturdy backpack (20-30 litres) with a rain cover.",
    "Trekking shoes with good grip (mandatory).",
    "Torch or headlamp with extra batteries (mandatory for the early morning start).",
    "At least 2-3 litres of water.",
    "Some ready-to-eat food like protein bars, fruits, or dry snacks.",
    "A valid Government ID proof.",
    "Personal medication (if any).",
    "Raincoat or poncho.",
    "Extra pair of clothes and a towel.",
    "Power bank for your phone."
  ],
   "itinerary": [
     { "time": "11:00 PM", "description": "Depart from Virar", "day": 1 },
     { "time": "4:30 AM", "description": "Arrive at base village, have breakfast", "day": 2 },
     { "time": "5:30 AM", "description": "Begin the trek to Naneghat", "day": 2 },
     { "time": "9:30 AM", "description": "Reach the summit, explore the caves and plateau", "day": 2 },
     { "time": "12:00 PM", "description": "Start the descent back to the base", "day": 2 },
     { "time": "2:00 PM", "description": "Reach the base village and have lunch", "day": 2 },
     { "time": "3:30 PM - 4:00 PM", "description": "Depart for Virar", "day": 2 },
     { "time": "8:30 PM - 9:00 PM", "description": "Tentative arrival in Virar", "day": 2 }
   ],
   "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30107.03968603444!2d73.6702334444537!3d19.298289852230184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f3c3501a3551%3A0x892552596d99b450!2sNaneghat!5e0!3m2!1sen!2sin!4v1677334710178!5m2!1sen!2sin",
   "reviews": [
     { "name": "Aditi Sharma", "comment": "The historical significance is mind-blowing! Walking the same path as ancient traders was surreal. A must-do in monsoon.", "rating": 5 },
     { "name": "Vikram Patil", "comment": "Challenging but rewarding trek. The views from the top are worth every step. Well organized.", "rating": 5 },
     { "name": "Priya Mehta", "comment": "Loved the blend of history and nature. The caves and inscriptions are fascinating. A bit crowded on weekends.", "rating": 4 }
   ]
  },
  {
    name: "Malvan Beach Getaway",
    slug: "malvan-beach-getaway",
    desc: "Unwind on golden sands, dive into pristine waters, and explore coastal forts in this Konkan paradise.",
    rating: "4.7/5",
    price: 8499, // Added price
    img: [
      "https://images.unsplash.com/photo-1627654324129-1c671f6a7a2d",
      "https://images.unsplash.com/photo-1617277675203-c3b83f5d89a1",
      "https://images.unsplash.com/photo-1607768546710-210a848b55ef"
    ],
    history: "Malvan, located on the Konkan coast of Maharashtra, is famous for its serene beaches, Malvani cuisine, and historical forts like Sindhudurg built by Chhatrapati Shivaji Maharaj in the 17th century. It is also a hub for water sports and scuba diving in India.",
    whatToCarry: [
        "Light cotton clothes and swimwear.",
        "Sunscreen, sunglasses, and a cap or hat.",
        "Flip-flops or comfortable sandals.",
        "A valid Government ID proof.",
        "Personal medication (if any).",
        "Beach towel and extra clothes.",
        "Waterproof bag for electronics.",
        "Camera and power bank.",
        "Basic toiletries."
    ],
    itinerary: [
      { time: "6:00 AM", description: "Depart from Mumbai or Pune", day: 1 },
      { time: "2:00 PM", description: "Check-in at beach resort and lunch", day: 1 },
      { time: "4:00 PM", description: "Visit Rock Garden & sunset at Chivla Beach", day: 1 },
      { time: "8:00 AM", description: "Visit Sindhudurg Fort via boat", day: 2 },
      { time: "12:00 PM", description: "Explore Malvan market and local cuisine", day: 2 },
      { time: "3:00 PM", description: "Scuba diving and water sports at Tarkarli Beach", day: 2 },
      { time: "7:00 PM", description: "Campfire and beach dinner", day: 2 },
      { time: "9:00 AM", "description": "Relaxation at beach / optional backwater boating", day: 3 },
      { time: "12:00 PM", description: "Check-out from hotel", day: 3 },
      { time: "1:00 PM", description: "Lunch and return journey", day: 3 }
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61320.14723861266!2d73.44280594458316!3d16.059278996558237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc001334c987313%3A0x286781816f101374!2sMalvan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677334759654!5m2!1sen!2sin",
    reviews: [
      { name: "Priya Naik", comment: "Best beach vibe with clean water and delicious food!", rating: 5 },
      { name: "Rahul More", comment: "Loved scuba diving here, it's peaceful and thrilling!", rating: 4 },
      { name: "Devanshi Kale", comment: "A great mix of history and nature. Highly recommend!", rating: 5 }
    ]
  },
  {
    name: "Ekvira Devi & Lohagad Trek",
    slug: "ekvira-lohagad-trek",
    desc: "Visit the sacred Ekvira Devi Temple and trek through the lush trails of Lohagad Fort, enjoying panoramic valley views, historic caves, and the monsoon greenery of the Western Ghats.",
    rating: "4.7/5",
    price: 1399, // Suggested price
    img: [
      "https://drive.google.com/uc?export=view&id=1MjehJG5Fj9FADhWyt39sugX7v7ZrRh4U",
      "https://images.unsplash.com/photo-1598387847985-6e2c71f3f42d",
      "https://images.unsplash.com/photo-1578758422163-b6b0b2c6b1b1"
    ],
  history: `The Ekvira Devi Temple and Lohagad Fort together represent a rich blend of spirituality and Maratha heritage in the Western Ghats.

Ekvira Devi Temple, situated beside the ancient Buddhist Karla Caves near Lonavala, dates back over 2,000 years. The temple is dedicated to Goddess Ekvira, revered as the Kuldevi (family goddess) of the Koli and Aagri communities. Legend says the Pandavas built the original shrine overnight during their exile. The site’s early rock-cut architecture links it with the Buddhist cave tradition (circa 2nd century BC), while the temple structure seen today evolved through the Satavahana and later Maratha periods. It stands as a living heritage where ancient Buddhist and Hindu practices coexist harmoniously.

Lohagad Fort, meaning “Iron Fort,” lies about 10 km from the temple and played a key role in the Maratha Empire under Chhatrapati Shivaji Maharaj in the 17th century. The fort’s strategic location helped guard trade routes connecting the Konkan coast and the Deccan plateau. Its robust construction, monsoon-fed moats, and distinct four gates (Ganesh, Narayan, Hanuman, and Maha Darwaza) showcase classic Maratha defense architecture. Lohagad also served briefly as the treasury fort for Shivaji and later came under the rule of the Mughals and Peshwas.

Together, Ekvira Devi Temple and Lohagad Fort symbolize Maharashtra’s layered past — from ancient Buddhist spirituality to medieval Maratha valor — offering trekkers both sacred energy and panoramic history amidst the green Sahyadris.`,
     whatToCarry: [
        "A sturdy backpack (20-30 litres) with a rain cover.",
        "Trekking shoes with good grip (mandatory).",
        "Torch or headlamp with extra batteries.",
        "At least 2-3 litres of water.",
        "Ready-to-eat food like protein bars, fruits, or dry snacks.",
        "A valid Government ID proof.",
        "Personal medication (if any).",
        "Raincoat or poncho (especially during monsoon).",
        "Extra pair of clothes and a towel."
    ],
     itinerary: [
      { time: "8:00 PM", description: "Departure from Mumbai", day: 1 },
      { time: "4:00 AM", description: "Reach base village", day: 2 },
      { time: "4:15 AM", description: "Visit Ekvira Devi Temple", day: 2 },
      { time: "5:30 AM", description: "Breakfast at local spot / packed breakfast", day: 2 },
      { time: "6:00 AM", description: "Start trek towards Lohagad Fort", day: 2 },
      { time: "8:00 AM", description: "Reach top, explore fort & caves", day: 2 },
      { time: "12:00 PM", description: "Start descent", day: 2 },
      { time: "1:30 PM", description: "Lunch / Jevan", day: 2 },

      { time: "3:00 PM", description: "Return to Mumbai", day: 2 },
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.123456789!2d73.650000!3d18.650000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e00000000001%3A0x123456789abcdef!2sLohagad%20Fort!5e0!3m2!1sen!2sin!4v1677334551225!5m2!1sen!2sin",
    reviews: [
      { name: "Sneha Patil", comment: "A beautiful combination of spirituality and trekking!", rating: 5 },
      { name: "Rohan Deshpande", comment: "Loved the monsoon views and fort exploration!", rating: 4 },
      { name: "Ankita More", comment: "The temple visit added a special touch to the trek.", rating: 5 }
    ]
},
{
  name: "Harishchandragad Trek",
  slug: "harishchandragad-trek",
  desc: "Journey into the heart of the Western Ghats where ancient caves, misty cliffs, and the legendary Konkan Kada await your footsteps.",
  rating: "4.8/5",
  price: 999,
  img: [
    "https://images.unsplash.com/photo-1612331689896-09c0d9d0ec0e",
    "https://images.unsplash.com/photo-1576485436506-69d2f0c7a2cc",
    "https://images.unsplash.com/photo-1621518327289-ea5e3d8efbbf"
  ],
  history: "Harishchandragad is a historic hill fort in the Ahmednagar district of Maharashtra, with origins dating back to the 6th century. The fort is known for its ancient caves, temples, and the iconic Konkan Kada — a massive concave cliff offering surreal views and vertigo-inducing drops. The caves near the fort are believed to be carved during the reign of the Kalachuri dynasty, and the temple of Harishchandreshwar stands as a fine example of Hemadpanthi architecture.",
  whatToCarry: [
    "A sturdy backpack (20-30 litres) with a rain cover.",
    "Trekking shoes with good grip (mandatory).",
    "Torch or headlamp with extra batteries.",
    "At least 2-3 litres of water.",
    "Ready-to-eat food like protein bars, fruits, or dry snacks.",
    "A valid Government ID proof.",
    "Personal medication (if any).",
    "Raincoat or poncho (especially during monsoon).",
    "Extra pair of clothes and a towel."
  ],
  itinerary: [
    { time: "9:00 PM", description: "Departure from Mumbai", day: 0 },
    { time: "12:00 AM", description: "Reach Kasara and travel to pachnai", day: 0 },
    { time: "3:30 AM", description: "Reach Pachnai base village", day: 1 },
    { time: "4:30 AM", description: "Start trek from base", day: 1 },
    { time: "7:00 AM", description: "Reach Harishchandragad top, rest & explore", day: 2 },
    { time: "8:30 AM", description: "Visit Kedareshwar Cave & Konkan Kada", day: 1 },
    { time: "11:30 AM", description: "Start descent", day: 1 },
    { time: "1:30 PM", description: "Lunch at base village", day: 1 },
    { time: "3:00 PM", description: "Return journey to Mumbai", day: 1 }
  ],
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.0161615166806!2d73.77165427502383!3d19.383378245214746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd78bbce5542c5%3A0xc3b1d1c9391fdf06!2sHarishchandragad%20Fort!5e0!3m2!1sen!2sin!4v1677334645012!5m2!1sen!2sin",
  reviews: [
    ]
}


];

export default function ExperienceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [activeTab, setActiveTab] = useState('overview');
  const experience: Experience | undefined = experiences.find(exp => exp.slug === slug);

  const pageTitle = experience ? `${experience.name} | Trekking & Travel Experience` : "Experience Not Found";
  const pageDesc = experience?.desc || "Explore trekking and travel adventures in Maharashtra.";
  const pageImg = experience?.img?.[0] || "/default-image.jpg";
  const pageUrl = `https://www.visitkokan.in/${slug}`;

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  if (!experience) {
    return (
      <Layout>
        <div className="error-container">
          <div className="error-content">
            <div className="error-icon">🏔️</div>
            <h2 className="error-title">Experience Not Found</h2>
            <p className="error-text">We couldn't find the adventure you were looking for.</p>
            <Link href="/" className="error-btn">
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const durationInDays = Math.max(...experience.itinerary.map(i => i.day));

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={pageImg} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImg} />
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Modern Hero Section */}
      <section className="modern-hero">
        <div className="hero-background" style={{ backgroundImage: `url(${experience.img[0]})` }}>
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content-modern">
          <div className="container">
            <div className="hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/experiences">Experiences</Link>
              <span>/</span>
              <span>{experience.name}</span>
            </div>

            <h1 className="hero-title-modern">{experience.name}</h1>
            
            <div className="hero-meta-bar">
              <div className="meta-item-hero">
                <span className="meta-icon-hero">⭐</span>
                <span className="meta-text-hero">{experience.rating}</span>
              </div>
              <div className="meta-item-hero">
                <span className="meta-icon-hero">📍</span>
                <span className="meta-text-hero">Maharashtra</span>
              </div>
              <div className="meta-item-hero">
                <span className="meta-icon-hero">⏱️</span>
                <span className="meta-text-hero">{durationInDays} {durationInDays > 1 ? 'Days' : 'Day'}</span>
              </div>
              <div className="meta-item-hero price-highlight">
                <span className="price-amount">₹{experience.price.toLocaleString()}</span>
                <span className="price-label">/ person</span>
              </div>
            </div>

            <div className="hero-action-buttons">
              <button
                className="hero-btn hero-btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#galleryModal"
              >
                <span className="btn-icon">📸</span>
                <span>View Gallery</span>
              </button>
              
              <Link href={`/form/new/${experience.slug}`}>
                <button className="hero-btn hero-btn-secondary">
                  <span className="btn-icon">✓</span>
                  <span>Book Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="detail-content-wrapper">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Main Content */}
            <div className="main-content-column">
              {/* Modern Tab Navigation */}
              <div className="modern-tabs">
                <button
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <span className="tab-icon">📖</span>
                  <span>Overview</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'itinerary' ? 'active' : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  <span className="tab-icon">🗺️</span>
                  <span>Itinerary</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'essentials' ? 'active' : ''}`}
                  onClick={() => setActiveTab('essentials')}
                >
                  <span className="tab-icon">🎒</span>
                  <span>Essentials</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="tab-content-modern">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="tab-pane-modern">
                    <div className="content-section">
                      <h2 className="section-heading">About This Experience</h2>
                      <p className="section-text">{experience.desc}</p>
                    </div>

                    <div className="content-section history-section">
                      <h2 className="section-heading">
                        <span className="heading-icon">📜</span>
                        History & Heritage
                      </h2>
                      <div className="history-content">
                        <p className="section-text">{experience.history}</p>
                      </div>
                    </div>

                    <div className="highlights-grid">
                      <div className="highlight-card">
                        <div className="highlight-icon">🏔️</div>
                        <h3>Scenic Views</h3>
                        <p>Breathtaking panoramic vistas</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon">🏛️</div>
                        <h3>Rich Heritage</h3>
                        <p>Ancient forts and temples</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon">🥾</div>
                        <h3>Adventure</h3>
                        <p>Thrilling trekking experience</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="tab-pane-modern">
                    <h2 className="section-heading">Journey Timeline</h2>
                    <div className="modern-timeline">
                      {experience.itinerary.map((step, idx) => {
                        const prevDay = idx > 0 ? experience.itinerary[idx - 1].day : null;
                        const showDay = step.day !== prevDay;
                        return (
                          <div key={idx} className="timeline-item-modern">
                            {showDay && (
                              <div className="timeline-day-badge">Day {step.day}</div>
                            )}
                            <div className="timeline-marker">
                              <div className="marker-dot"></div>
                              {idx !== experience.itinerary.length - 1 && (
                                <div className="marker-line"></div>
                              )}
                            </div>
                            <div className="timeline-content-box">
                              <div className="timeline-time">{step.time}</div>
                              <div className="timeline-description">{step.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Essentials Tab */}
                {activeTab === 'essentials' && (
                  <div className="tab-pane-modern">
                    <h2 className="section-heading">What to Carry</h2>
                    {experience.whatToCarry && (
                      <div className="essentials-grid">
                        {experience.whatToCarry.map((item, idx) => (
                          <div key={idx} className="essential-item">
                            <div className="essential-check">✓</div>
                            <span className="essential-text">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="sidebar-column">
              <div className="sticky-sidebar">
                {/* Booking Card */}
                <div className="booking-card-modern">
                  <div className="booking-price-section">
                    <div className="price-main">₹{experience.price.toLocaleString()}</div>
                    <div className="price-sub">per person</div>
                  </div>

                  <div className="booking-details">
                    <div className="detail-row">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{durationInDays} {durationInDays > 1 ? 'Days' : 'Day'}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Difficulty</span>
                      <span className="detail-value">Moderate</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Group Size</span>
                      <span className="detail-value">10-20 people</span>
                    </div>
                  </div>

                  <Link href={`/form/new/${experience.slug}`}>
                    <button className="booking-cta-btn">
                      <span>Book This Experience</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </Link>

                  <div className="booking-note">
                    <span className="note-icon">ℹ️</span>
                    <span>Free cancellation up to 24 hours before</span>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="reviews-card-modern">
                  <h3 className="reviews-heading">Traveler Reviews</h3>
                  <ReviewsList slug={experience.slug} />
                  <ReviewForm slug={experience.slug} />
                </div>

                {/* Location Map */}
                <div className="map-card-modern">
                  <h3 className="map-heading">
                    <span className="heading-icon">📍</span>
                    Location
                  </h3>
                  <div className="map-container">
                    <iframe 
                      src={experience.location} 
                      width="100%" 
                      height="300" 
                      style={{border: 0, borderRadius: '12px'}} 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <div className="modal fade" id="galleryModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content gallery-modal-content">
            <div className="modal-header gallery-modal-header">
              <h5 className="modal-title">{experience.name} Gallery</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-0">
              <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {experience.img.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#galleryCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? 'active' : ''}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {experience.img.map((img, idx) => (
                    <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                      <Image
                        src={img}
                        alt={`${experience.name} - ${idx + 1}`}
                        width={1200}
                        height={800}
                        className="gallery-image"
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}