import React, { useEffect, useState } from 'react'
import Deposit from '../Deposit/Deposit';
import AccountHistory from '../Profile/AccountHistory';
import ProfileCard from '../Profile/ProfileCard';
import Withdraw from '../Withdraw/Withdraw';
import './wallet.css';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import { getTransactions, getWalletDetails } from '../../../api/fdApi';

const Wallet = () => {

  const [ wallet, setWallet ] = useState(null);
  const [ transactionBtn, setTransactionBtn ] = useState(false);
  const [ depositBtn, setDepositBtn ] = useState(false);
  const [ withdrawBtn, setWithdrawBtn ] = useState(false);
  const [ btn, setBtn ] = useState("transaction");
  const [ transactions, setTransactions ] = useState([]);

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
  
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
            {
              transactions && transactions.map(tran => {
                return(
                  <AccountHistory
                    key={tran._id}
                    transaction={tran.transaction}
                    createdAt={tran.createdAt}
                    amount={tran.amount}
                  />
                );
              })
            }
          </div>
        );
      default:
        return;
    }
  }
  
  useEffect(() => {
    getTransactions({ userId: user.userInfo._id }, setTransactions);
    getWalletDetails({ userId: user.userInfo._id}, setWallet);
  }, [btn]);
  
  return (
    <div className='profile-main'>
      <div className="profilecard-btns">
        { wallet && <ProfileCard 
          username={user.userInfo.username}
          balance={wallet.money}
          totalfds={user.FdDetails.length}
          runningfds={user.FdDetails}
          maturedfds={user.FdDetails}
          brokenfds={user.FdDetails}
        />}
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