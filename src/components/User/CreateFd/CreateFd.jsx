import React, { useEffect, useState } from 'react';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import './createfd.css';
import { getUserRates } from '../../../api/fdApi';

const CreateFd = () => {

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
  // console.log(user);
  
  const [ rates, setRates ] = useState(null);
  const [ radio, setRadio ] = useState();
  
  const createRadioButtons = rates && rates.map((rate, i) => {
    return(
       <button 
        key={i} 
        className={radio === rate.months ? "rate-btn-active" : "rate-btn"}
        onClick={() => {
          setRadio(rate.months)
        }}
        >
        {rate.months} Months
      </button>
    );
  });
  
  const renderRate = rates && rates.find((rate) => {
    return radio === rate.months;
  });
  // rates && console.log(renderRate.interestRate);

  useEffect(() => {
    getUserRates({user: "normal"}, setRates);
    rates && setRadio(rates[0].months);
  }, []);
  
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
          {/* <p className='rate-value'>{ rates && (renderRate.interestRate ? renderRate.interestRate : 0)}%</p> */}
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