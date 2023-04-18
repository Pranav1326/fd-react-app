import React from 'react';
import './createfd.css';

const CreateFd = () => {
  return (
    <div className='create-fd-main'>
      <div className="create-fd-div">
        <div className="duration-div">
          <span className='title'>Duration</span>
          <div className="duration-sub-div">
            <div className="duration-month">
              <input type="radio" name="duration" /> <span>3 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>6 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>9 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>12 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>15 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>18 Months</span>
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>20 Months</span>  
            </div>
            <div className="duration-month">
              <input type="radio" name="duration" /><span>24 Months</span>  
            </div>
          {/* <p>Months</p> */}
          </div>
        </div>
        <div className="rate-div">
          <span className='title'>Rate</span>
          <p className='rate-value'>{"5"}%</p>
        </div>
        <div className="amount-div">
          <span className='title'>Amount</span>
          <input 
            type="text" 
            name="amount" 
            className='amount-value'
            minLength='1'
            maxLength='8'
            onInput={(e) =>  {
              e.target.value = e.target.value.replace(/[^0-9]/g, '')
            }} 
          />
          <p className="rupee-symbol">₹</p>
        </div>
        <button className='create-fd-btn'>Create FD</button>
      </div>
    </div>
  );
}

export default CreateFd;