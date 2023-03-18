import React from 'react'
import './signin.css'

const Signin = ({setUserExists}) => {
  return (
    <div className='signin'>
      <div className="wrapper-div">
        <div className="login-box">
          <h1>Sign In</h1>
          <div className="username-div">
            <input type="text" name="username" id="username" placeholder='👤 Username'/>
          </div>
          <div className="password-div">
            <input type="password" name="password" id="password" placeholder='🔒 Password'/>
          </div>
          <button className='signin-btn'>Sign In</button>
        </div>
        <div className="other-info-div">
          <h1>New Here</h1>
          <p>Sign Up and discover a great amount of new opportunities!</p>
          <button className='signup-btn-signin' onClick={() => setUserExists(false)}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signin