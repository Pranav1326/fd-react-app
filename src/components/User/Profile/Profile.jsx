import React, { useState } from 'react'
import AccountHistory from './AccountHistory'
import FdHistory from './FdHistory'
import './profile.css'
import ProfileCard from './ProfileCard'

const Profile = () => {
  const [ fdBtn, setfdBtn ] = useState(false);
  const [ accountBtn, setAccountBtn ] = useState(false);
  const [ btn, setBtn ] = useState("fd");
  return (
    <div className='profile-main'>
      <div className="profilecard-btns">
        <ProfileCard />
        <div className="account-btns">
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
        </div>
      </div>
      <div className="account-details">
        {
          btn === "fd" ? 
            <div className="fd-history">
              <h1 className='heading'> FD History </h1>
              <FdHistory
                transaction={"created fd"}
                createdAt={new Date()}
                amount={5000}
                interest={3}
                months={6}
              />
              <FdHistory
                transaction={"matured fd"}
                createdAt={new Date()}
                amount={5000}
                interest={2.4}
                months={3}
              />
              <FdHistory
                transaction={"created fd"}
                createdAt={new Date()}
                amount={10000}
                interest={4.7}
                months={18}
              />
            </div>
          :
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
        }
      </div>
    </div>
  );
}

export default Profile