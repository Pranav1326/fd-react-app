import React, { useState } from 'react';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import './withdraw.css';
import { withdraw } from '../../../api/fdApi';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Withdraw = () => {

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));

  const [ cardDetails, setCardDetails ] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  
  const [ amount, setAmount ] = useState('');
  const [ showAlert, setShowAlert ] = useState(false);

  const handleWithdraw = () => {
    if(amount<100 || amount>1000000){
      setShowAlert(true);
    }
    else{
      setShowAlert(false);
      withdraw({userId: user.userInfo._id, withdraw: amount}, setAmount);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Input validation
    if (name === 'number' || name === 'cvc') {
      updatedValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'expiry') {
      // eslint-disable-next-line
      updatedValue = value.replace(/[^0-9/]/g, '');
    }
    
    setCardDetails(preValue => ({ ...preValue, [name]: value }));
  }

  return (
    <div className='deposit-main'>
      <h1 className='heading-main'> Withdraw Cash </h1>
      <div className="box-card-details">
        {/* Card */}
        <Cards
          cvc={cardDetails.cvc}
          expiry={cardDetails.expiry}
          focused={cardDetails.focus}
          name={cardDetails.name}
          number={cardDetails.number}
        />
        <div className="details">
          <h1>Card Details</h1>
          {/* Name on Card */}
          <div className="card-name">
            <span>Name on Card</span>
            <input type="text" className='card-input-value' maxLength={"23"} value={cardDetails.name} onChange={handleChange} name='name' required/>
          </div>
          {/* Card Number */}
          <div className="card-number">
            <span>Card Number</span>
            <input
              type="tel"
              className='card-input-value'
              inputMode='numeric'
              name='number'
              maxLength="16"
              minLength="16"
              value={cardDetails.number}
              onChange={handleChange}
            />
          </div>
          <div className="card-date-cvv">
            {/* Card Valid Date */}
            <div className="card-date">
              <span>Valid Through</span>
              <div className="date-inputs">
                <input 
                  type="text" 
                  className='card-input-value-date-2' 
                  inputMode='text' 
                  name='expiry'
                  value={cardDetails.date2}
                  onChange={handleChange}
                  onInput={(e) =>  {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')
                  }}
                  maxLength='4'
                  minLength='2'
                />
              </div>
            </div>
            {/* CVV */}
            <div className="card-cvv">
              <span>CVV</span>
              <input
                type="text"
                className='card-input-value'
                inputMode='numeric'
                name='cvc'
                value={cardDetails.cvc}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')
                }}
                maxLength='3'
                minLength='3'
              />
            </div>
          </div>
          {/* Deposit Amount */}
          <div className="deposit-amount">
            <span>Amount In Rupee</span>
            <input 
              type="number" 
              className='card-input-value' 
              name='amount'
              autoComplete='off'
              value={amount}
              onChange={e => setAmount(e.target.value)}
              maxLength='7'
              minLength='3'
            />
          </div>
          { showAlert ? <span className='alert'>*Please enter between 100₹ to 10,00,000₹</span> : "" }
          <div className="deposit-btn-div">
            <button className='deposit-btn' onClick={handleWithdraw}>WITHDRAW CASH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdraw