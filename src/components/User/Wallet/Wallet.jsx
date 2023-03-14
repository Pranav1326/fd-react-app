import React, { useState } from 'react'
import Deposit from '../Deposit/Deposit';
import AccountHistory from '../Profile/AccountHistory';
import ProfileCard from '../Profile/ProfileCard';
import Withdraw from '../Withdraw/Withdraw';
import './wallet.css'

const Wallet = () => {
  const [ transactionBtn, setTransactionBtn ] = useState(false);
  const [ depositBtn, setDepositBtn ] = useState(false);
  const [ withdrawBtn, setWithdrawBtn ] = useState(false);
  const [ btn, setBtn ] = useState("transaction");

  const renderComponent = (btn) => {
    switch (btn) {
      case "deposit":
        return(<Deposit />);
      case "withdraw":
        return(<Withdraw />);
      case "transaction":
        return(
          <div className="account-history">
            <h1 className='heading'> Transaction History </h1>

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
      default:
        return;
    }
  }
  
  return (
    <div className='profile-main'>
      <div className="profilecard-btns">
        <ProfileCard />
        <div className="account-btns">
          <button 
            className={btn === "transaction" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setTransactionBtn(!transactionBtn)
              setBtn("transaction")
            }}>Transaction History</button>
          <button 
            className={btn === "deposit" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setDepositBtn(!depositBtn)
              setBtn("deposit")
            }}>Deposit</button>
          <button 
            className={btn === "withdraw" ? 'account-btn active' : 'account-btn'} 
            onClick={() => {
              setWithdrawBtn(!withdrawBtn)
              setBtn("withdraw")
            }}>Withdraw</button>
        </div>
      </div>
      <div className="account-details">
        {renderComponent(btn)}
      </div>
    </div>
  );
}

export default Wallet