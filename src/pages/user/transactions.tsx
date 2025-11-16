import Sidebar from "./components/sidebar";

export default function Transactions() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h3>Transaction History</h3>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Trip</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>17 Oct</td>
              <td>Goa</td>
              <td>₹6999</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
