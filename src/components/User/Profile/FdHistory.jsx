import React from 'react';
import './fdhistory.css'

const FdHistory = (props) => {
    return (
        <div className='fd-history-main'>
            {
                props.user &&
                <div className="user">
                    <p>User: </p>
                    <p className='value'> {props.user} </p>
                </div>
            }
            <div className="transaction">
                <p>Transaction: </p>
                <p className='value'> {props.transaction} </p>
            </div>
            <div className="createdAt">
                <p>Issue Date: </p>
                <p className='value'> {new Date(props.createdAt).toLocaleDateString()} </p>
            </div>
            <div className="createdAt">
                <p>Mature Date: </p>
                <p className='value'> {new Date(props.matureDate).toLocaleDateString()} </p>
            </div>
            <div className="duration">
                <p>Duration: </p>
                <p className='value'> {props.months} Months </p>
            </div>
            <div className="amount">
                <p>Amount: </p>
                <p className='value'> {props.amount} ₹ </p>
            </div>
            <div className="amount">
                <p>Interest: </p>
                <p className='value'> {props.interest}% </p>
            </div>
            <div className="amount">
                <p>Maturity Value: </p>
                <p className='value'> {Math.round(props.maturityValue)} ₹ </p>
            </div>
        </div>
    );
}

export default FdHistory;