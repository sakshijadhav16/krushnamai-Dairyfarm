import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/customer/Home";
import Registration from "./pages/customer/Registration";
import Login from "./pages/customer/Login";
import Dashboard from "./pages/customer/Dashboard";
import OrderMilk from "./pages/customer/OrderMilk";
import Payment from "./pages/customer/Payment";
import Delivery from "./pages/customer/Delivery";
import Profile from "./pages/customer/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* CUSTOMER REGISTRATION */}
        <Route path="/register" element={<Registration />} />

        {/* CUSTOMER LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* CUSTOMER DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/order-milk" element={<OrderMilk />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/delivery" element={<Delivery />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;