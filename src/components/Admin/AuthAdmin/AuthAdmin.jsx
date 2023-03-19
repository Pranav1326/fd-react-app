import React, { useState } from 'react';
import Signin from '../../Signin/Signin';
import Signup from '../../Signup/Signup';
import './authadmin.css';

const AuthAdmin = ({admin, setIsAdmin}) => {

  const [ userExits, setUserExists ] = useState(true);
  // setadmin(true);
  
  return (
    <div className='authuser'>
      {
          userExits 
        ? 
          <Signin 
            setUserExists={setUserExists} 
            admin={admin} 
            setadmin={setIsAdmin}
          /> 
        : 
          <Signup 
            setUserExists={setUserExists} 
            admin={admin} 
            setadmin={setIsAdmin}
          />
      }
    </div>
  );
}

export default AuthAdmin;