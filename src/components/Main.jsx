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
import Superadmin from "./Superadmin/Superadmin";

const Main = () => {

  const user = useSelector(state => state.userReducer);

  // const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;

  // console.table(screenHeight, screenWidth);

  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/applyforadmin" element={<ApplyForAdmin />} />
          <Route path="/profile" element={ user.token ? <Profile /> : <Auth /> } />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/wallet" element={ user.token ? <Wallet /> : <Auth /> } />
          <Route path="/admindashboard" element={ user.userType === 1 || user.userType === 0 ? <AdminDashboard /> : <Auth /> } />
          <Route path="/superadmindashboard" element={ user.userType === 0 ? <Superadmin /> : <Auth /> } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Main;
