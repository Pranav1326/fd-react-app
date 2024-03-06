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
    const [ btn, setBtn ] = useState("fd");
    const [ centerDetails, setCenterDetails ] = useState(null);
    const [ allFdDetails, setAllFdDetails] = useState(null);
    const [ rates, setRates ] = useState(null);
    const [ ratesUpdated, setRatesUpdated ] = useState(null);
    // Pagination
    // eslint-disable-next-line
    const [ pagination, setPagination] = useState(true);
    const [ page, setPage ] = useState(1);
    const [ pages, setPages ] = useState();
    
    const user = jwtPayloadDecoder.getPayload(JSON.parse(sessionStorage.getItem("fdt")));
    
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
    
    const renderDashboard = (btn) => {
        if(btn === "fd"){
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
        else if(btn === "createRate"){
            return <CreateRate user={user} setRatesUpdated={setRatesUpdated} setBtn={setBtn} />
        }
        else if(btn === "currentRate"){
            return (
                <div className='current-rates-main'>
                    <h1 className='heading'>Current Rates</h1>
                    <div className="current-rates-div">
                        <CurrentRates rates={rates} setRatesUpdated={setRatesUpdated} user={user} for={"student"} />
                        <CurrentRates rates={rates} setRatesUpdated={setRatesUpdated} user={user} for={"normal"} />
                        <CurrentRates rates={rates} setRatesUpdated={setRatesUpdated} user={user} for={"senior"} />
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