import "./../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Load Bootstrap CSS globally
import BootstrapClient from "@/components/BootstrapClient";

export default function Sidebar() {
  return (
    
    <div className="bg-dark text-white p-3 vh-100" style={{width:"220px"}}>
       <BootstrapClient />
      <h4 className="mb-4">Travel App</h4>

      <a href="/user/dashboard" className="d-block mb-3 text-white">Dashboard</a>
      <a href="/user/profile" className="d-block mb-3 text-white">Profile</a>
      <a href="/user/favourite" className="d-block mb-3 text-white">Favourite</a>
      <a href="/user/messages" className="d-block mb-3 text-white">Messages</a>
      <a href="/user/transactions" className="d-block mb-3 text-white">Transactions</a>
      <a href="/user/rewards" className="d-block mb-3 text-white">Reward Points</a>
      <a href="/user/bookings" className="d-block mb-3 text-white">Bookings</a>

    </div>
  );
}
