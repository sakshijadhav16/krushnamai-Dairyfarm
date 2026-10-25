
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  // Get the customer's milk order
  const [order] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentMilkOrder")) || null;
    } catch {
      return null;
    }
  });

  // Format dates for display
  const formatDate = (date) => {
    if (!date) return "Not specified";

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Not specified";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Calculate order amount
  const quantity = Number(order?.quantity) || 0;

  const planDays = {
    "1 Day": 1,
    "7 Days": 7,
    "15 Days": 15,
    "30 Days": 30,
  };

  const duration =
    Number(order?.duration) ||
    planDays[order?.plan] ||
    1;

  const pricePerLiter = Number(order?.pricePerLiter) || 0;

  const dailyAmount =
    Number(order?.dailyAmount) ||
    pricePerLiter * quantity;

  const totalAmount =
    Number(order?.totalAmount) ||
    dailyAmount * duration;

  // Confirm order without collecting payment
  const handleConfirmOrder = () => {
    if (!order) {
      alert("Please place a milk order first.");
      navigate("/order-milk");
      return;
    }

    if (!order.address || !order.startDate) {
      alert("Please provide your delivery address and start date.");
      navigate("/order-milk");
      return;
    }

    const updatedOrder = {
      ...order,
      orderId:
        order.orderId || `KM${Date.now().toString().slice(-6)}`,
      deliveryFrequency: "Daily",
      paymentMethod: "Pay After Subscription",
      paymentStatus: "Pending",
      deliveryStatus: "Order Confirmed",
      orderConfirmed: true,
      orderDate: new Date().toISOString(),
    };

    // Save the confirmed order
    localStorage.setItem(
      "currentMilkOrder",
      JSON.stringify(updatedOrder)
    );

    // Save order history without duplicating the same order
    let previousOrders = [];

    try {
      previousOrders = JSON.parse(
        localStorage.getItem("milkOrders") || "[]"
      );

      if (!Array.isArray(previousOrders)) {
        previousOrders = [];
      }
    } catch {
      previousOrders = [];
    }

    const orderExists = previousOrders.some(
      (item) => item.orderId === updatedOrder.orderId
    );

    if (!orderExists) {
      localStorage.setItem(
        "milkOrders",
        JSON.stringify([...previousOrders, updatedOrder])
      );
    }

    alert(
      "Your milk order has been confirmed! You can pay after your subscription period ends."
    );

    navigate("/delivery");
  };

  // If no order exists
  if (!order) {
    return (
      <div className="payment-page">
        <nav className="payment-navbar">
          <div className="payment-logo">
            🐄 Krushnamai Dairy Farm
          </div>

          <div className="payment-nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/order-milk">Order Milk</Link>
          </div>
        </nav>

        <div className="payment-container">
          <div className="payment-header">
            <h1>No Milk Order Found</h1>
            <p>
              Please place your milk order before confirming it.
            </p>

            <Link to="/order-milk" className="pay-btn">
              Order Milk
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* NAVBAR */}
      <nav className="payment-navbar">
        <div className="payment-logo">
          🐄 Krushnamai Dairy Farm
        </div>

        <div className="payment-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/order-milk">Order Milk</Link>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <div className="payment-container">
        <div className="payment-header">
          <h1>Confirm Your Milk Order 🥛</h1>

          <p>
            Review your order details. You do not need to pay now.
          </p>
        </div>

        <div className="payment-content">
          {/* ORDER SUMMARY */}
          <div className="payment-summary">
            <h2>Order Summary</h2>

            <div className="payment-summary-item">
              <span>Order ID</span>
              <strong>
                {order.orderId || "Generated on confirmation"}
              </strong>
            </div>

            <div className="payment-summary-item">
              <span>Milk Type</span>
              <strong>{order.milkType}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Quantity</span>
              <strong>{quantity} Liter(s) / Day</strong>
            </div>

            <div className="payment-summary-item">
              <span>Subscription Plan</span>
              <strong>{order.plan}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Subscription Duration</span>
              <strong>{duration} Day(s)</strong>
            </div>

            <div className="payment-summary-item">
              <span>Delivery Frequency</span>
              <strong>Daily</strong>
            </div>

            <div className="payment-summary-item">
              <span>Start Date</span>
              <strong>{formatDate(order.startDate)}</strong>
            </div>

            <div className="payment-summary-item">
              <span>End Date</span>
              <strong>{formatDate(order.endDate)}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Delivery Address</span>
              <strong>{order.address}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Price Per Liter</span>
              <strong>₹{pricePerLiter.toFixed(2)}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Daily Amount</span>
              <strong>₹{dailyAmount.toFixed(2)}</strong>
            </div>

            <div className="payment-total">
              <span>Total Subscription Amount</span>
              <strong>₹{totalAmount.toFixed(2)}</strong>
            </div>

            <div className="payment-summary-item">
              <span>Payment Due Date</span>
              <strong>{formatDate(order.paymentDueDate)}</strong>
            </div>
          </div>

          {/* PAYMENT INFORMATION */}
          <div className="payment-form">
            <h2>Payment Information</h2>

            <div className="cash-message">
              <div className="cash-icon">🗓️</div>

              <h3>Pay After Subscription Ends</h3>

              <p>
                Your order will be confirmed now. Fresh milk will be
                delivered to your address daily during your selected
                subscription period.
              </p>

              <p>
                You do not need to make a payment today. The total
                subscription amount will be due after your selected
                subscription period ends.
              </p>
            </div>

            <div className="payment-summary-item">
              <span>Payment Method</span>
              <strong>Pay After Subscription</strong>
            </div>

            <div className="payment-summary-item">
              <span>Payment Status</span>
              <strong className="pending-payment">Pending</strong>
            </div>

            <div className="payment-summary-item">
              <span>Order Status</span>
              <strong>Awaiting Confirmation</strong>
            </div>

            <button
              type="button"
              className="pay-btn"
              onClick={handleConfirmOrder}
            >
              Confirm Milk Order
            </button>

            <p className="payment-note">
              No payment will be collected when you confirm this order.
            </p>

            <Link to="/order-milk" className="back-order-link">
              ← Go Back and Edit Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
