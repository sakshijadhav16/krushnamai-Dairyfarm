import React from "react";
import { Link } from "react-router-dom";
import "./DeliveryPerson.css";

function DeliveryPerson() {
  return (
    <div className="delivery-person-page">

      {/* NAVBAR */}
      <nav className="delivery-nav">

        <div className="delivery-logo">
          🥛 Krushnamai Dairy Farm
        </div>

        <div className="delivery-nav-links">
          <Link to="/delivery-person">Dashboard</Link>
          <Link to="/delivery-orders">My Deliveries</Link>

          <button
            className="delivery-logout"
            onClick={() => {
              localStorage.removeItem("deliveryPersonLoggedIn");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>

      </nav>

      {/* WELCOME */}
      <section className="delivery-welcome">

        <div>
          <p className="welcome-small">DELIVERY PERSON</p>

          <h1>
            Welcome, Rajesh 👋
          </h1>

          <p>
            Manage your assigned milk deliveries and update
            delivery status easily.
          </p>
        </div>

        <div className="delivery-avatar">
          👨‍🌾
        </div>

      </section>

      {/* SUMMARY CARDS */}
      <section className="delivery-summary">

        <div className="summary-card">
          <div className="summary-icon">📦</div>

          <div>
            <span>Assigned Orders</span>
            <h2>8</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🚚</div>

          <div>
            <span>Pending Deliveries</span>
            <h2>5</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✅</div>

          <div>
            <span>Completed</span>
            <h2>3</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">💰</div>

          <div>
            <span>Today's Collection</span>
            <h2>₹1,250</h2>
          </div>
        </div>

      </section>

      {/* TODAY'S DELIVERIES */}
      <section className="assigned-section">

        <div className="section-heading">
          <div>
            <p className="section-label">TODAY'S WORK</p>
            <h2>Assigned Deliveries</h2>
          </div>

          <span className="delivery-date">
            25 September 2026
          </span>
        </div>

        {/* DELIVERY 1 */}
        <div className="delivery-order-card">

          <div className="order-number">
            <span>Order #KM001</span>
            <strong className="pending-status">
              Pending
            </strong>
          </div>

          <div className="customer-info">

            <div className="customer-icon">
              👤
            </div>

            <div>
              <h3>Sakshi Jadhav</h3>

              <p>📍 Satara, Maharashtra</p>

              <p>📞 +91 98765 43210</p>
            </div>

          </div>

          <div className="milk-info-delivery">

            <span>🥛 Cow Milk</span>

            <span>📦 2 Liters</span>

            <span>💳 Monthly</span>

          </div>

          <div className="delivery-card-actions">

            <button className="navigate-btn">
              📍 View Address
            </button>

            <button className="complete-btn">
              ✓ Mark Delivered
            </button>

          </div>

        </div>

        {/* DELIVERY 2 */}
        <div className="delivery-order-card">

          <div className="order-number">
            <span>Order #KM002</span>
            <strong className="pending-status">
              Pending
            </strong>
          </div>

          <div className="customer-info">

            <div className="customer-icon">
              👤
            </div>

            <div>
              <h3>Rahul Patil</h3>

              <p>📍 Satara, Maharashtra</p>

              <p>📞 +91 91234 56789</p>
            </div>

          </div>

          <div className="milk-info-delivery">

            <span>🐃 Buffalo Milk</span>

            <span>📦 1 Liter</span>

            <span>💳 15 Days</span>

          </div>

          <div className="delivery-card-actions">

            <button className="navigate-btn">
              📍 View Address
            </button>

            <button className="complete-btn">
              ✓ Mark Delivered
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default DeliveryPerson;