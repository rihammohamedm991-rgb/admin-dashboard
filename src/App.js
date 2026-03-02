import { useEffect } from "react";
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white min-vh-100 p-4">
          <h4 className="text-center mb-4 fw-bold">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a className="nav-link text-white sidebar-link" href="https://example.com">Dashboard</a>
            </li>
            <li className="nav-item mb-3">
              <a className="nav-link text-white sidebar-link" href="https://example.com">Products</a>
            </li>
            <li className="nav-item mb-3">
              <a className="nav-link text-white sidebar-link" href="https://example.com">Orders</a>
            </li>
          </ul>
        </div>

        {/* Main */}
        <div className="col-md-10 p-5 bg-light">

          <h2 className="mb-4 fw-bold">Dashboard Overview</h2>

          {/* Stats */}
          <div className="row mb-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card shadow border-0 stat-card">
                <div className="card-body">
                  <h6 className="text-muted">Total Products</h6>
                  <h3 className="fw-bold">120</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card shadow border-0 stat-card">
                <div className="card-body">
                  <h6 className="text-muted">Total Orders</h6>
                  <h3 className="fw-bold">75</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card shadow border-0 stat-card">
                <div className="card-body">
                  <h6 className="text-muted">Revenue</h6>
                  <h3 className="fw-bold">$5400</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card shadow border-0" data-aos="fade-right">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Products</h5>
                <button className="btn btn-primary px-4">Add Product</button>
              </div>

              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>$100</td>
                    <td>Electronics</td>
                    <td>
                      <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                      <button className="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Product 2</td>
                    <td>$250</td>
                    <td>Clothing</td>
                    <td>
                      <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                      <button className="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
