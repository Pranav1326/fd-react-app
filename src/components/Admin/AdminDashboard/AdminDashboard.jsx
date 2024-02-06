import { useEffect, useState } from 'react';
import './admindashboard.css';
import AdminProfileCard from './AdminProfileCard';
import FdHistory from '../../User/Profile/FdHistory';
import CreateRate from '../CreateRate/CreateRate';
import CurrentRates from './CurrentRates';
import axios from 'axios';
import { baseUrl } from '../../../api/url';
import { useDispatch } from 'react-redux';
import jwtPayloadDecoder from 'jwt-payload-decoder';
import { logout } from '../../../api/userApi';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ fdBtn, setfdBtn ] = useState(false);
    const [ accountBtn, setAccountBtn ] = useState(false);
    const [ btn, setBtn ] = useState("currentRate");
    const [ centerDetails, setCenterDetails ] = useState(null);
    
    const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
    
    const renderDashboard = (btn) => {
        if(btn === "fd"){
            return(
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
            );
        }
        else if(btn === "createRate"){
            return <CreateRate />
        }
        else if(btn === "currentRate"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'>Current Rates</h1>
                    <div className="current-rates-div">
                        <CurrentRates for="student" />
                        <CurrentRates for="normal" />
                        <CurrentRates for="senior" />
                    </div>
                </div>
            );
        }
    }
    
    const handleLogout = () => {
        const choice = window.confirm("Are you sure to Logout?");
        if (choice) {
          logout(dispatch, navigate);
        }
        else {
          return;
        }
    }
    
    useEffect(() => {
        const getcenterdetails = async (data) => {
            const token = JSON.parse(sessionStorage.getItem('fdt'));
            const headersList = {
              "Accept": "*/*",
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json" 
            }
            const reqOptions = {
                url: `${baseUrl}/admin/getcenterdata`,
                method: "GET",
                headers: headersList,
            }
            try {
                const res = await axios.request(reqOptions);
                setCenterDetails(res.data);
            } catch (error) {
              console.log(error?.response?.data?.message);
            }
        }
        getcenterdetails();
    }, []);
    
    return(
        <div className="admin-dashboard-main">
            <div className="profilecard-btns">
                { centerDetails && 
                    <AdminProfileCard 
                        username = {user.username}
                        joinedDate = {user.createdAt}
                        revenue = {centerDetails.centerData.revenue}
                        totalfds = {centerDetails.centerData.totalFds}
                        runningfds = {centerDetails.centerData.runningFds}
                        maturedfds = {centerDetails.centerData.maturedFds}
                        brokenfds = {centerDetails.centerData.brokenFds}
                    />
                }
            <div className="account-btns">
                <button 
                    className={btn === "fd" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setfdBtn(!fdBtn)
                    setBtn("fd")
                    }}>FDs</button>
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
                <button
                    className={btn === "logout" ? 'account-btn active' : 'account-btn'}
                    onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="details-for-admin">
                {renderDashboard(btn)}
            </div>
        </div>
    );
}

export default AdminDashboard;