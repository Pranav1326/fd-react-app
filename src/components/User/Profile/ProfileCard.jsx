import React from 'react';
import './profilecard.css'

const ProfileCard = () => {
    return (
        <div className='profile-card-main'>
            <div className="profile-pic">
                <img className='user-img' src={"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user profile pic" />
            </div>
            <div className="user-details">
                <div className="username">
                    <p>
                        {"Pranav"}
                    </p>
                </div>
                <div className="joined-date">
                    <p>
                        Joined on: {new Date().toDateString()}
                    </p>
                </div>
                <div className="balance">
                    <p>
                        Balance: 
                    </p>
                    <p className='value'>
                        {"1,70,00,000 ₹"}
                    </p>
                </div>
                <div className="total-fds">
                    <p>
                        Total FDs:
                    </p>
                    <p className='value'>
                        {4}
                    </p>
                </div>
                <div className="fd-status">
                    <div className="running">
                        <p>
                            Running:
                        </p>
                        <p className='value'>
                            {3}
                        </p>
                    </div>
                    <div className="matured">
                        <p>
                            Matured:
                        </p>
                        <p className='value'>
                            {1}
                        </p>
                    </div>
                    <div className="broken">
                        <p>
                            Broken: {" "}
                        </p>
                        <p className='value'>
                            {0}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;