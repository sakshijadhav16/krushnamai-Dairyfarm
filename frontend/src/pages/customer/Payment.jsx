import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentMethod === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (!cardNumber || !cardName || !expiry || !cvv)
    ) {
      alert("Please enter all card details.");
      return;
    }

    alert("Payment successful!");

    navigate("/delivery");
  };

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

      {/* PAYMENT CONTAINER */}
      <div className="payment-container">

        <div className="payment-header">
          <h1>Milk Order Payment 💳</h1>

          <p>
            Complete your payment to confirm your milk order.
          </p>
        </div>

        <div className="payment-content">

          {/* ORDER SUMMARY */}
          <div className="payment-summary">

            <h2>Order Summary</h2>

            <div className="payment-summary-item">
              <span>Milk Type</span>
              <strong>Cow Milk</strong>
            </div>

            <div className="payment-summary-item">
              <span>Quantity</span>
              <strong>1 Liter / Day</strong>
            </div>

            <div className="payment-summary-item">
              <span>Payment Plan</span>
              <strong>15 Days</strong>
            </div>

            <div className="payment-summary-item">
              <span>Delivery</span>
              <strong>Home Delivery</strong>
            </div>

            <div className="payment-total">
              <span>Total Amount</span>
              <strong>₹900</strong>
            </div>

          </div>

          {/* PAYMENT FORM */}
          <form
            className="payment-form"
            onSubmit={handlePayment}
          >

            <h2>Choose Payment Method</h2>

            {/* PAYMENT METHODS */}
            <div className="payment-methods">

              <button
                type="button"
                className={
                  paymentMethod === "UPI"
                    ? "method-btn active"
                    : "method-btn"
                }
                onClick={() => setPaymentMethod("UPI")}
              >
                📱 UPI
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "Card"
                    ? "method-btn active"
                    : "method-btn"
                }
                onClick={() => setPaymentMethod("Card")}
              >
                💳 Card
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "Cash"
                    ? "method-btn active"
                    : "method-btn"
                }
                onClick={() => setPaymentMethod("Cash")}
              >
                💵 Cash
              </button>

            </div>

            {/* UPI */}
            {paymentMethod === "UPI" && (
              <div className="payment-details">

                <label>UPI ID</label>

                <input
                  type="text"
                  placeholder="example@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />

              </div>
            )}

            {/* CARD */}
            {paymentMethod === "Card" && (
              <div className="payment-details">

                <label>Card Number</label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <label>Card Holder Name</label>

                <input
                  type="text"
                  placeholder="Enter card holder name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />

                <div className="card-row">

                  <div>
                    <label>Expiry Date</label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>CVV</label>

                    <input
                      type="password"
                      placeholder="123"
                      maxLength="3"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* CASH */}
            {paymentMethod === "Cash" && (
              <div className="cash-message">

                <div className="cash-icon">💵</div>

                <h3>Cash on Delivery</h3>

                <p>
                  You can pay the delivery person when your
                  milk order is delivered.
                </p>

              </div>
            )}

            {/* PAY BUTTON */}
            <button
              type="submit"
              className="pay-btn"
            >
              {paymentMethod === "Cash"
                ? "Confirm Order"
                : "Pay ₹900"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Payment;