import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
  e.preventDefault();

  // Temporary frontend login
  localStorage.setItem("customerLoggedIn", "true");

  alert("Login successful!");

  navigate("/dashboard");
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login button clicked!");
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="login-overlay">
          <h1>Krushnamai Dairy Farm</h1>

          <p>
            Fresh Cow Milk & Buffalo Milk
            delivered directly to your doorstep.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-box">

          <div className="login-icon">
            🥛
          </div>

          <h2>Customer Login</h2>

          <p className="login-subtitle">
            Login to your Krushnamai Dairy Farm account
          </p>

          <form onSubmit={handleSubmit}>

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="forgot-password">
              <a href="#forgot">Forgot Password?</a>
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              Register Now
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;