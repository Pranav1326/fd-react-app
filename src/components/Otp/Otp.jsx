import React, { useState } from 'react';
import './otp.css';

const Otp = () => {

    const [otp, setOtp] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        alert(otp);
    }
    
    return (
        <div className='otp-main'>
            <div className="otp-box">
                <h1>OTP</h1>
                <form action="" method='post' onSubmit={handleSubmit}>
                    <input 
                        id="otp" 
                        type="tel" 
                        name="otp"
                        required 
                        autoComplete='off' 
                        onChange={e => setOtp(e.target.value)}
                        value={otp}
                        minLength='4'
                        maxLength='4'
                        onInput={(e) =>  {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                        }} 
                    />
                    <button type='submit' className='signin-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Otp;