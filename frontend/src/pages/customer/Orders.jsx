import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders-page">

      <div className="orders-header">
        <h1>My Orders</h1>
        <p>View and track your milk orders.</p>
      </div>

      <div className="orders-container">

        <div className="order-card">
          <div className="order-top">
            <h3>Order #KM001</h3>
            <span className="order-status">Confirmed</span>
          </div>

          <div className="order-details">
            <p><strong>Milk:</strong> Cow Milk</p>
            <p><strong>Quantity:</strong> 2 Liters</p>
            <p><strong>Plan:</strong> Monthly</p>
            <p><strong>Order Date:</strong> 25 September 2026</p>
            <p><strong>Delivery:</strong> Daily</p>
          </div>

          <Link to="/delivery" className="order-btn">
            View Delivery
          </Link>
        </div>

        <div className="order-card">
          <div className="order-top">
            <h3>Order #KM002</h3>
            <span className="order-status">Delivered</span>
          </div>

          <div className="order-details">
            <p><strong>Milk:</strong> Buffalo Milk</p>
            <p><strong>Quantity:</strong> 1 Liter</p>
            <p><strong>Plan:</strong> 15 Days</p>
            <p><strong>Order Date:</strong> 10 September 2026</p>
            <p><strong>Delivery:</strong> Completed</p>
          </div>

          <Link to="/delivery" className="order-btn">
            View Delivery
          </Link>
        </div>

      </div>

      <div className="orders-footer">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>

    </div>
  );
}

export default Orders;