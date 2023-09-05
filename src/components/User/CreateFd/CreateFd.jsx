import React, { useState } from 'react';
import './createfd.css';

const CreateFd = () => {

  const [ radio, setRadio ] = useState(null);
  
  const createRadioButtons = [3,6,9,12,24,48,60].map((rate, i) => {
    return(
       <button 
        key={i} 
        className={radio === rate ? "rate-btn-active" : "rate-btn"}
        onClick={() => {
          setRadio(rate)
        }}
        >
        {rate} Months
      </button>
    );
  });
  
  return (
    <div className='create-fd-main'>
      <div className="create-fd-div">
        <div className="duration-div">
          <span className='title'>Duration</span>
          <div className="duration-sub-div">
            {createRadioButtons}
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
            maxLength='7'
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