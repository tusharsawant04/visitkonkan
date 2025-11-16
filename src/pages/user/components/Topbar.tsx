export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{width:"220px"}}>
      
      <h4 className="mb-4">Travel App</h4>

      <a href="/dashboard" className="d-block mb-3 text-white">Dashboard</a>
      <a href="/profile" className="d-block mb-3 text-white">Profile</a>
      <a href="/favourite" className="d-block mb-3 text-white">Favourite</a>
      <a href="/messages" className="d-block mb-3 text-white">Messages</a>
      <a href="/transactions" className="d-block mb-3 text-white">Transactions</a>
      <a href="/rewards" className="d-block mb-3 text-white">Reward Points</a>
      <a href="/bookings" className="d-block mb-3 text-white">Bookings</a>

    </div>
  );
}
