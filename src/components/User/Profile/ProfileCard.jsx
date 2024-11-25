import React from 'react';
import './profilecard.css'

const ProfileCard = (props) => {

    const runningFds = props && props.runningfds.filter(e => e.status === "running");
    const matureFds = props && props.maturedfds.filter(e => e.status === "matured");
    const brokenfds = props && props.brokenfds.filter(e => e.status === "broken");

    const renderRevenue = () => {
        const revenue = props.balance.toString().split('').reverse();
        const rev = [];
        for (let index = 0; index < revenue.length; index++) {
            if(index%3 === 0){
                rev.push(',');
                rev.push(revenue[index]);
            }
            else rev.push(revenue[index]);
        }
        rev.reverse().pop();
        const r = rev.join('');
        return r;
    }
    
    return (
        <div className='profile-card-main'>
            <div className="profile-pic">
                <img className='user-img' src={"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user profile pic" />
            </div>
            <div className="user-details">
                <div className="username">
                    <p>
                        {props.username}
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
                        {renderRevenue()}
                    </p>
                </div>
                <div className="total-fds">
                    <p>
                        Total FDs:
                    </p>
                    <p className='value'>
                        {props.totalfds}
                    </p>
                </div>
                <div className="fd-status">
                    <div className="running">
                        <p>
                            Running:
                        </p>
                        <p className='value'>
                            {runningFds.length}
                        </p>
                    </div>
                    <div className="matured">
                        <p>
                            Matured:
                        </p>
                        <p className='value'>
                            {matureFds.length}
                        </p>
                    </div>
                    <div className="broken">
                        <p>
                            Broken: {" "}
                        </p>
                        <p className='value'>
                            {brokenfds.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;