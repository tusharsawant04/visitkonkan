import Sidebar from "./components/sidebar";

export default function Rewards() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h3>Reward Points</h3>

        <div className="card p-4 shadow-sm" style={{maxWidth:"400px"}}>
          <h1 className="text-success">340</h1>
          <p>Total Coins Available</p>
        </div>
      </div>
    </div>
  );
}
