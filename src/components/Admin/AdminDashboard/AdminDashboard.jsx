import { useState } from 'react';
import './admindashboard.css';
import AdminProfileCard from './AdminProfileCard';
import FdHistory from '../../User/Profile/FdHistory';
import CreateRate from '../CreateRate/CreateRate';

const AdminDashboard = () => {
    const [ fdBtn, setfdBtn ] = useState(false);
    const [ accountBtn, setAccountBtn ] = useState(false);
    const [ btn, setBtn ] = useState("fd");
    return(
        <div className="admin-dashboard-main">
            <div className="profilecard-btns">
                <AdminProfileCard 
                    username="Pranav Admin"
                    revenue="15,56,15,212"
                    totalfds="167"
                    runningfds="122"
                    maturedfds="45"
                    brokenfds="3"
                />
            <div className="account-btns">
                <button 
                    className={btn === "fd" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setfdBtn(!fdBtn)
                    setBtn("fd")
                    }}>FDs
                </button>
                <button 
                    className={btn === "createRate" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("createRate")
                    }}>Create Rate</button>
                <button 
                    className={btn === "currentRate" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("currentRate")
                    }}>Current Rates</button>
                </div>
            </div>
            <div className="details-for-admin">
                {
                    btn === "fd" ?
                    <div className="fd-history">
                        <h1 className='heading'> FD History </h1>
                        <FdHistory
                            user="Raj"
                            transaction={"created fd"}
                            createdAt={new Date()}
                            amount={5000}
                            interest={3}
                            months={6}
                        />
                        <FdHistory
                            user="Preyansh"
                            transaction={"matured fd"}
                            createdAt={new Date()}
                            amount={5000}
                            interest={2.4}
                            months={3}
                        />
                        <FdHistory
                            user="Rishi"
                            transaction={"created fd"}
                            createdAt={new Date()}
                            amount={10000}
                            interest={4.7}
                            months={18}
                        />
                    </div>
                    :
                    <CreateRate />
                }
            </div>
        </div>
    );
}

export default AdminDashboard;