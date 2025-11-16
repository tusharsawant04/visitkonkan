import Sidebar from "./components/sidebar";

export default function Profile() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">

        <h3>Profile</h3>
        <p className="text-muted">Update your details</p>

        <div className="card p-4 shadow-sm" style={{maxWidth:"500px"}}>
          <label>Name</label>
          <input type="text" className="form-control mb-3" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" className="form-control mb-3" placeholder="abc@mail.com"/>

          <label>Mobile</label>
          <input type="text" className="form-control mb-3" placeholder="9876543210"/>

          <button className="btn btn-primary">Save</button>
        </div>

      </div>
    </div>
  );
}
