import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderMilk.css";

function OrderMilk() {
  const navigate = useNavigate();

  const [milkType, setMilkType] = useState("Cow Milk");
  const [quantity, setQuantity] = useState(1);
  const [plan, setPlan] = useState("15 Days");
  const [address, setAddress] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    alert("Milk order placed successfully!");

    navigate("/payment");
  };

  return (
    <div className="order-page">

      {/* NAVBAR */}
      <nav className="order-navbar">
        <div className="order-logo">
          🐄 Krushnamai Dairy Farm
        </div>

        <div className="order-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>

      {/* ORDER SECTION */}
      <div className="order-container">

        <div className="order-header">
          <h1>Order Fresh Milk 🥛</h1>
          <p>
            Choose your milk type, quantity and delivery plan.
          </p>
        </div>

        <form className="order-form" onSubmit={handleOrder}>

          {/* MILK TYPE */}
          <div className="form-section">
            <h2>Select Milk Type</h2>

            <div className="milk-options">

              <div
                className={`milk-option ${
                  milkType === "Cow Milk" ? "selected" : ""
                }`}
                onClick={() => setMilkType("Cow Milk")}
              >
                <div className="milk-icon">🐄</div>
                <h3>Cow Milk</h3>
                <p>Fresh and healthy cow milk</p>
                <span>₹60 / Liter</span>
              </div>

              <div
                className={`milk-option ${
                  milkType === "Buffalo Milk" ? "selected" : ""
                }`}
                onClick={() => setMilkType("Buffalo Milk")}
              >
                <div className="milk-icon">🐃</div>
                <h3>Buffalo Milk</h3>
                <p>Rich and creamy buffalo milk</p>
                <span>₹70 / Liter</span>
              </div>

            </div>
          </div>

          {/* QUANTITY */}
          <div className="form-section">

            <h2>Milk Quantity</h2>

            <div className="quantity-box">

              <button
                type="button"
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity} Liter</span>

              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>

            </div>

          </div>

          {/* DELIVERY PLAN */}
          <div className="form-section">

            <h2>Choose Payment Plan</h2>

            <div className="plan-options">

              <label className={plan === "15 Days" ? "plan-selected" : ""}>
                <input
                  type="radio"
                  name="plan"
                  value="15 Days"
                  checked={plan === "15 Days"}
                  onChange={(e) => setPlan(e.target.value)}
                />

                <div>
                  <strong>15 Days</strong>
                  <p>Pay every 15 days</p>
                </div>
              </label>

              <label className={plan === "Monthly" ? "plan-selected" : ""}>
                <input
                  type="radio"
                  name="plan"
                  value="Monthly"
                  checked={plan === "Monthly"}
                  onChange={(e) => setPlan(e.target.value)}
                />

                <div>
                  <strong>Monthly</strong>
                  <p>Pay once every month</p>
                </div>
              </label>

            </div>

          </div>

          {/* ADDRESS */}
          <div className="form-section">

            <h2>Delivery Address</h2>

            <textarea
              placeholder="Enter your complete delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
            ></textarea>

          </div>

          {/* ORDER SUMMARY */}
          <div className="order-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Milk Type</span>
              <strong>{milkType}</strong>
            </div>

            <div className="summary-row">
              <span>Quantity</span>
              <strong>{quantity} Liter</strong>
            </div>

            <div className="summary-row">
              <span>Payment Plan</span>
              <strong>{plan}</strong>
            </div>

            <div className="summary-row total">
              <span>Estimated Price</span>

              <strong>
                ₹
                {milkType === "Cow Milk"
                  ? quantity * 60
                  : quantity * 70}
                / Day
              </strong>
            </div>

          </div>

          {/* BUTTON */}
          <button type="submit" className="place-order-btn">
            Place Milk Order 🥛
          </button>

        </form>

      </div>

    </div>
  );
}

export default OrderMilk;