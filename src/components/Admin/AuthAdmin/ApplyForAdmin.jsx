import React, { useState } from 'react';
import "./applyforadmin.css";

const ApplyForAdmin = () => {

    const [ data, setData ] = useState({
        email: "",
        username: ""
    });
    
    const handleChange = e => {
        const { name, value } = e.target;
        setData(preData => ({ ...preData, [name]: value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    }
    
    return (
        <div className='apply-for-admin'>
            <div className="main-apply-for-admin">
                <form method='post' onSubmit={handleSubmit}>
                    <h1 className='apply-for-admin-heading'>Apply For An Admin</h1>
                    <div className="apply-for-admin-email">
                        <span>Email</span>
                        <input type="email" className='apply-for-admin-email-input' value={data.email} onChange={handleChange} name="email" required />
                    </div>
                    <div className="apply-for-admin-username">
                        <span>Username</span>
                        <input type="text" className='apply-for-admin-username-input' value={data.username} onChange={handleChange} name="username" required />
                    </div>
                    <button type="submit" className='signup-btn apply-for-admin-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ApplyForAdmin;