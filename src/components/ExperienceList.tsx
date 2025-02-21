// components/ExperienceList.tsx
import Image from "next/image";

interface Experience {
  name: string;
  price: string;
  rating: string;
  img: string;
}

const experiences: Experience[] = [
  { name: "Beachfront Bungalow", price: "$150/night", rating: "4.9 (2,000+ reviews)", img: "/bungalow.jpg" },
  { name: "Farm-to-Table Dinner", price: "$65/person", rating: "4.8 (800+ reviews)", img: "/dinner.jpg" },
  { name: "Sunset Yoga Class", price: "$20/class", rating: "4.7 (500+ reviews)", img: "/yoga.jpg" },
  { name: "Winery Tour", price: "$25/tour", rating: "4.9 (1,000+ reviews)", img: "/winery.jpg" },
  { name: "Deep Sea Fishing", price: "$75/person", rating: "4.5 (300+ reviews)", img: "/fishing.jpg" },
];

export default function ExperienceList() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Explore experiences, events, and guides</h2>
      <div className="row g-4">
        {experiences.map((exp, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card border-0 shadow-sm h-100">
              <Image src={exp.img} width={400} height={250} className="card-img-top" alt={exp.name} />
              <div className="card-body">
                <h5 className="fw-semibold">{exp.name}</h5>
                <p className="mb-1 text-primary fw-bold">{exp.price}</p>
                <p className="text-muted small">⭐ {exp.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary">Explore more experiences</button>
      </div>
    </div>
  );
}
