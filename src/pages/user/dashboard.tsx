import Sidebar from "./components/sidebar";

export default function Dashboard() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1 p-4">

        <h3>Welcome Back 👋</h3>
        <p className="text-muted">Your travel overview</p>

        {/* QUICK STATS */}
        <div className="row g-3 mt-3">
          
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h5>4</h5>
              <span className="text-muted">Trips</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h5>12</h5>
              <span className="text-muted">Favourites</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h5>340</h5>
              <span className="text-muted">Reward Points</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
