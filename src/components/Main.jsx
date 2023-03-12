import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./Navbar/Navbar";
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import AuthUser from './User/AuthUser/AuthUser';
import Profile from './User/Profile/Profile';
import Wallet from './User/Wallet/Wallet';
import CreateFd from './User/CreateFd/CreateFd';
import Deposit from './User/Deposit/Deposit';
import EditProfile from './User/EditProfile/EditProfile';
import UserFds from './User/UserFds/UserFds';
import Withdraw from './User/Withdraw/Withdraw';
import AuthAdmin from './Admin/AuthAdmin/AuthAdmin';
import CreateRate from './Admin/CreateRate/CreateRate';

const Main = () => {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/authuser" element={<AuthUser />} />
          <Route path="/authadmin" element={<AuthAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/createFd" element={<CreateFd />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/createrate" element={<CreateRate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
