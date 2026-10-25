import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DeliveryProfile.css";

function DeliveryProfile() {
  const savedProfile = JSON.parse(
    localStorage.getItem("deliveryPersonProfile") || "null"
  );

  const [name, setName] = useState(
    savedProfile?.name || "Delivery Person"
  );
  const [phone, setPhone] = useState(savedProfile?.phone || "");
  const [email, setEmail] = useState(savedProfile?.email || "");
  const [address, setAddress] = useState(savedProfile?.address || "");
  const [area, setArea] = useState(savedProfile?.area || "Satara");

  const handleSubmit = (e) => {
    e.preventDefault();

    const profile = { name, phone, email, address, area };

    localStorage.setItem(
      "deliveryPersonProfile",
      JSON.stringify(profile)
    );

    alert("Profile updated successfully!");
  };

  return (
    <div className="delivery-profile-page">
      <nav className="profile-navbar">
        <h2>🥛 Krushnamai Dairy Farm</h2>

        <div>
          <Link to="/delivery-person">Dashboard</Link>
          <Link to="/delivery-orders">My Deliveries</Link>
        </div>
      </nav>

      <main className="profile-container">
        <div className="profile-heading">
          <span>DELIVERY PERSON PANEL</span>
          <h1>My Profile</h1>
          <p>View and update your personal information.</p>
        </div>

        <section className="profile-card">
          <div className="profile-avatar">🚚</div>
          <h2>{name || "Delivery Person"}</h2>
          <p className="profile-role">Delivery Person</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Mobile Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[6-9][0-9]{9}"
              maxLength="10"
              placeholder="Enter 10-digit mobile number"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
            />

            <label>Residential Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              rows="3"
              required
            />

            <label>Assigned Delivery Area</label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />

            <button type="submit">Save Profile</button>
          </form>

          <Link to="/delivery-person" className="profile-back">
            ← Back to Dashboard
          </Link>
        </section>
      </main>
    </div>
  );
}

export default DeliveryProfile;
