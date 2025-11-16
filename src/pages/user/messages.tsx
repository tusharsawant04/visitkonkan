import Sidebar from "./components/sidebar";

export default function Messages() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h3>Messages</h3>

        <div className="list-group mt-3">
          <div className="list-group-item">
            Ticket #1290 — Your booking is confirmed!
          </div>
          <div className="list-group-item">
            Offer — Get 10% off today!
          </div>
        </div>
      </div>

    </div>
  );
}
