import React, { useState } from 'react'
import './withdraw.css'

const Withdraw = () => {

  const [ amount, setAmount ] = useState('');
  const [ showAlert, setShowAlert ] = useState(false);

  const handleWithdraw = () => {
    if(amount<100 || amount>1000000){
      setShowAlert(true);
    }
    else{
      alert("Success");
    }
  }

  const handleChange = e => {
    setAmount(e.target.value);
  }

  return (
    <div className='deposit-main'>
      <h1 className='heading-main'> Withdraw Cash </h1>
      <div className="box-card-details">
        {/* <div className="card"></div> */}
        <div className="details">
          {/* <h1>Card Details</h1> */}
          {/* Name on Card */}
          {/* <div className="card-name">
            <span>Name on Card</span>
            <input type="text" className='card-input-value' name='cardName' />
          </div> */}
          {/* Card Number */}
          {/* <div className="card-number">
            <span>Card Number</span>
            <input 
              type="number" 
              className='card-input-value' 
              inputMode='numeric' 
              name='cardNumber'
              onInput={(e) =>  {
                e.target.value = e.target.value.replace(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
              }}
            />
          </div> */}
          <div className="card-date-cvv">
            {/* Card Valid Date */}
            {/* <div className="card-date">
              <span>Valid Through</span>
              <div className="date-inputs">
                <input 
                  type="text" 
                  className='card-input-value-date-1' 
                  inputMode='numeric' 
                  name='cardNumber' 
                  onInput={(e) =>  {
                    e.target.value = e.target.value.replace(/[^0-1]/g,'')
                  }}
                  maxLength='2'
                  minLength='2'
                />
                /
                <input 
                  type="text" 
                  className='card-input-value-date-2' 
                  inputMode='numeric' 
                  name='cardNumber' 
                  onInput={(e) =>  {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')
                  }}
                  maxLength='2'
                  minLength='2'
                />
              </div>
            </div> */}
            {/* CVV */}
            {/* <div className="card-cvv">
              <span>CVV</span>
              <input 
                type="text" 
                className='card-input-value' 
                inputMode='numeric' 
                name='cardNumber'
                onInput={(e) =>  {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')
                }}
                maxLength='3'
                minLength='3'
              />
            </div> */}
          </div>
          {/* Deposit Amount */}
          <div className="deposit-amount">
            <span>Amount In Rupee</span>
            <input 
              type="number" 
              className='card-input-value' 
              name='amount'
              value={amount}
              onChange={handleChange}
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