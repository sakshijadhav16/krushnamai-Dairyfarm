import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Sakshi Jadhav");
  const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("sakshi@gmail.com");
  const [address, setAddress] = useState(
    "Krushnamai Dairy Farm Customer Address"
  );

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      {/* NAVBAR */}
      <nav className="profile-navbar">

        <div className="profile-logo">
          🐄 Krushnamai Dairy Farm
        </div>

        <div className="profile-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Home</Link>
        </div>

      </nav>

      {/* PROFILE CONTAINER */}
      <div className="profile-container">

        <div className="profile-header">
          <div className="profile-avatar">
            👤
          </div>

          <h1>My Profile</h1>

          <p>
            View and manage your customer information.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="profile-card">

          <div className="profile-card-header">

            <div>
              <h2>Personal Information</h2>
              <p>Your registered customer details</p>
            </div>

            {!isEditing && (
              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            )}

          </div>

          {/* FORM */}
          <div className="profile-form">

            {/* NAME */}
            <div className="profile-field">

              <label>Full Name</label>

              <input
                type="text"
                value={name}
                disabled={!isEditing}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

            {/* PHONE */}
            <div className="profile-field">

              <label>Phone Number</label>

              <input
                type="text"
                value={phone}
                disabled={!isEditing}
                maxLength="10"
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

            {/* EMAIL */}
            <div className="profile-field">

              <label>Email Address</label>

              <input
                type="email"
                value={email}
                disabled={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            {/* ADDRESS */}
            <div className="profile-field full-width">

              <label>Delivery Address</label>

              <textarea
                rows="4"
                value={address}
                disabled={!isEditing}
                onChange={(e) => setAddress(e.target.value)}
              />

            </div>

          </div>

          {/* SAVE BUTTON */}
          {isEditing && (
            <div className="profile-actions">

              <button
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>
          )}

        </div>

        {/* ACCOUNT INFORMATION */}
        <div className="profile-card account-card">

          <h2>Account Information</h2>

          <div className="account-row">
            <span>Account Type</span>
            <strong>Customer</strong>
          </div>

          <div className="account-row">
            <span>Customer ID</span>
            <strong>KMDF-C1001</strong>
          </div>

          <div className="account-row">
            <span>Account Status</span>
            <strong className="active-status">
              Active
            </strong>
          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="profile-card">

          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <Link to="/order-milk">
              🥛 Order Milk
            </Link>

            <Link to="/delivery">
              🚚 Track Delivery
            </Link>

            <Link to="/dashboard">
              📊 Dashboard
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;