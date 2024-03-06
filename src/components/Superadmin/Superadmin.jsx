import React, { useEffect, useState } from 'react';
import "./superadmin.css";

import jwtPayloadDecoder from 'jwt-payload-decoder';
import { logout } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api/url';
import axios from 'axios';
import AdminProfileCard from '../Admin/AdminDashboard/AdminProfileCard';
import FdHistory from '../User/Profile/FdHistory';

const Superadmin = () => {

    const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ fdBtn, setfdBtn ] = useState(false);
    const [ accountBtn, setAccountBtn ] = useState(false);
    const [ btn, setBtn ] = useState("adminRequests");
    const [ centerDetails, setCenterDetails ] = useState(null);
    const [ allFdDetails, setAllFdDetails] = useState(null);
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
    
    // Previous Page
    const previousPage = async () => {
        setPage(page => page - 1);
    }

    // Next Page
    const nextPage = async () => {
        if(pages > page){
        setPage(page => page + 1);
        }
    }
    
    const adminRequests = [
        {
            "user": {
                "userId": "65525068da18ab21e369178d",
                "username": "pranav",
                "email": "pranav.visavadia@mitwpu.edu.in"
            },
            "_id": "65525068da18ab21e369178f",
            "status": "rejected",
            "createdAt": "2023-11-13T16:35:52.652Z",
            "updatedAt": "2023-11-13T20:10:04.193Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65528b5e75354a8cb69eb168",
                "username": "test",
                "email": "tawof37701@jucatyo.com"
            },
            "_id": "65528b5e75354a8cb69eb16a",
            "status": "rejected",
            "createdAt": "2023-11-13T20:47:26.750Z",
            "updatedAt": "2023-11-13T20:52:43.442Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65528e194fda87b48dc7dd74",
                "username": "test1",
                "email": "rekesa8211@mainmile.com"
            },
            "_id": "65528e194fda87b48dc7dd76",
            "status": "approved",
            "createdAt": "2023-11-13T20:59:05.872Z",
            "updatedAt": "2023-11-13T21:00:40.891Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "6558e37c8c7d2b2f2d1e76fb",
                "username": "test2",
                "email": "nikeseg481@bixolabs.com"
            },
            "_id": "6558e96c3da282c3305bd0cc",
            "status": "rejected",
            "createdAt": "2023-11-18T16:42:20.406Z",
            "updatedAt": "2023-11-18T16:51:47.717Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65c245453f6c41ce70174542",
                "username": "admin.pranav",
                "email": "visavadiapa@gmail.com"
            },
            "_id": "65c245863f6c41ce70174547",
            "status": "approved",
            "createdAt": "2024-02-06T14:43:18.916Z",
            "updatedAt": "2024-02-06T14:46:34.682Z",
            "__v": 0
        }
    ];
    
    const renderAdminRequests = adminRequests.map(request => {
        return(
            <div className="admin-request-component">
                <div className="admin-request-name-email">
                    <div>
                        <span>Admin Name: </span>
                        <p>{request.user.username}</p>
                    </div>
                    <div>
                        <span>Admin Email: </span>
                        <p>{request.user.email}</p>
                    </div>
                </div>
                <div className="admin-request-status-created">
                    <div>
                        <span>Status: </span>
                        <p>{request.status}</p>
                    </div>
                    <div>
                        <span>Request Created At: </span>
                        <p>{new Date(request.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="admin-requests-btns">
                    <button className="approve dark-btn">Approve</button>
                    <button className="reject dark-btn">Reject</button>
                </div>
            </div>
        );
    });
    
    const renderDashboard = (btn) => {
        if(btn === "allFds"){
            return(
                <div className="fd-history">
                    <h1 className='heading'> FD History </h1>
                    {renderAllFds}
                    {
                        pagination ? 
                        <div className='pagination'>
                            <button onClick={previousPage} disabled={page === 1} >Previous</button>
                            <p className='page-p'> {page} out of {pages} Pages </p>
                            <button onClick={nextPage} disabled={page === pages} >Next</button>
                        </div>
                        : null
                    }
                </div>
            );
        }
        else if(btn === "adminRequests"){
            return(
                <div className='admin-requests'>
                    <h1 className='heading'> Admin Requests </h1>
                    {renderAdminRequests}
                </div>
            );
        }
        else if(btn === "adminList"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'> Admin List </h1>
                </div>
            );
        }
        else if(btn === "allUsers"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'> All Users </h1>
                </div>
            );
        }
        else if(btn === "allTransactions"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'> All Transactions </h1>
                </div>
            );
        }
    }
    
    const renderAllFds = allFdDetails && allFdDetails.map(fd => {
        return (
            <FdHistory
                key = {fd._id}
                user = {fd.user.username}
                transaction={fd.status}
                createdAt={fd.createdAt}
                matureDate={fd.matureDate}
                amount={fd.amount}
                maturityValue={fd.maturityValue}
                interest={fd.interest}
                months={fd.months}
            />
        );
    });
    
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
    }, [page]);
    
    return (
        <div className='superadmin-main'>
            <div className="profile-and-buttons">
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
            <div className="details-for-admin">
                {renderDashboard(btn)}
            </div>
        </div>
    );
}

export default Superadmin;