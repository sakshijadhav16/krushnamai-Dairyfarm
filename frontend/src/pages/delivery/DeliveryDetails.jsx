import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./DeliveryDetails.css";

function DeliveryDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [order, setOrder] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentMilkOrder")) || null;
    } catch {
      return null;
    }
  });

  const [status, setStatus] = useState(
    order?.deliveryStatus || "Order Confirmed"
  );

  const formatDate = (date) => {
    if (!date) return "Not specified";

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) return "Not specified";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const updateStatus = () => {
    if (!order) return;

    const updatedOrder = {
      ...order,
      deliveryStatus: status,
    };

    setOrder(updatedOrder);

    localStorage.setItem(
      "currentMilkOrder",
      JSON.stringify(updatedOrder)
    );

    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("milkOrders") || "[]"
      );

      const updatedOrders = savedOrders.map((item) =>
        item.orderId === updatedOrder.orderId
          ? { ...item, deliveryStatus: status }
          : item
      );

      localStorage.setItem("milkOrders", JSON.stringify(updatedOrders));
    } catch {
      // The current order is still saved if history is unavailable.
    }

    alert("Delivery status updated successfully!");
  };

  if (!order || (id && order.orderId && id !== order.orderId)) {
    return (
      <div className="delivery-details-page">
        <nav className="details-navbar">
          <Link to="/delivery-person" className="details-logo">
            🐄 Krushnamai Dairy Farm
          </Link>
        </nav>

        <div className="details-empty">
          <h2>Delivery Not Found</h2>
          <p>We could not find this order in the saved demo data.</p>
          <Link to="/delivery-orders" className="details-button">
            Back to My Deliveries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="delivery-details-page">
      {/* NAVBAR */}
      <nav className="details-navbar">
        <Link to="/delivery-person" className="details-logo">
          🐄 Krushnamai Dairy Farm
        </Link>

        <div className="details-nav">
          <Link to="/delivery-person">Dashboard</Link>
          <Link to="/delivery-orders">My Deliveries</Link>
        </div>
      </nav>

      {/* HEADER */}
      <header className="details-header">
        <div>
          <h1>Delivery Details 🚚</h1>
          <p>Check order information and update delivery progress.</p>
        </div>

        <span className="details-order-id">
          Order ID: {order.orderId || id || "N/A"}
        </span>
      </header>

      <main className="details-grid">
        {/* CUSTOMER INFORMATION */}
        <section className="details-card">
          <h2>👤 Customer Information</h2>

          <div className="details-item">
            <span>Customer Name</span>
            <strong>{order.customerName || "Registered Customer"}</strong>
          </div>

          <div className="details-item">
            <span>Phone Number</span>
            <strong>{order.phone || "Not available"}</strong>
          </div>

          <div className="details-item">
            <span>Delivery Address</span>
            <strong>{order.address || "Address not available"}</strong>
          </div>
        </section>

        {/* ORDER INFORMATION */}
        <section className="details-card">
          <h2>🥛 Milk Order Information</h2>

          <div className="details-item">
            <span>Milk Type</span>
            <strong>{order.milkType || "Not specified"}</strong>
          </div>

          <div className="details-item">
            <span>Daily Quantity</span>
            <strong>{order.quantity || 0} Liter(s)</strong>
          </div>

          <div className="details-item">
            <span>Subscription Plan</span>
            <strong>{order.plan || "Not specified"}</strong>
          </div>

          <div className="details-item">
            <span>Delivery Frequency</span>
            <strong>{order.deliveryFrequency || "Daily"}</strong>
          </div>

          <div className="details-item">
            <span>Start Date</span>
            <strong>{formatDate(order.startDate)}</strong>
          </div>

          <div className="details-item">
            <span>End Date</span>
            <strong>{formatDate(order.endDate)}</strong>
          </div>
        </section>

        {/* PAYMENT INFORMATION */}
        <section className="details-card">
          <h2>💳 Payment Information</h2>

          <div className="details-item">
            <span>Total Amount</span>
            <strong>
              ₹{Number(order.totalAmount || 0).toFixed(2)}
            </strong>
          </div>

          <div className="details-item">
            <span>Payment Method</span>
            <strong>{order.paymentMethod || "Pay After Subscription"}</strong>
          </div>

          <div className="details-item">
            <span>Payment Status</span>
            <strong className="pending-label">
              {order.paymentStatus || "Pending"}
            </strong>
          </div>

          <div className="details-item">
            <span>Payment Due Date</span>
            <strong>{formatDate(order.paymentDueDate)}</strong>
          </div>
        </section>

        {/* DELIVERY STATUS */}
        <section className="details-card status-card">
          <h2>📦 Delivery Status</h2>

          <div className="details-item">
            <span>Current Status</span>
            <strong className="status-label">{order.deliveryStatus || status}</strong>
          </div>

          <label htmlFor="deliveryStatus">Update delivery status</label>

          <select
            id="deliveryStatus"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="Order Confirmed">Order Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Failed">Failed</option>
          </select>

          <button
            type="button"
            className="details-button update-button"
            onClick={updateStatus}
          >
            Update Status
          </button>
        </section>
      </main>

      {/* BACK BUTTON */}
      <div className="details-footer">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/delivery-orders")}
        >
          ← Back to My Deliveries
        </button>
      </div>
    </div>
  );
}

export default DeliveryDetails;
