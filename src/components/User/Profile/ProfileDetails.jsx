import React, { useEffect, useState } from 'react';
import './profiledetails.css';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../api/fdApi';

const ProfileDetails = (props) => {

  const navigate = useNavigate();

  const [ userDetails, setUserDetails ] = useState(null);
  const [totalBalance, setTotalBalance] = useState(0);

  let totalBalanceCalculated = 0;

  useEffect(() => {

    getUser({ userId: props.userId}, setUserDetails);

    props.FdDetails.forEach(fd => {
      if(fd.status === "running"){
        totalBalanceCalculated += fd.amount;
      }
    });
    setTotalBalance(totalBalanceCalculated);
  }, []);
  
  return (
    <div className='profile-details-main'>
      <h1 className="heading">Profile Details</h1>
      <div className="profile-details-div">
        <div className="name">
          <span>Name</span>
          <p>{ props.username }</p>
        </div>
        <div className="email">
          <span>Email</span>
          <p>{ props.email }</p>
        </div>
        <div className="account">
          <span>Account</span>
          <p>{ userDetails && (userDetails.account ? userDetails.account : "-") }</p>
        </div>
        <div className="work">
          <span>Work</span>
          <p>{ userDetails && (userDetails.work ? userDetails.work : "-") }</p>
        </div>
        <div className="totalfds">
          <span>Total FDs</span>
          <p>{ props.totalfd }</p>
        </div>
        <div className="totalbalance">
          <span>Total Balance</span>
          <p>{ totalBalance }</p>
        </div>
        <div className="balance">
          <span>Available Balance</span>
          <p>{ props.availableBalance }</p>
        </div>
        <button className='edit-profile-btn' onClick={() => navigate('/editprofile')}>Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfileDetails;