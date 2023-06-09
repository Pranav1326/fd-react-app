import React, { useState } from 'react';
import AccountHistory from './AccountHistory';
import ProfileDetails from './ProfileDetails';
import FdHistory from './FdHistory';
import './profile.css';
import ProfileCard from './ProfileCard';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import CreateFd from '../CreateFd/CreateFd';
import { logout } from '../../../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [ fdBtn, setfdBtn ] = useState(false);
  const [ accountBtn, setAccountBtn ] = useState(false);
  const [ btn, setBtn ] = useState("fd");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(localStorage.getItem("token")));

  const fdHistory = user.FdDetails.map(fd => {
    return(
      <FdHistory
        key={fd._id}
        transaction={"created fd"}
        createdAt={new Date(fd.createdAt)}
        matureDate={fd.matureDate}
        amount={fd.amount}
        interest={fd.interest}
        months={fd.months}
        maturityValue={fd.maturityValue}
      />
    );
  });

  const renderAccountDetails = (btn) => {
    switch (btn) {
      case "createfd":
        return(
          <div className="fd-history">
            <h1 className='heading'> Create Fixed Deposit </h1>
            {<CreateFd />}
          </div>
        );
      case "fd":
        return(
          <div className="fd-history">
            <h1 className='heading'> FD History </h1>
            {fdHistory}
          </div>
        );
      case "account":
        return(
          <div className="account-history">
          <h1 className='heading'> Account History </h1>

          <AccountHistory
            transaction={"created fd"}
            createdAt={new Date()}
            amount={"5000"}
          />
          <AccountHistory
            transaction={"withdraw"}
            createdAt={new Date()}
            amount={5000}
            transactionMehtod={"card"}
            cardNo={"1234"}
          />
          <AccountHistory
            transaction={"created fd"}
            createdAt={new Date()}
            amount={"5000"}
          />
          <AccountHistory
            transaction={"created fd"}
            createdAt={new Date()}
            amount={"10000"}
          />
          <AccountHistory
            transaction={"deposit"}
            createdAt={new Date()}
            amount={20000}
            transactionMehtod={"card"}
            cardNo={"0578"}
          />
        </div>
        );
      case "profile":
        return(
          <ProfileDetails 
            username={user.userInfo.username}
            email={user.userInfo.email}
            account={"Student"}
            work={"-"}
            totalfd={user.userInfo.Fd.length}
            totalBalance={user.walletDetails.money}
          />
        );
      default:
        return;
    }
  }

  return (
    <div className='profile-main'>
      <div className="profilecard-btns">
        {/* Profile Details Card */}
        <ProfileCard 
          username={user.userInfo.username}
          balance={user.walletDetails.money}
          totalfds={user.FdDetails.length}
          runningfds={user.FdDetails}
          maturedfds={user.FdDetails}
          brokenfds={user.FdDetails}
        />
        {/* Buttons */}
        <div className="account-btns">
          <button 
            className={btn === "createfd" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setfdBtn(!fdBtn)
              setBtn("createfd")
            }}>Create FD</button>
          <button 
            className={btn === "fd" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setfdBtn(!fdBtn)
              setBtn("fd")
            }}>FD History</button>
          <button 
            className={btn === "account" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setAccountBtn(!accountBtn)
              setBtn("account")
            }}>Account History</button>
          <button 
            className={btn === "profile" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setAccountBtn(!accountBtn)
              setBtn("profile")
            }}>Profile Details</button>
          <button 
            className={btn === "logout" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              logout(dispatch, navigate);
            }}>Logout</button>
        </div>
      </div>
      <div className="account-details">
        {renderAccountDetails(btn)}
      </div>
    </div>
  );
}

export default Profile