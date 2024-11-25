import React, { useEffect, useState } from 'react';
import './profile.css';
import AccountHistory from './AccountHistory';
import ProfileDetails from './ProfileDetails';
import CreateFd from '../CreateFd/CreateFd';
import FdHistory from './FdHistory';
import ProfileCard from './ProfileCard';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import { logout } from '../../../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../api/url';

const Profile = () => {

  const [ wallet, setWallet ] = useState(null);
  const [ fdBtn, setfdBtn ] = useState(false);
  const [ accountBtn, setAccountBtn ] = useState(false);
  const [ btn, setBtn ] = useState("createfd");
  const [ accountHistory, setAccountHistory ] = useState(null);
  const [ userFds, setUserFds ] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));

  const renderAccountHistory = accountHistory && accountHistory.reverse().map(transaction => {
    return (
      <AccountHistory
        key={transaction._id}
        transaction={transaction.transaction}
        createdAt={new Date(transaction.createdAt)}
        amount={transaction.amount}
      />
    );
  });

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem('fdt'));
    const headersList = {
      "Accept": "*/*",
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json" 
    }
    const fetchAccountHistory = async () => {
      try {
        const res = await axios.post(`${baseUrl}/transaction`, { userId: user.userInfo._id });
        setAccountHistory(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAccountHistory();
    const getWalletDetails = async (data, setWallet) => {
      const reqOptions = {
          url: `${baseUrl}/wallet/${data.userId}`,
          method: "GET",
          headers: headersList,
          data: data,
      }
      try {
          const res = await axios.request(reqOptions);
          setWallet(res.data);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    }
    getWalletDetails({ userId: user.userInfo._id}, setWallet);
    const getUsersAllFds = async (data) => {
      const reqOptions = {
        url: `${baseUrl}/fd/${user.userInfo._id}`,
        method: "GET",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        setUserFds(res.data);
    } catch (error) {
      console.log(error);
    }
    }
    getUsersAllFds({ userId: user.userInfo._id });
    // eslint-disable-next-line
  }, []);

  const fdHistory = userFds && userFds.reverse().map(fd => {
    return (
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
        return (
          <div className="fd-history">
            <h1 className='heading'> Create Fixed Deposit </h1>
            {<CreateFd setBtn={setBtn} />}
          </div>
        );
      case "fd":
        return (
          <div className="fd-history">
            <h1 className='heading'> FD History </h1>
            {fdHistory}
          </div>
        );
      case "account":
        return (
          <div className="account-history">
            <h1 className='heading'> Account History </h1>
            {renderAccountHistory}
          </div>
        );
      case "profile":
        return (
          <ProfileDetails
            userId={user.userInfo._id}
            username={user.userInfo.username}
            email={user.userInfo.email}
            account={user.userInfo.account}
            work={user.userInfo.work}
            totalfd={user.userInfo.Fd.length}
            FdDetails={user.FdDetails}
            availableBalance={user.walletDetails.money}
          />
        );
      default:
        return;
    }
  }

  const handleLogout = () => {
    const choice = window.confirm("Are you sure to Logout?");
    if (choice) {
      logout(dispatch, navigate);
    }
    else {
      return;
    }
  }

  return (
    <div className='profile-main'>
      <div className="profilecard-btns">
        {/* Profile Details Card */}
        { wallet ?
           <ProfileCard
            username={user.userInfo.username}
            balance={wallet.money}
            totalfds={user.FdDetails.length}
            runningfds={user.FdDetails}
            maturedfds={user.FdDetails}
            brokenfds={user.FdDetails}
          /> : <p>Loading...</p>
        }
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
            onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="account-details">
        {renderAccountDetails(btn)}
      </div>
    </div>
  );
}

export default Profile;