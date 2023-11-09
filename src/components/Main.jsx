import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./Navbar/Navbar";
import Profile from './User/Profile/Profile';
import Wallet from './User/Wallet/Wallet';
import EditProfile from './User/EditProfile/EditProfile';
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Auth from "./Auth/Auth";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import ApplyForAdmin from "./Admin/AuthAdmin/ApplyForAdmin";
import { useSelector } from "react-redux";

const Main = () => {

  const user = useSelector(state => state.userReducer.token);

  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/applyforadmin" element={<ApplyForAdmin />} />
          <Route path="/profile" element={ user ? <Profile /> : <Auth /> } />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/wallet" element={user ? <Wallet /> : <Auth /> } />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Main;
