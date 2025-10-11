import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import './discover.css';
import { color } from 'framer-motion';

// --- INTERFACE AND DATA ---
export interface Experience {
  name: string;
  slug: string;
  desc: string;
  rating: string;
  price: number; // Price property added
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
    desc: "Rajgad is an enormous fort. Rajgad means King of all forts. It located south-west 60 Kms from Pune. Chhatrapati Shivaji Maharaj spent a great deal of his time on this fort close to 25 years. Rajgad is famous for its construction layout...",
    rating: "5.0/5",
    price: 1499, // Added price
    img: [
      "https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D",
      "https://images.unsplash.com/photo-1589644873574-345111273e9b",
      "https://images.unsplash.com/photo-1599106242383-271adeb2e828"
    ],
    history: "Rajgad Fort, once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, was a strategic military base and residence. Its architecture and stories reflect the strength and vision of the Maratha rulers.",
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
    history: "Lohagad Fort, built during the 18th century, played a key role in the Maratha Empire under Chhatrapati Shivaji Maharaj. The Ekvira Devi Temple at the base is a revered pilgrimage site, drawing devotees year-round.",
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
  price: 1799,
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
    { time: "9:00 PM", description: "Departure from Mumbai", day: 1 },
    { time: "3:30 AM", description: "Reach Pachnai base village", day: 2 },
    { time: "4:30 AM", description: "Start trek from base", day: 2 },
    { time: "7:00 AM", description: "Reach Harishchandragad top, rest & explore", day: 2 },
    { time: "8:30 AM", description: "Visit Kedareshwar Cave & Konkan Kada", day: 2 },
    { time: "11:30 AM", description: "Start descent", day: 2 },
    { time: "1:30 PM", description: "Lunch at base village", day: 2 },
    { time: "3:00 PM", description: "Return journey to Mumbai", day: 2 }
  ],
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.0161615166806!2d73.77165427502383!3d19.383378245214746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd78bbce5542c5%3A0xc3b1d1c9391fdf06!2sHarishchandragad%20Fort!5e0!3m2!1sen!2sin!4v1677334645012!5m2!1sen!2sin",
  reviews: [
    ]
}


];


// --- COMPONENT ---
export default function ExperienceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const experience: Experience | undefined = experiences.find(exp => exp.slug === slug);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  if (!experience) {
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2 className="text-danger">Experience not found</h2>
          <p className="text-muted">We couldn't find the page you were looking for.</p>
          <Link href="/" className="btn btn-outline-primary mt-3">
            <i className="bi bi-arrow-left me-2"></i>Back to Discover
          </Link>
        </div>
      </Layout>
    );
  }

  const durationInDays = Math.max(...experience.itinerary.map(i => i.day));

  return (
    <Layout>
      {/* --- HERO SECTION with GALLERY BUTTON --- */}
      <div className="container-fluid p-0">
          <div className="hero-image-container" style={{ backgroundImage: `url(${experience.img[0]})` }}>
              <div className="hero-overlay">
                  <div className="container text-center text-white">
                      <h1 className="display-4 fw-bold">{experience.name}</h1>
                      <p className="lead mb-0 text-warning">⭐ {experience.rating}</p>
                      <button 
                        className="btn btn-light mt-4" 
                        data-bs-toggle="modal" 
                        data-bs-target="#galleryModal">
                          <i className="bi bi-images me-2"></i>View Gallery
                      </button>
                  </div>
              </div>
          </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container my-5">
        <div className="row g-5">
          {/* --- LEFT CONTENT COLUMN --- */}
          <div className="col-lg-8">
            
            {/* -- TABS -- */}
            <ul className="nav nav-tabs nav-fill mb-4" id="experienceTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-pane" type="button" role="tab" aria-controls="overview-pane" aria-selected="true">
                  <i className="bi bi-card-text me-2"></i>Overview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="itinerary-tab" data-bs-toggle="tab" data-bs-target="#itinerary-pane" type="button" role="tab" aria-controls="itinerary-pane" aria-selected="false">
                  <i className="bi bi-compass me-2"></i>Itinerary
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="carry-tab" data-bs-toggle="tab" data-bs-target="#carry-pane" type="button" role="tab" aria-controls="carry-pane" aria-selected="false">
                  <i className="bi bi-backpack2 me-2"></i>What to Carry
                </button>
              </li>
            </ul>

            <div className="tab-content" id="experienceTabContent">
              {/* -- OVERVIEW PANE -- */}
              <div className="tab-pane fade show active" id="overview-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex={0}>
                <h4 className="fw-bold">About this experience</h4>
                <p className="text-muted">{experience.desc}</p>
                
                <div className="mt-4 p-4 bg-light rounded">
                    <h5 className="fw-semibold mb-2">📜 History</h5>
                    <p className="mb-0">{experience.history}</p>
                </div>
              </div>

              {/* -- ITINERARY PANE -- */}
              <div className="tab-pane fade" id="itinerary-pane" role="tabpanel" aria-labelledby="itinerary-tab" tabIndex={0}>
                  <div className="itinerary-container">
                    {experience.itinerary.map((step, idx) => {
                        const prevDay = idx > 0 ? experience.itinerary[idx - 1].day : null;
                        const showDay = step.day !== prevDay;
                        return (
                        <div key={idx} className="d-flex position-relative mb-4 ps-4 timeline-item">
                            <div className="timeline-icon me-3 d-flex flex-column align-items-center">
                                <div className="dot bg-primary"></div>
                                {idx !== experience.itinerary.length - 1 && <div className="line"></div>}
                            </div>
                            <div>
                                {showDay && (
                                <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill mb-2">Day {step.day}</span>
                                )}
                                <div className="text-muted">
                                <strong>{step.time}:</strong> {step.description}
                                </div>
                            </div>
                        </div>
                        );
                    })}
                  </div>
              </div>
              
              {/* -- WHAT TO CARRY PANE -- */}
              <div className="tab-pane fade" id="carry-pane" role="tabpanel" aria-labelledby="carry-tab" tabIndex={0}>
                 {experience.whatToCarry && experience.whatToCarry.length > 0 && (
                    <ul className="list-group list-group-flush">
                    {experience.whatToCarry.map((item, idx) => (
                        <li key={idx} className="list-group-item d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-3"></i>
                            {item}
                        </li>
                    ))}
                    </ul>
                )}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDEBAR COLUMN --- */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '2rem' }}>
              
              {/* -- ENHANCED BOOKING CARD -- */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold">Ready to Explore?</h5>
                  
                  {/* DYNAMIC PRICE DISPLAY */}
                  <p className="mb-1">
                    <strong className="text-primary fs-4"   style={{
                        color: "linear-gradient(135deg, #1CA9C9, #005f73)",
                       
                      }}>
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(experience.price)}
                    </strong> 
                    <span className="text-muted" > / person</span>
                  </p>

                  <p className="text-muted small">Taxes and fees may apply.</p>
                  
                  <div className="d-flex justify-content-between text-muted border-top pt-3 mt-3">
                      <span><i className="bi bi-clock me-2"></i>Duration</span>
                      <strong>{durationInDays} {durationInDays > 1 ? 'Days' : 'Day'}</strong>
                  </div>
                  
                  <div className="d-grid gap-2 mt-4">
                    <a href="form/new/naneghat" className="btn btn-lg text-white"
                      style={{
                        background: "linear-gradient(135deg, #1CA9C9, #005f73)",
                        borderRadius: "8px",
                        fontWeight: "500",
                        padding: "8px 16px",
                        fontSize: "15px"
                      }}>
                      Book Now
                    </a>
                  
                  </div>
                </div>
              </div>

              {/* -- UPGRADED REVIEWS -- */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">What travelers are saying</h6>
                {experience.reviews.slice(0, 2).map((review, idx) => (
                   <div key={idx} className="card border-0 bg-light mb-3">
                     <div className="card-body d-flex">
                        <div className="me-3">
                            <div className="avatar bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center">
                                {review.name.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <h6 className="card-title mb-0">{review.name}</h6>
                            <p className="text-warning small mb-1">
                                {Array(review.rating).fill(0).map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                                {Array(5 - review.rating).fill(0).map((_, i) => <i key={i} className="bi bi-star"></i>)}
                            </p>
                            <p className="card-text small text-muted">"{review.comment}"</p>
                        </div>
                     </div>
                   </div>
                ))}
              </div>

              {/* -- LOCATION MAP -- */}
              <div>
                <h6 className="fw-bold mb-2">📍 Location</h6>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe src={experience.location} width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- GALLERY MODAL --- */}
      <div className="modal fade" id="galleryModal" tabIndex={-1} aria-labelledby="galleryModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="galleryModalLabel">{experience.name} - Gallery</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {experience.img.map((img, idx) => (
                                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                                    <Image
                                        src={img}
                                        alt={`${experience.name} - Image ${idx + 1}`}
                                        width={800}
                                        height={600}
                                        className="d-block w-100"
                                        style={{ objectFit: 'contain', height: '70vh' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
       
      {/* --- BOOKING MODAL --- */}
       <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = {
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
                  message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                  experience: experience.name,
                };
                try {
                  const res = await fetch('/api/book', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  const result = await res.json();
                  if (res.ok) {
                    alert('Booking inquiry sent successfully!');
                    form.reset();
                    const modalEl = document.getElementById('bookingModal');
                    if (modalEl) {
                        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min');
                        const modal = bootstrap.Modal.getInstance(modalEl);
                        modal?.hide();
                    }
                  } else {
                    alert(result.message || 'Failed to send booking.');
                  }
                } catch (err) {
                  console.error(err);
                  alert('An unexpected error occurred.');
                }
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="bookingModalLabel">Book This Experience</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message (Optional)</label>
                  <textarea name="message" className="form-control" rows={3}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}