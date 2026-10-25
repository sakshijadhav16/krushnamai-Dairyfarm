
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check whether passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check phone number length
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    // Registration success message
    alert("Registration Successful!");

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="registration-page">
      {/* LEFT IMAGE SECTION */}
      <div className="registration-image">
        <div className="image-overlay">
          <h1>Krushnamai Dairy Farm</h1>
          <p>
            Fresh Cow Milk &amp; Buffalo Milk delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* RIGHT REGISTRATION SECTION */}
      <div className="registration-container">
        <div className="registration-box">
          <div className="registration-logo">🥛</div>

          <h2>Create Customer Account</h2>

          <p className="registration-subtitle">
            Register to order fresh milk from Krushnamai Dairy Farm.
          </p>

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            {/* PHONE NUMBER */}
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                autoComplete="tel"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            {/* DELIVERY ADDRESS */}
            <div className="input-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your delivery address"
                value={formData.address}
                onChange={handleChange}
                autoComplete="street-address"
                rows={3}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
