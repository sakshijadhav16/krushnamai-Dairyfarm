import React from "react";
import { Link } from "react-router-dom";
import "./MyDeliveries.css";

function MyDeliveries() {
  return (
    <div className="my-deliveries-page">

      {/* NAVBAR */}
      <nav className="delivery-navbar">

        <div className="delivery-logo">
          🥛 Krushnamai Dairy Farm
        </div>

        <div className="delivery-nav-links">
          <Link to="/delivery-person">
            Dashboard
          </Link>

          <Link to="/delivery-orders">
            My Deliveries
          </Link>

          <button
            className="delivery-logout"
            onClick={() => {
              localStorage.removeItem("deliveryPersonLoggedIn");
              window.location.href = "/delivery-login";
            }}
          >
            Logout
          </button>
        </div>

      </nav>


      {/* PAGE HEADER */}
      <section className="deliveries-header">

        <p className="section-label">
          DELIVERY MANAGEMENT
        </p>

        <h1>
          My Deliveries
        </h1>

        <p>
          View all milk orders assigned to you.
        </p>

      </section>


      {/* FILTER SECTION */}
      <div className="delivery-filters">

        <button className="filter-active">
          All
        </button>

        <button>
          Pending
        </button>

        <button>
          Out for Delivery
        </button>

        <button>
          Delivered
        </button>

      </div>


      {/* DELIVERY LIST */}
      <section className="deliveries-container">


        {/* ORDER 1 */}
        <div className="my-delivery-card">

          <div className="delivery-card-header">

            <div>
              <h3>
                Order #KM001
              </h3>

              <p>
                25 September 2026
              </p>
            </div>

            <span className="status-pending">
              Pending
            </span>

          </div>


          <div className="delivery-customer">

            <div className="customer-icon">
              👤
            </div>

            <div>
              <h4>
                Sakshi Jadhav
              </h4>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                📍 Satara, Maharashtra
              </p>
            </div>

          </div>


          <div className="delivery-info">

            <div>
              <span>Milk Type</span>
              <strong>🥛 Cow Milk</strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>2 Liters</strong>
            </div>

            <div>
              <span>Plan</span>
              <strong>Monthly</strong>
            </div>

            <div>
              <span>Expected Time</span>
              <strong>7:00 AM</strong>
            </div>

          </div>


          <div className="delivery-card-footer">

            <Link
              to="/delivery-details/KM001"
              className="details-btn"
            >
              View Details
            </Link>

            <button className="mark-delivered-btn">
              ✓ Mark Delivered
            </button>

          </div>

        </div>


        {/* ORDER 2 */}
        <div className="my-delivery-card">

          <div className="delivery-card-header">

            <div>
              <h3>
                Order #KM002
              </h3>

              <p>
                25 September 2026
              </p>
            </div>

            <span className="status-out">
              Out for Delivery
            </span>

          </div>


          <div className="delivery-customer">

            <div className="customer-icon">
              👤
            </div>

            <div>
              <h4>
                Rahul Patil
              </h4>

              <p>
                📞 +91 91234 56789
              </p>

              <p>
                📍 Satara, Maharashtra
              </p>
            </div>

          </div>


          <div className="delivery-info">

            <div>
              <span>Milk Type</span>
              <strong>🐃 Buffalo Milk</strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>1 Liter</strong>
            </div>

            <div>
              <span>Plan</span>
              <strong>15 Days</strong>
            </div>

            <div>
              <span>Expected Time</span>
              <strong>7:30 AM</strong>
            </div>

          </div>


          <div className="delivery-card-footer">

            <Link
              to="/delivery-details/KM002"
              className="details-btn"
            >
              View Details
            </Link>

            <button className="mark-delivered-btn">
              ✓ Mark Delivered
            </button>

          </div>

        </div>


        {/* ORDER 3 */}
        <div className="my-delivery-card">

          <div className="delivery-card-header">

            <div>
              <h3>
                Order #KM003
              </h3>

              <p>
                25 September 2026
              </p>
            </div>

            <span className="status-delivered">
              Delivered
            </span>

          </div>


          <div className="delivery-customer">

            <div className="customer-icon">
              👤
            </div>

            <div>
              <h4>
                Priya Patil
              </h4>

              <p>
                📞 +91 99887 66554
              </p>

              <p>
                📍 Satara, Maharashtra
              </p>
            </div>

          </div>


          <div className="delivery-info">

            <div>
              <span>Milk Type</span>
              <strong>🥛 Cow Milk</strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>1 Liter</strong>
            </div>

            <div>
              <span>Plan</span>
              <strong>Monthly</strong>
            </div>

            <div>
              <span>Delivered At</span>
              <strong>7:15 AM</strong>
            </div>

          </div>


          <div className="delivery-card-footer">

            <Link
              to="/delivery-details/KM003"
              className="details-btn"
            >
              View Details
            </Link>

            <span className="completed-text">
              ✓ Delivery Completed
            </span>

          </div>

        </div>

      </section>


      {/* BACK */}
      <div className="back-dashboard">

        <Link to="/delivery-person">
          ← Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default MyDeliveries;