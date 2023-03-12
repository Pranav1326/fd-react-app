import React from 'react';
import './accounthistory.css'

const AccountHistory = (props) => {
    const createdAtDate = props.createdAt.toLocaleDateString();
    const createdAtTime = props.createdAt.toLocaleTimeString();
    return (
        <div className='account-history-main'>
            <div className="transaction">
                <p>Transaction: </p>
                <p className='value'> {props.transaction} </p>
            </div>
            <div className="createdAt">
                <p>On: </p>
                <p className='value'> {createdAtDate} {createdAtTime} </p>
            </div>
            <div className="amount">
                <p>Amount: </p>
                <p className='value'> {props.amount} ₹ </p>
            </div>
            {(props.transaction === "deposit" || props.transaction === "withdraw")
                ?
            (<> 
                <div className="transaction-mehtod">
                    <p>Transaction-Mehtod: </p>
                    <p className='value'> {props.transactionMehtod} </p>
                </div>
                <div className="card-no">
                    <p>Card No: </p>
                    <p className='value'> {props.cardNo} </p>
                </div>
            </>)
            : ""}
        </div>
    );
}

export default AccountHistory;