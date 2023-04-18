import React, { useState } from 'react';
import './editprofile.css';

const EditProfile = () => {

  const [ profileData, setProfileData ] = useState({
    username: "pranav1326",
    email: "visavadiapa@gmail.com",
    account: "student",
    work: "Student",
    totalfds: "6",
    totalbalance: "6500",
    availablebalance: "500"
  });

  return (
    <div className='edit-profile-main'>
      <h1 className='edit-profile-heading'>Edit Profile</h1>
      <div className="edit-profile-div">
        <div className="name">
          <span>Name</span>
          <input type='text' value={profileData.username}/>
        </div>
        <div className="email">
          <span>Email</span>
          <input type="text" value={profileData.email}/>
        </div>
        <div className="work">
          <span>Work</span>
          <input type="text" value={profileData.work}/>
        </div>
        <div className="account">
          <span>Account</span>
          <p>{profileData.work}</p>
        </div>
        <div className="totalfds">
          <span>Total FDs</span>
          <p>{profileData.totalfds}</p>
        </div>
        <div className="totalbalance">
          <span>Total Balance</span>
          <p>{profileData.totalbalance}</p>
        </div>
        <div className="balance">
          <span>Available Balance</span>
          <p>{profileData.availablebalance}</p>
        </div>
        <button className='edit-profile-save-btn'>Save</button>
      </div>
    </div>
  );
}

export default EditProfile;