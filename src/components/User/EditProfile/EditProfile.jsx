import React, { useState } from 'react';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import './editprofile.css';
import { updateUser } from '../../../api/fdApi';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {

  // user
  const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));

  const navigate = useNavigate();
  
  const [ profileData, setProfileData ] = useState({
    username: user.userInfo.username,
    email: user.userInfo.email,
    work: user.userInfo.work || "",
    account: user.userInfo.account || "normal",
    dateOfBirth: "",
    totalfds: user.userInfo.Fd.length,
    totalbalance: user.walletDetails.money,
    availablebalance: user.walletDetails.money
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProfileData(preValue => ({ ...preValue, [name]: value }));
  }

  // Submit Data
  const handleSubmit = e => {
    if(profileData.dateOfBirth === null){
      alert("Please Enter The Date Of Birth!");
    }
    else{
      const updateData = {
        userId: user.userInfo._id,
        email: profileData.email,
        work: profileData.work || "",
        dateOfBirth: profileData.dateOfBirth === "" ? profileData.dateOfBirth : new Date(profileData.dateOfBirth)
      }
      updateUser(updateData, navigate);
    }
  }

  // Delete Profile
  const handleDelete = () => {
    const choice = window.confirm("Are you sure to delete your account?");
    if(choice){
      alert("OK");
    }
  }
  
  return (
    <div className="">
      <h1 className='edit-profile-heading'>Edit Profile</h1>
      <div className='edit-profile-main'>
        <div className="edit-profile-div">
          <div className="name">
            <span>Username</span>
            <input type='text' name='username' value={profileData.username} onChange={handleChange} disabled/>
          </div>
          <div className="email">
            <span>Email</span>
            <input type="email" name='email' value={profileData.email} onChange={handleChange} />
          </div>
          <div className="work">
            <span>Work</span>
            <input type="text" name='work' value={profileData.work} onChange={handleChange} />
          </div>
          <div className="dob">
            <span>Date of Birth</span>
            <input type="date" name='dateOfBirth' value={profileData.dateOfBirth} onChange={handleChange} placeholder='Enter Your BirthDate'/>
          </div>
          <div className="account">
            <span>Account</span>
            <p>{profileData.account}</p>
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
          <button className='edit-profile-save-btn' onClick={handleSubmit}>Save</button>
        </div>
      </div>
      <div className="edit-profile-delete">
        <h1 className='edit-profile-heading'>Delete Profile</h1>
        <p>*Note that this process is irreversible and cannot be undone as all of your data will be deleted from our system. FD-Center will not responsible for any data loss(personal, private and financial).</p>
        <button className="edit-profile-delete-profile-btn" onClick={handleDelete}>Delete Profile</button>
      </div>
    </div>
  );
}

export default EditProfile;