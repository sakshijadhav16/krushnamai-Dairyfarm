import React from "react";
import { Link } from "react-router-dom";
import buffaloMilk from "../../assets/buffalo-milk.jpg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <nav className="dashboard-navbar">
        <div className="dashboard-logo">
          🥛 Krushnamai Dairy Farm
        </div>

        <div className="dashboard-nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("customerLoggedIn");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* WELCOME */}
      <section className="welcome-section">
        <div>
          <p className="welcome-small">CUSTOMER DASHBOARD</p>

          <h1>Welcome to Krushnamai Dairy Farm 👋</h1>

          <p>
            Order fresh Cow Milk and Buffalo Milk and manage
            your milk deliveries easily.
          </p>
        </div>

        <div className="customer-icon">
          👤
        </div>
      </section>

      {/* QUICK OPTIONS */}
      <section className="dashboard-content">

        <h2>Choose Your Milk</h2>

        <p className="dashboard-description">
          Select fresh milk from our farm.
        </p>

        <div className="milk-dashboard-cards">

          {/* COW MILK */}
          <div className="dashboard-milk-card">

            <img
              src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80"
              alt="Fresh Cow Milk"
            />

            <div className="dashboard-card-content">

              <div className="milk-title">
                <span>🐄</span>
                <h3>Cow Milk</h3>
              </div>

              <p>
                Fresh and nutritious cow milk collected
                from healthy cows.
              </p>

              <div className="milk-details">
                <span>🥛 Fresh Daily</span>
                <span>✓ Quality Checked</span>
              </div>

              <Link
                to="/order-milk"
                className="dashboard-order-btn"
              >
                Order Cow Milk
              </Link>

            </div>
          </div>

          {/* BUFFALO MILK */}
          <div className="dashboard-milk-card">

            <img
              src={buffaloMilk}
              alt="Fresh Buffalo Milk"
            />

            <div className="dashboard-card-content">

              <div className="milk-title">
                <span>🐃</span>
                <h3>Buffalo Milk</h3>
              </div>

              <p>
                Rich and creamy buffalo milk collected
                from healthy buffaloes.
              </p>

              <div className="milk-details">
                <span>🥛 Fresh Daily</span>
                <span>✓ Quality Checked</span>
              </div>

              <Link
                to="/order-milk"
                className="dashboard-order-btn"
              >
                Order Buffalo Milk
              </Link>

            </div>
          </div>

        </div>

        {/* DASHBOARD OPTIONS */}

        <h2 className="services-heading">
          My Services
        </h2>

        <div className="service-cards">

          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>My Orders</h3>
            <p>View your milk orders.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Delivery Status</h3>
            <p>Track your milk delivery.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Payments</h3>
            <p>View your payment details.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">👤</div>
            <h3>My Profile</h3>
            <p>Manage your customer profile.</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="dashboard-footer">
        <h3>🥛 Krushnamai Dairy Farm</h3>

        <p>
          Fresh Cow Milk & Buffalo Milk | Quality | Trust | Delivery
        </p>

        <p>
          © 2026 Krushnamai Dairy Farm
        </p>
      </footer>

    </div>
  );
}

export default Dashboard;