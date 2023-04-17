import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./Navbar/Navbar";
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Profile from './User/Profile/Profile';
import Wallet from './User/Wallet/Wallet';
import CreateFd from './User/CreateFd/CreateFd';
import Deposit from './User/Deposit/Deposit';
import EditProfile from './User/EditProfile/EditProfile';
// import UserFds from './User/UserFds/UserFds';
import Withdraw from './User/Withdraw/Withdraw';
import CreateRate from './Admin/CreateRate/CreateRate';
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Auth from "./Auth/Auth";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {

  const user = useSelector(state => state.userReducer.token);
  const dispatch = useDispatch();

  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<Signin />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={ user ? <Profile /> : <Auth /> } />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/createfd" element={<CreateFd />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Main;
