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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Registration Successful!");

  navigate("/login");
};

  return (
    <div className="registration-page">

      <div className="registration-image">
        <div className="image-overlay">
          <h1>Krushnamai Dairy Farm</h1>
          <p>
            Fresh Cow Milk & Buffalo Milk delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="registration-container">

        <div className="registration-box">

          <div className="registration-logo">
            🥛
          </div>

          <h2>Create Customer Account</h2>

          <p className="registration-subtitle">
            Register to order fresh milk from Krushnamai Dairy Farm.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter your delivery address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Registration;