import React from "react";
import { Link } from "react-router-dom";
import "./Delivery.css";

function Delivery() {
  return (
    <div className="delivery-page">

      {/* NAVBAR */}
      <nav className="delivery-navbar">

        <div className="delivery-logo">
          🐄 Krushnamai Dairy Farm
        </div>

        <div className="delivery-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Home</Link>
        </div>

      </nav>

      {/* MAIN CONTENT */}
      <div className="delivery-container">

        <div className="delivery-header">
          <div className="success-icon">✓</div>

          <h1>Order Confirmed!</h1>

          <p>
            Your milk order has been successfully placed.
          </p>
        </div>

        {/* ORDER DETAILS */}
        <div className="delivery-card">

          <div className="card-title">
            <h2>Delivery Details 🚚</h2>

            <span className="order-status">
              Order Confirmed
            </span>
          </div>

          <div className="delivery-info">

            <div className="info-item">
              <span>Order ID</span>
              <strong>#KMDF1001</strong>
            </div>

            <div className="info-item">
              <span>Milk Type</span>
              <strong>Fresh Cow Milk</strong>
            </div>

            <div className="info-item">
              <span>Quantity</span>
              <strong>1 Liter / Day</strong>
            </div>

            <div className="info-item">
              <span>Payment</span>
              <strong>Paid ₹900</strong>
            </div>

            <div className="info-item">
              <span>Delivery Plan</span>
              <strong>15 Days</strong>
            </div>

          </div>

        </div>

        {/* DELIVERY TRACKER */}
        <div className="delivery-card">

          <h2>Track Your Delivery</h2>

          <div className="tracking">

            {/* STEP 1 */}
            <div className="tracking-step completed">

              <div className="step-icon">
                ✓
              </div>

              <div className="step-content">
                <h3>Order Confirmed</h3>

                <p>
                  Your milk order has been confirmed.
                </p>

                <small>Today, 10:00 AM</small>
              </div>

            </div>

            {/* STEP 2 */}
            <div className="tracking-step completed">

              <div className="step-icon">
                ✓
              </div>

              <div className="step-content">
                <h3>Delivery Person Assigned</h3>

                <p>
                  Your order has been assigned to a delivery person.
                </p>

                <small>Today, 10:15 AM</small>
              </div>

            </div>

            {/* STEP 3 */}
            <div className="tracking-step active">

              <div className="step-icon">
                🚚
              </div>

              <div className="step-content">
                <h3>Out for Delivery</h3>

                <p>
                  Your fresh milk is on the way.
                </p>

                <small>Expected by 7:00 PM</small>
              </div>

            </div>

            {/* STEP 4 */}
            <div className="tracking-step">

              <div className="step-icon">
                ✓
              </div>

              <div className="step-content">
                <h3>Delivered</h3>

                <p>
                  Milk will be delivered to your address.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* DELIVERY PERSON */}
        <div className="delivery-card delivery-person-card">

          <h2>Delivery Person</h2>

          <div className="person-details">

            <div className="person-avatar">
              👨‍🌾
            </div>

            <div>
              <h3>Rajesh Patil</h3>

              <p>
                Delivery Person
              </p>

              <p>
                📞 +91 98765 43210
              </p>
            </div>

          </div>

        </div>

        {/* ADDRESS */}
        <div className="delivery-card">

          <h2>Delivery Address</h2>

          <div className="address-box">
            <span>📍</span>

            <p>
              Your registered delivery address
              <br />
              Krushnamai Dairy Farm Customer
            </p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="delivery-buttons">

          <Link
            to="/dashboard"
            className="dashboard-btn"
          >
            Back to Dashboard
          </Link>

          <Link
            to="/order-milk"
            className="new-order-btn"
          >
            Order More Milk 🥛
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Delivery;