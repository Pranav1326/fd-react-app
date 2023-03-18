import React from 'react'
import './signup.css'

const Signup = ({setUserExists}) => {
  return (
    <div className='signup'>
      <div className="wrapper-div">
        <div className="other-info-div">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info.</p>
          <button className='signin-btn-signup' onClick={() => setUserExists(true)}>Sign In</button>
        </div>
        <div className="register-box">
          <h1>Sign Up</h1>
          <div className="username-div">
            <input type="text" name="username" id="username" placeholder='👤 Username'/>
          </div>
          <div className="email-div">
            <input type="email" name="email" id="email" placeholder='📧 Email'/>
          </div>
          <div className="password-div">
            <input type="password" name="password" id="password" placeholder='🔒 Password'/>
          </div>
          <button className='signup-btn'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup