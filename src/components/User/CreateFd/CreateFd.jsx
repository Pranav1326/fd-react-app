import React, { useEffect, useState } from 'react';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import './createfd.css';
import { createFd, getUserRates } from '../../../api/fdApi';

const CreateFd = ( props ) => {

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));

  const [ rates, setRates ] = useState(null);
  const [ radio, setRadio ] = useState();
  const [ amount, setAmount ] = useState("");

  const createRadioButtons = rates && rates.map((rate, i) => {
    return (
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

  const handleCreateFd = () => {
    if (amount === 0 || amount === "" || renderRate === undefined) {
      alert("Please select the data!");
    }
    else if (amount === 0 || amount === "") {
      alert("Please enter the amount!");
    }
    else {
      const data = {
        user: {
          userId: user.userInfo._id,
          username: user.userInfo.username
        },
        amount: Number(amount),
        interest: renderRate?.interestRate,
        months: radio
      };
      console.log(data);
      createFd(data, props.setBtn);
    }
  }

  useEffect(() => {
    getUserRates({ user: user.userInfo.account }, setRates);
    // eslint-disable-next-line
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
          <p className='rate-value'>{renderRate ? renderRate.interestRate : 0}%</p>
        </div>
        <div className="amount-div">
          <span className='title'>Amount</span>
          <input
            type="text"
            name="amount"
            className='amount-value'
            minLength='1'
            maxLength='7'
            autoComplete='off'
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '')
            }}
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <p className="rupee-symbol">₹</p>
        </div>
        <button className='create-fd-btn' onClick={handleCreateFd}>Create FD</button>
      </div>
    </div>
  );
}

export default CreateFd;