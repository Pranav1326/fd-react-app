import React, { useEffect, useState } from 'react';
import "./superadmin.css";

import jwtPayloadDecoder from 'jwt-payload-decoder';
import { logout } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api/url';
import axios from 'axios';
import AdminProfileCard from '../Admin/AdminDashboard/AdminProfileCard';

const Superadmin = () => {

    const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ fdBtn, setfdBtn ] = useState(false);
    const [ accountBtn, setAccountBtn ] = useState(false);
    const [ btn, setBtn ] = useState("adminRequests");
    const [ centerDetails, setCenterDetails ] = useState(null);
    const [ allFdDetails, setAllFdDetails] = useState(null);
    const [ rates, setRates ] = useState(null);
    const [ ratesUpdated, setRatesUpdated ] = useState(null);
    // Pagination
    // eslint-disable-next-line
    const [ pagination, setPagination] = useState(true);
    const [ page, setPage ] = useState(1);
    const [ pages, setPages ] = useState();

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
        const token = JSON.parse(sessionStorage.getItem('fdt'));
        const headersList = {
          "Accept": "*/*",
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json" 
        }
        const getcenterdetails = async () => {
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
        const getFdDetails = async () => {
            const reqOptions = {
                url: `${baseUrl}/admin/getallfds?page=${page}`,
                method: "GET",
                headers: headersList,
            }
            try {
                const res = await axios.request(reqOptions);
                setAllFdDetails(res.data.allFds);
                setPage(res.data.page);
                setPages(res.data.pages);
            } catch (error) {
              console.log(error?.response?.data?.message);
            }
        }
        getFdDetails();
        const getRates = async () => {
            const reqOptions = {
                url: `${baseUrl}/rate`,
                method: "GET",
                headers: headersList,
            }
            try {
                const res = await axios.request(reqOptions);
                setRates(res.data);
            } catch (error) {
              console.log(error?.response?.data?.message);
            }
        }
        getRates();
    }, [ratesUpdated, page]);
    
    return (
        <div className='superadmin-main'>
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
            </div>
            <div className="account-btns">
                <button 
                    className={btn === "adminRequests" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setfdBtn(!fdBtn)
                    setBtn("adminRequests")
                    }}>Admin Requests</button>
                <button 
                    className={btn === "adminList" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("adminList")
                    }}>Admin List</button>
                <button 
                    className={btn === "allFds" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("allFds")
                    }}>All Fds</button>
                <button 
                    className={btn === "allUsers" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("allUsers")
                    }}>All Users</button>
                <button 
                    className={btn === "allTransactions" ? 'account-btn active' : 'account-btn'} 
                    onClick={() => {
                    setAccountBtn(!accountBtn)
                    setBtn("allTransactions")
                    }}>All Transactions</button>
                <button
                    className={btn === "logout" ? 'account-btn active' : 'account-btn'}
                    onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Superadmin;