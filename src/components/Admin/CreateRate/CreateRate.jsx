import React, { useState } from 'react';
import './createrate.css';

const CreateRate = () => {

  const [ rateData, setRateData ] = useState({
    rate: "",
    duration: "",
    profile: "normal"
  });
  
  const handleChange = e => {
    const { name, value } = e.target;
    setRateData(preValue => ({ ...preValue, [name]: value }));
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(rateData);
  }
  
  return (
    <div className='create-rate-main'>
      <div className="create-rate-box">
        <h1 className="carete-rate-title">
          Create Rate
        </h1>
        <form method='post' onSubmit={handleSubmit}>
          <div className="create-rate-inputs">
            <div className="rate-div">
              <label htmlFor="Rate">Rate</label>
              <input type="text" name="rate" id="rate" placeholder='Rate' value={rateData.rate} onChange={handleChange} required />
            </div>
            <div className="duration-div">
              <label htmlFor="Duration">Duration</label>
              <input type="text" name="duration" id="duration" placeholder='Months' value={rateData.duration} onChange={handleChange} required />
            </div>
            <div className="for-div">
              <label htmlFor="Profile">Profile</label>
              <select id='select-menu' name="profile" value={rateData.profile} onChange={handleChange} required >
                {/* <optgroup> */}
                  <option className='for' name="normal" value={"normal"} id="normal">Normal</option>
                  <option className='for' name="student" value={"student"} id="student">Student</option>
                  <option className='for' name="senior" value={"senior"} id="senior">Senior Citiizen</option>
                {/* </optgroup> */}
              </select>
            </div>
          </div>
          <button className='create-rate-btn' type='submit'>Create Rate</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRate;