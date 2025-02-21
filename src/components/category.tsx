// components/Category.tsx

interface Category {
    title: string;
    desc: string;
    icon: string;
  }
  
  const categories: Category[] = [
    { title: "Beaches", desc: "1,000+ beaches to explore", icon: "🏖️" },
    { title: "Cafes", desc: "Taste local cuisine", icon: "☕" },
    { title: "Spas", desc: "Relax and rejuvenate", icon: "💆" },
    { title: "Vineyards", desc: "100+ vineyards", icon: "🍷" },
    { title: "Fishing Charters", desc: "Catch your dinner", icon: "🎣" },
    { title: "Golf Courses", desc: "Play a round with friends", icon: "⛳" },
  ];
  
  export default function Category() {
    return (
      <div className="container my-5">
        <h2 className="fw-bold mb-4">Discover experiences for every mood</h2>
        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <div className="card text-center p-3 border-0 shadow-sm">
                <div className="display-5">{cat.icon}</div>
                <h5 className="mt-2 fw-semibold">{cat.title}</h5>
                <p className="text-muted small">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  