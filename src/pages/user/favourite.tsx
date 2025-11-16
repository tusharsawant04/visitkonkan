import Sidebar from "./components/sidebar";

export default function Favourite() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h3>Favourite Destinations</h3>

        <div className="row mt-3 g-3">

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <img src="/images/goa.jpg" className="img-fluid rounded" />
              <h5 className="mt-2">Goa</h5>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
