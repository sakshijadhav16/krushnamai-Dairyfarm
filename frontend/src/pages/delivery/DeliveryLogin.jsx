import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryLogin.css";

function DeliveryLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    localStorage.setItem("deliveryPersonLoggedIn", "true");

    alert("Delivery Person Login Successful!");

    navigate("/delivery-person");
  };

  return (
    <div className="delivery-login-page">

      <div className="delivery-login-left">
        <div className="delivery-login-overlay">
          <h1>Krushnamai Dairy Farm</h1>

          <p>
            Fresh Cow Milk & Buffalo Milk
            delivered to our customers.
          </p>
        </div>
      </div>

      <div className="delivery-login-right">

        <div className="delivery-login-box">

          <div className="delivery-login-icon">
            👨‍🌾
          </div>

          <h2>Delivery Person Login</h2>

          <p className="delivery-login-subtitle">
            Login to manage your milk deliveries
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="delivery-forgot">
              <a href="#forgot">Forgot Password?</a>
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="delivery-login-note">
            Authorized delivery personnel only
          </p>

        </div>

      </div>

    </div>
  );
}

export default DeliveryLogin;