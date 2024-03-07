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
import AccountHistory from '../User/Profile/AccountHistory';

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
            <div className="admin-request-component" key={request._id}>
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
    
    const adminList = [
        {
            "otp": null,
            "validated": false,
            "_id": "65528b5e75354a8cb69eb168",
            "username": "test",
            "email": "tawof37701@jucatyo.com",
            "active": false,
            "ratesCreated": [],
            "adminStatus": "temporary",
            "createdAt": "2023-11-13T20:47:26.382Z",
            "updatedAt": "2023-11-13T20:47:26.382Z",
            "__v": 0
        },
        {
            "otp": null,
            "validated": false,
            "_id": "65528e194fda87b48dc7dd74",
            "username": "admin.test1",
            "email": "rekesa8211@mainmile.com",
            "active": true,
            "ratesCreated": [],
            "adminStatus": "permanent",
            "createdAt": "2023-11-13T20:59:05.569Z",
            "updatedAt": "2023-11-14T09:01:46.906Z",
            "__v": 0,
            "password": "$2b$10$SfmX7WE6aHaDIuCV3kdXreC8HtAwnVWfzr.McOm2ctZ.9MXpzd6Uy"
        },
        {
            "_id": "6558e37c8c7d2b2f2d1e76fb",
            "username": "test2",
            "email": "nikeseg481@bixolabs.com",
            "otp": null,
            "validated": true,
            "active": false,
            "ratesCreated": [],
            "adminStatus": "temporary",
            "createdAt": "2023-11-18T16:17:00.958Z",
            "updatedAt": "2023-11-18T16:42:20.090Z",
            "__v": 0
        },
        {
            "_id": "65c245453f6c41ce70174542",
            "username": "admin.pranav",
            "email": "visavadiapa@gmail.com",
            "otp": null,
            "validated": true,
            "active": true,
            "ratesCreated": [],
            "adminStatus": "permanent",
            "createdAt": "2024-02-06T14:42:13.959Z",
            "updatedAt": "2024-02-06T14:46:35.115Z",
            "__v": 0,
            "password": "$2b$10$XlZD9WHHkEsNAtTZPaJpWejaNjGo1x1hFnj1Hiqh/5jXynqIc5YaC"
        }
    ];

    const renderAdminList = adminList.map(admin => {
        return (
            <div className="admin-list-component" key={admin._id}>
                <div>
                    <span>Admin Name: </span>
                    <p>{admin.username}</p>
                </div>
                <div className='admin-list-email'>
                    <span>Email: </span>
                    <p>{admin.email}</p>
                </div>
                <div className="admin-list-active-status">
                    <div>
                        <span>Active</span>
                        <p>{admin.active ? "True" : "False"}</p>
                    </div>
                    <div>
                        <span>Status: </span>
                        <p>{admin.adminStatus}</p>
                    </div>
                </div>
                <div className="admin-list-rates-created">
                    <div>
                        <span>Rates Created: </span>
                        <p>{admin.ratesCreated.length}</p>
                    </div>
                    <div>
                        <span>Admin Created At: </span>
                        <p>{new Date(admin.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <button className="admin-list-view-admin-btn dark-btn">View Admin</button>
            </div>
        );
    });
    
    const userList = [
        {
            "otp": null,
            "active": false,
            "account": "normal",
            "_id": "64491f9586c74ee384f11079",
            "username": "test",
            "email": "cixoma3117@in2reach.com",
            "password": "$2b$10$XlqnWA9RR55GTdzX9iLgQelo/Xb9AWuGPJAgyCL1gQNRt.xI6x0aK",
            "Fd": [],
            "profilepic": "",
            "createdAt": "2023-04-26T12:56:53.350Z",
            "updatedAt": "2023-11-07T08:49:50.296Z",
            "__v": 0,
            "dateOfBirth": null,
            "work": ""
        },
        {
            "otp": null,
            "_id": "640c5cafd6ce082123d658b8",
            "username": "pranav",
            "email": "visavadiapa@gmail.com",
            "password": "$2b$10$uZYio4QnvgeyoXQXP3utfuMCfpb5LMz4EowK/mvGOPkM3/SUeFY8G",
            "Fd": [
                "640c6027d6ce082123d658c6",
                "641471da6ab60c43eea23123",
                "641472c21f34fddee975aa09",
                "6419a195e3dd08ee7c40f762",
                "6419a3934f54bb13238f1eb6",
                "6419a3e5404acb18670e17b0"
            ],
            "profilepic": "",
            "__v": 0,
            "updatedAt": "2023-11-08T03:00:06.565Z",
            "work": "Full Stack Developer",
            "dateOfBirth": "1998-11-08T00:00:00.000Z",
            "active": true,
            "account": "student"
        },
        {
            "otp": null,
            "active": false,
            "account": "normal",
            "_id": "640c243bbcadc9188c24b4e4",
            "username": "lalu",
            "email": "preyansh51199@gmail.com",
            "password": "$2b$10$fxC4MTdTmHsornhK1LYhs.RmSEuqwuBmRPxh5MywVfv0Ojf469IAS",
            "Fd": [
                "640c60aad6ce082123d658cf",
                "640c674b2e49ef1c82021c57",
                "640c679494bc620eca8020d0",
                "640c824499eabec4d06827cb"
            ],
            "profilepic": "",
            "__v": 0
        },
        {
            "otp": null,
            "active": false,
            "account": "normal",
            "_id": "64f46c1f2a4036c296ba20bf",
            "username": "vyom",
            "email": "geyoci9888@synclane.com",
            "password": "$2b$10$tj3njBjB1xW2GulMWW27/uYGhkdzsVk3HaETCfzCKZO7gjqrMwnCi",
            "Fd": [],
            "profilepic": "",
            "createdAt": "2023-09-03T11:21:03.490Z",
            "updatedAt": "2023-09-15T04:06:27.062Z",
            "__v": 0,
            "dateOfBirth": "2004-06-15T00:00:00.000Z",
            "work": "Student at MIT"
        },
        {
            "_id": "6558d7cbfe3e7b3a9f623345",
            "username": "test1",
            "email": "nikeseg481@bixolabs.com",
            "password": "$2b$10$NijNfMmm0HtQ53iFq9IYsujrHfPKfjeLejHwZOEzPRtXRpTG9k0Wm",
            "otp": null,
            "active": true,
            "account": "normal",
            "Fd": [],
            "profilepic": "",
            "createdAt": "2023-11-18T15:27:07.078Z",
            "updatedAt": "2023-11-18T15:35:01.156Z",
            "__v": 0
        },
        {
            "_id": "65591bd54a4cc756260876a6",
            "username": "rishi",
            "email": "vadukulrishi@gmail.com",
            "password": "$2b$10$y8Y/7FO1u0sf3Vh0bTXtvegVIpSbGONkCkzTWdFg6vWJoeNFeqUQa",
            "otp": null,
            "active": true,
            "account": "normal",
            "Fd": [
                "65591d7b75296cee6d93e74b",
                "65ca6027d40765bcd9930748",
                "65ca649c81744ab2223639e6"
            ],
            "profilepic": "",
            "createdAt": "2023-11-18T20:17:25.607Z",
            "updatedAt": "2024-02-12T18:34:05.016Z",
            "__v": 0,
            "dateOfBirth": null,
            "work": ""
        },
        {
            "_id": "6559eaf81a5e7d88e9d09d7f",
            "username": "test3",
            "email": "wepak72107@bikedid.com",
            "password": "$2b$10$7FZ.EyLv/ytsACOQNjHz4ODkzEmHTGEcYJaX4puvo5DEtnec9gYR.",
            "otp": null,
            "active": true,
            "account": "normal",
            "Fd": [],
            "profilepic": "",
            "createdAt": "2023-11-19T11:01:12.122Z",
            "updatedAt": "2023-11-19T11:19:28.932Z",
            "__v": 0
        },
        {
            "_id": "65cb24a82e62df7fec660892",
            "username": "yashraj",
            "email": "yashrajchanchad@gmail.com",
            "password": "$2b$10$df8Z8sa4jawTtlp9SX3eleHhVAHggQ6ngOIecIoLVFN6NwyRspb9u",
            "otp": null,
            "active": true,
            "account": "normal",
            "Fd": [
                "65cb255a2e62df7fec6608b4"
            ],
            "profilepic": "",
            "createdAt": "2024-02-13T08:13:28.952Z",
            "updatedAt": "2024-02-13T08:16:28.021Z",
            "__v": 0
        }
    ];

    const renderUserList = userList.map(user => {
        return (
            <div className="all-users-component" key={user._id}>
                <div className="all-users-name-email">
                    <div>
                        <span>User: </span>
                        <p>{user.username}</p>
                    </div>
                    <div>
                        <span>Email: </span>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="all-users-account-fds">
                    <div>
                        <span>Account: </span>
                        <p>{user.account}</p>
                    </div>
                    <div>
                        <span>Fds: </span>
                        <p>{user.Fd.length}</p>
                    </div>
                </div>
                <div className="all-users-work-created">
                    <div>
                        <span>Work: </span>
                        <p>{(user.work === null || user.work === "") ? "None" : user.work}</p>
                    </div>
                    <div>
                        <span>Created At: </span>
                        <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <button className="all-users-show-user dark-btn">Show User</button>
            </div>
        );
    });
    
    const transactions = [
        {
            "user": {
                "userId": "640c2444bcadc9188c24b4e8",
                "username": "rishi"
            },
            "_id": "641486295183cb608e415aab",
            "transaction": "create fd",
            "amount": 10000,
            "createdAt": "2023-03-17T15:24:25.672Z",
            "updatedAt": "2023-03-17T15:24:25.672Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4ab9d90a5b2044d286af6",
            "transaction": "deposit",
            "amount": 1500,
            "createdAt": "2023-09-03T15:51:57.310Z",
            "updatedAt": "2023-09-03T15:51:57.310Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "64f4a69175e4b269bbddfd17",
            "transaction": "deposit",
            "amount": 2500,
            "createdAt": "2023-09-03T15:30:25.840Z",
            "updatedAt": "2023-09-03T15:30:25.840Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c2444bcadc9188c24b4e8",
                "username": "rishi"
            },
            "_id": "641485d95183cb608e415a97",
            "transaction": "create fd",
            "amount": 6000,
            "createdAt": "2023-03-17T15:23:05.391Z",
            "updatedAt": "2023-03-17T15:23:05.391Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "6419a174e3dd08ee7c40f75e",
            "transaction": "deposit",
            "amount": 5000,
            "createdAt": "2023-03-21T12:22:12.958Z",
            "updatedAt": "2023-03-21T12:22:12.958Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "64147f24ecd4294dbe3e0949",
            "transaction": "deposit",
            "amount": 5000,
            "createdAt": "2023-03-17T14:54:28.109Z",
            "updatedAt": "2023-03-17T14:54:28.109Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "6419a3e6404acb18670e17b5",
            "transaction": "create fd",
            "amount": 5000,
            "createdAt": "2023-03-21T12:32:38.716Z",
            "updatedAt": "2023-03-21T12:32:38.716Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "64147f3aecd4294dbe3e094d",
            "transaction": "withdraw",
            "amount": 5000,
            "createdAt": "2023-03-17T14:54:50.238Z",
            "updatedAt": "2023-03-17T14:54:50.238Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c2444bcadc9188c24b4e8",
                "username": "rishi"
            },
            "_id": "641481c14cfe62d4ee6b7fb9",
            "transaction": "deposit",
            "amount": 12000,
            "createdAt": "2023-03-17T15:05:37.419Z",
            "updatedAt": "2023-03-17T15:05:37.419Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "654a25a1203aa7ad6ff9c664",
            "transaction": "deposit",
            "amount": 25000,
            "createdAt": "2023-11-07T11:55:13.894Z",
            "updatedAt": "2023-11-07T11:55:13.894Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4a6b3cb3de855bfbe82ba",
            "transaction": "deposit",
            "amount": 250,
            "createdAt": "2023-09-03T15:30:59.383Z",
            "updatedAt": "2023-09-03T15:30:59.383Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4ab5d90a5b2044d286aee",
            "transaction": "deposit",
            "amount": 7500,
            "createdAt": "2023-09-03T15:50:53.699Z",
            "updatedAt": "2023-09-03T15:50:53.699Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "64f4a6a8cb3de855bfbe82b6",
            "transaction": "deposit",
            "amount": 2500,
            "createdAt": "2023-09-03T15:30:48.611Z",
            "updatedAt": "2023-09-03T15:30:48.611Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "64f4ac7490a5b2044d286e9b",
            "transaction": "withdraw",
            "amount": 2000,
            "createdAt": "2023-09-03T15:55:32.123Z",
            "updatedAt": "2023-09-03T15:55:32.123Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65591cd638cd06f373533be2",
            "transaction": "deposit",
            "amount": 10000,
            "createdAt": "2023-11-18T20:21:42.953Z",
            "updatedAt": "2023-11-18T20:21:42.953Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c2444bcadc9188c24b4e8",
                "username": "rishi"
            },
            "_id": "641481d34cfe62d4ee6b7fbe",
            "transaction": "withdraw",
            "amount": 2000,
            "createdAt": "2023-03-17T15:05:55.428Z",
            "updatedAt": "2023-03-17T15:05:55.428Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "654a5310203aa7ad6ff9c6c1",
            "transaction": "withdraw",
            "amount": 3000,
            "createdAt": "2023-11-07T15:09:04.731Z",
            "updatedAt": "2023-11-07T15:09:04.731Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "6419a197e3dd08ee7c40f767",
            "transaction": "create fd",
            "amount": 5000,
            "createdAt": "2023-03-21T12:22:47.045Z",
            "updatedAt": "2023-03-21T12:22:47.045Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c5cafd6ce082123d658b8",
                "username": "pranav"
            },
            "_id": "6419a3954f54bb13238f1ebb",
            "transaction": "create fd",
            "amount": 5000,
            "createdAt": "2023-03-21T12:31:17.305Z",
            "updatedAt": "2023-03-21T12:31:17.305Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4a753cb3de855bfbe82c1",
            "transaction": "deposit",
            "amount": 2500,
            "createdAt": "2023-09-03T15:33:39.012Z",
            "updatedAt": "2023-09-03T15:33:39.012Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65591d7c75296cee6d93e750",
            "transaction": "create fd",
            "amount": 5000,
            "createdAt": "2023-11-18T20:24:28.172Z",
            "updatedAt": "2023-11-18T20:24:28.172Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "640c2444bcadc9188c24b4e8",
                "username": "rishi"
            },
            "_id": "641485ff5183cb608e415a9e",
            "transaction": "brake fd",
            "amount": 6000,
            "createdAt": "2023-03-17T15:23:43.381Z",
            "updatedAt": "2023-03-17T15:23:43.381Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4abdf90a5b2044d286b08",
            "transaction": "deposit",
            "amount": 2500,
            "createdAt": "2023-09-03T15:53:03.680Z",
            "updatedAt": "2023-09-03T15:53:03.680Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64f46c1f2a4036c296ba20bf",
                "username": "vyom"
            },
            "_id": "64f4a84a1727c58a07312a23",
            "transaction": "withdraw",
            "amount": 250,
            "createdAt": "2023-09-03T15:37:46.618Z",
            "updatedAt": "2023-09-03T15:37:46.618Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "64491f9586c74ee384f11079",
                "username": "test"
            },
            "_id": "64f4ac1190a5b2044d286b20",
            "transaction": "deposit",
            "amount": 15000,
            "createdAt": "2023-09-03T15:53:53.407Z",
            "updatedAt": "2023-09-03T15:53:53.407Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65c2396e5baf15ae08fa0f52",
            "transaction": "deposit",
            "amount": 15000,
            "createdAt": "2024-02-06T13:51:42.147Z",
            "updatedAt": "2024-02-06T13:51:42.147Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65ca6028d40765bcd993074d",
            "transaction": "create fd",
            "amount": 15000,
            "createdAt": "2024-02-12T18:15:04.897Z",
            "updatedAt": "2024-02-12T18:15:04.897Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65ca649d81744ab2223639eb",
            "transaction": "create fd",
            "amount": 5000,
            "createdAt": "2024-02-12T18:34:05.506Z",
            "updatedAt": "2024-02-12T18:34:05.506Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65591bd54a4cc756260876a6",
                "username": "rishi"
            },
            "_id": "65ca68db1c528365888b3811",
            "transaction": "deposit",
            "amount": 50000,
            "createdAt": "2024-02-12T18:52:11.506Z",
            "updatedAt": "2024-02-12T18:52:11.506Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65cb24a82e62df7fec660892",
                "username": "yashraj"
            },
            "_id": "65cb25392e62df7fec6608ab",
            "transaction": "deposit",
            "amount": 1000000,
            "createdAt": "2024-02-13T08:15:53.694Z",
            "updatedAt": "2024-02-13T08:15:53.694Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65cb24a82e62df7fec660892",
                "username": "yashraj"
            },
            "_id": "65cb255c2e62df7fec6608b9",
            "transaction": "create fd",
            "amount": 1000000,
            "createdAt": "2024-02-13T08:16:28.479Z",
            "updatedAt": "2024-02-13T08:16:28.479Z",
            "__v": 0
        },
        {
            "user": {
                "userId": "65cb24a82e62df7fec660892",
                "username": "yashraj"
            },
            "_id": "65cb257d2e62df7fec6608c5",
            "transaction": "deposit",
            "amount": 500000,
            "createdAt": "2024-02-13T08:17:01.058Z",
            "updatedAt": "2024-02-13T08:17:01.058Z",
            "__v": 0
        }
    ];
    
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
                    {renderAdminList}
                </div>
            );
        }
        else if(btn === "allUsers"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'> All Users </h1>
                    {renderUserList}
                </div>
            );
        }
        else if(btn === "allTransactions"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'> All Transactions </h1>
                    {
                        transactions && transactions.reverse().map(tran => {
                            return(
                            <AccountHistory
                                key={tran._id}
                                transaction={tran.transaction}
                                createdAt={tran.createdAt}
                                amount={tran.amount}
                            />
                            );
                        })
                    }
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
                            username = {user.username.split(".")[0]}
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