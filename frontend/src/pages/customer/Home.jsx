import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const cowMilkImage =
  "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80";

const buffaloMilkImage =
  "https://images.unsplash.com/photo-1595433562696-a8b1c0d0f7b7?auto=format&fit=crop&w=900&q=80";

const farmImage =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80";

function Home() {
  const navigate = useNavigate();

const [showLoginPopup, setShowLoginPopup] = useState(false);
const [showOrderPopup, setShowOrderPopup] = useState(false);

const [milkType, setMilkType] = useState("Cow Milk");
const [quantity, setQuantity] = useState(1);
const [plan, setPlan] = useState("15 Days");
const [address, setAddress] = useState("");

const handleOrderClick = () => {
  const isLoggedIn = localStorage.getItem("customerLoggedIn");

  if (isLoggedIn === "true") {
    setShowOrderPopup(true);
  } else {
    setShowLoginPopup(true);
  }
};

const handleOrderSubmit = (e) => {
  e.preventDefault();

  if (!address.trim()) {
    alert("Please enter your delivery address.");
    return;
  }

  setShowOrderPopup(false);

  navigate("/payment");
};
  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          🥛 Krushnamai Dairy Farm
        </div>

        

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#milk">Milk</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Contact</a>
          <div className="nav-buttons">
            <Link to="/register" className="register-btn">
              Customer Register
            </Link>

            <Link to="/login" className="login-btn">
              Customer Login
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO KRUSHNAMAI DAIRY FARM</p>

          <h1>
            Fresh & Pure Milk
            <br />
            <span>From Our Farm</span>
          </h1>

          <p>
            Get fresh, hygienic and quality-tested Cow Milk and
            Buffalo Milk delivered directly to your doorstep.
          </p>

          <div className="hero-buttons">
            <button
              className="order-btn"
              onClick={handleOrderClick}
            >
              Order Milk
            </button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-image">
          <img src={farmImage} alt="Krushnamai Dairy Farm" />
        </div>

        <div className="about-content">
          <p className="section-title">ABOUT US</p>

          <h2>Welcome to Krushnamai Dairy Farm</h2>

          <p>
            Krushnamai Dairy Farm provides fresh and quality milk
            directly from our farm. We focus on maintaining healthy
            cattle and delivering pure milk to our customers.
          </p>

          <div className="about-points">
            <div>✓ Fresh Cow Milk</div>
            <div>✓ Fresh Buffalo Milk</div>
            <div>✓ Healthy Cattle</div>
            <div>✓ Daily Milk Delivery</div>
            <div>✓ Quality Tested Milk</div>
          </div>

          <button className="primary-btn">Read More</button>
        </div>
      </section>

      {/* MILK PRODUCTS */}
      <section id="milk" className="milk-section">
        <div className="section-heading">
          <p className="section-title">OUR MILK</p>

          <h2>Choose Your Fresh Milk</h2>

          <p>
            Select the type of fresh milk according to your preference.
          </p>
        </div>

        <div className="milk-cards">

          {/* COW MILK */}
          <div className="milk-card">
            <img src={cowMilkImage} alt="Fresh Cow Milk" />

            <div className="milk-card-content">
              <span className="milk-icon">🐄</span>

              <h3>Cow Milk</h3>

              <p>
                Fresh and nutritious cow milk collected from
                healthy cows at our farm.
              </p>

              <div className="milk-info">
                <strong>Fresh Every Day</strong>
                <span>Quality Checked</span>
              </div>

              <button className="order-btn">
                Order Cow Milk
              </button>
            </div>
          </div>

          {/* BUFFALO MILK */}
          <div className="milk-card">
            <img src={buffaloMilkImage} alt="Fresh Buffalo Milk" />

            <div className="milk-card-content">
              <span className="milk-icon">🐃</span>

              <h3>Buffalo Milk</h3>

              <p>
                Rich and creamy buffalo milk collected from
                healthy buffaloes at our farm.
              </p>

              <div className="milk-info">
                <strong>Fresh Every Day</strong>
                <span>Quality Checked</span>
              </div>

              <button className="order-btn">
                Order Buffalo Milk
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="delivery-section">
        <div className="section-heading">
          <p className="section-title">MILK DELIVERY</p>

          <h2>How Your Milk Reaches You</h2>
        </div>

        <div className="delivery-steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Place Order</h3>
            <p>
              Customer selects Cow Milk or Buffalo Milk and
              places an order.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Order Assigned</h3>
            <p>
              Admin assigns the order to an available delivery person.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Milk Delivered</h3>
            <p>
              Delivery person delivers fresh milk to the customer's
              address.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="section-heading">
          <p className="section-title">WHY CHOOSE US</p>

          <h2>Quality You Can Trust</h2>
        </div>

        <div className="why-cards">

          <div className="why-card">
            <div className="why-icon">🥛</div>
            <h3>Fresh Milk</h3>
            <p>
              Fresh Cow and Buffalo Milk supplied every day.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🐄</div>
            <h3>Healthy Cattle</h3>
            <p>
              Proper care and regular health monitoring of cattle.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🚚</div>
            <h3>Doorstep Delivery</h3>
            <p>
              Milk delivered directly to your registered address.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">✓</div>
            <h3>Quality Checked</h3>
            <p>
              Milk quality is checked before delivery.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div>
          <p className="section-title">CONTACT US</p>

          <h2>Get Fresh Milk Every Day</h2>

          <p>
            For milk orders and delivery information, contact
            Krushnamai Dairy Farm.
          </p>
        </div>

        <div className="contact-info">
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📧 krushnamaidairy@gmail.com</p>
          <p>📍 Maharashtra, India</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>🥛 Krushnamai Dairy Farm</h3>

        <p>
          Fresh Cow Milk & Buffalo Milk | Quality | Trust | Delivery
        </p>

        <p className="copyright">
          © 2026 Krushnamai Dairy Farm. All Rights Reserved.
        </p>
      </footer>

      {/* LOGIN POPUP */}

{showLoginPopup && (
  <div
    className="popup-overlay"
    onClick={() => setShowLoginPopup(false)}
  >

    <div
      className="login-popup"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="popup-close"
        onClick={() => setShowLoginPopup(false)}
      >
        ×
      </button>

      <div className="popup-icon">
        🔐
      </div>

      <h2>Login Required</h2>

      <p>
        Please login or register before placing a milk order.
      </p>

      <div className="popup-buttons">

        <Link
          to="/login"
          className="popup-login-btn"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="popup-register-btn"
        >
          Customer Register
        </Link>

      </div>

    </div>

  </div>
)}

{/* ORDER POPUP */}

{showOrderPopup && (
  <div
    className="popup-overlay"
    onClick={() => setShowOrderPopup(false)}
  >

    <div
      className="order-popup"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="popup-close"
        onClick={() => setShowOrderPopup(false)}
      >
        ×
      </button>

      <h2>🥛 Order Fresh Milk</h2>

      <p className="popup-subtitle">
        Choose your milk and delivery details.
      </p>

      <form onSubmit={handleOrderSubmit}>

        {/* MILK TYPE */}

        <label>Milk Type</label>

        <div className="popup-milk-options">

          <button
            type="button"
            className={
              milkType === "Cow Milk"
                ? "popup-milk selected"
                : "popup-milk"
            }
            onClick={() => setMilkType("Cow Milk")}
          >
            🐄
            <span>Cow Milk</span>
            <small>₹60 / Liter</small>
          </button>

          <button
            type="button"
            className={
              milkType === "Buffalo Milk"
                ? "popup-milk selected"
                : "popup-milk"
            }
            onClick={() => setMilkType("Buffalo Milk")}
          >
            🐃
            <span>Buffalo Milk</span>
            <small>₹70 / Liter</small>
          </button>

        </div>

        {/* QUANTITY */}

        <label>Quantity</label>

        <div className="popup-quantity">

          <button
            type="button"
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
          >
            −
          </button>

          <span>{quantity} Liter / Day</span>

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>

        </div>

        {/* PAYMENT PLAN */}

        <label>Payment Plan</label>

        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="15 Days">
            15 Days
          </option>

          <option value="Monthly">
            Monthly
          </option>
        </select>

        {/* ADDRESS */}

        <label>Delivery Address</label>

        <textarea
          rows="3"
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* SUMMARY */}

        <div className="popup-order-summary">

          <div>
            <span>Milk</span>
            <strong>{milkType}</strong>
          </div>

          <div>
            <span>Quantity</span>
            <strong>{quantity} L/day</strong>
          </div>

          <div>
            <span>Plan</span>
            <strong>{plan}</strong>
          </div>

          <div className="popup-total">
            <span>Daily Amount</span>

            <strong>
              ₹
              {milkType === "Cow Milk"
                ? quantity * 60
                : quantity * 70}
            </strong>
          </div>

        </div>

        <button
          type="submit"
          className="confirm-order-btn"
        >
          Continue to Payment →
        </button>

      </form>

    </div>

  </div>
)}

      

    </div>
  );
}

export default Home;