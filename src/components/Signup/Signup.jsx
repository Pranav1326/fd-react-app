import React, { useState } from 'react';
import Otp from '../Otp/Otp';
import './signup.css';
import { register } from '../../api/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = ({setUserExists}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector(state => state.userReducer.error);

  const [ data, setData ] = useState({
    username: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line
  const [ otp, setOtp ] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(preValue => ({ ...preValue, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    register(data, dispatch, setOtp);
    if(error){
      alert(error);
    }
  }
  
  if(otp){
    return(
      <Otp
        setUserExists={setUserExists}
        data={data}
      />
    );
  }
  
  return (
    <div className='signup'>
      <div className="wrapper-div">
        <div className="other-info-div">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info.</p>
          <button className='signin-btn-signup' onClick={() => setUserExists(true)}>Sign In</button>
          <button className='signin-btn-signup' onClick={() => navigate('/applyforadmin')}>Apply for Admin</button>
        </div>
        <div className="register-box">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="username-div">
              <input type="text" name="username" value={data.username} onChange={handleChange} id="username" placeholder='👤 Username' required/>
            </div>
            <div className="email-div">
              <input type="email" name="email" value={data.email} onChange={handleChange} id="email" placeholder='📧 Email' required/>
            </div>
            <div className="password-div">
              <input type="password" name="password" value={data.password} onChange={handleChange} id="password" placeholder='🔒 Password' required/>
            </div>
            <button className='signup-btn' type='submit' onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;