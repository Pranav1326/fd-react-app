import React, { useState } from 'react';
import './signin.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/userApi';

const Signin = ({setUserExists}) => {

  const error = useSelector(state => state.userReducer.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Internal State
  const [ data, setData ] = useState({
    username: "",
    password: "",
  });
  
  // Handling Form Submit-event
  const handleSubmit = (e) => {
    e.preventDefault();
    const ifAdmin = data.username.split('.')[0];
    userLogin(data, dispatch, navigate);
    if(ifAdmin === "admin")
      alert(ifAdmin);
  }
  
  // Input onChange event handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(preValue => ({ ...preValue, [name]: value }));
  }
  
  return (
    <div className='signin'>
      <div className="wrapper-div">
        <div className="login-box">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="username-div">
              <input type="text" name="username" value={data.username} onChange={handleChange} id="username" placeholder='👤 Username'/>
            </div>
            <div className="password-div">
              <input type="password" name="password" value={data.password} onChange={handleChange} id="password" placeholder='🔒 Password'/>
            </div>
            <button className='signin-btn' type='submit'>Sign In</button>
          </form>
        </div>
        <div className="other-info-div">
          <h1>New Here?</h1>
          <p>Sign Up and discover a great amount of new opportunities!</p>
          <button className='signup-btn-signin' onClick={() => setUserExists(false)}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;