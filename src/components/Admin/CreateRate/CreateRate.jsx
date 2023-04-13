import React from 'react';
import './createrate.css';

const CreateRate = () => {
  return (
    <div className='create-rate-main'>
      <div className="create-rate-box">
        <h1 className="carete-rate-title">
          Create Rate
        </h1>
        <div className="create-rate-inputs">
          <div className="rate-div">
            <label htmlFor="Rate">Rate</label>
            <input type="text" name="rate" id="rate" placeholder='Rate' />
          </div>
          <div className="duration-div">
            <label htmlFor="Duration">Duration</label>
            <input type="text" name="duration" id="duration" placeholder='Months' />
          </div>
          <div className="for-div">
            <label htmlFor="Profile">Profile</label>
            <select id='select-menu'>
              <optgroup>
                <option className='for' name="Normal" value={"normal"} id="normal">Normal</option>
                <option className='for' name="Student" value={"student"} id="student">Student</option>
                <option className='for' name="Senior" value={"senior"} id="senior">Senior Citiizen</option>
              </optgroup>
            </select>
          </div>
        </div>
        <button className='create-rate-btn'>Create Rate</button>
      </div>
    </div>
  );
}

export default CreateRate;