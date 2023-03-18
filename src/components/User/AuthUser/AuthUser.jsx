import React, { useState } from 'react'
import './authuser.css'
import Signin from '../../Signin/Signin';
import Signup from '../../Signup/Signup';

const AuthUser = () => {

  const [ userExits, setUserExists ] = useState(true);
  
  return (
    <div className='authuser'>
      {userExits ? <Signin setUserExists={setUserExists} /> : <Signup setUserExists={setUserExists} />}
    </div>
  )
}

export default AuthUser