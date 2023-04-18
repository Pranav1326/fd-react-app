import React from 'react';
import './profiledetails.css';
import { useNavigate } from 'react-router-dom';

const ProfileDetails = (props) => {

  const navigate = useNavigate();

  return (
    <div className='profile-details-main'>
      <h1 className="heading">Profile Details</h1>
      <div className="profile-details-div">
        <div className="name">
          <span>Name</span>
          <p>{props.username}</p>
        </div>
        <div className="email">
          <span>Email</span>
          <p>{props.email}</p>
        </div>
        <div className="account">
          <span>Account</span>
          <p>{props.account}</p>
        </div>
        <div className="work">
          <span>Work</span>
          <p>{props.work}</p>
        </div>
        <div className="totalfds">
          <span>Total FDs</span>
          <p>{props.totalfd}</p>
        </div>
        <div className="totalbalance">
          <span>Total Balance</span>
          <p>{props.totalBalance}</p>
        </div>
        {/* <div className="balance">
          <span>Available Balance</span>
          <p>{props.username}</p>
          <p>{"12000"}</p>
        </div> */}
        <button className='edit-profile-btn' onClick={() => navigate('/editprofile')}>Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfileDetails;