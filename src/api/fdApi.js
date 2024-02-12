import axios from 'axios';
import { baseUrl } from './url';

const token = JSON.parse(sessionStorage.getItem('fdt'));
const headersList = {
    "Accept": "*/*",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json" 
}

// User Wallet
export const getWalletDetails = async (data, setWallet) => {
    const reqOptions = {
        url: `${baseUrl}/wallet/${data.userId}`,
        method: "GET",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        setWallet(res.data);
    } catch (error) {
        error && alert(error?.response?.data?.message);
    }
}

// User Transactions
export const getTransactions = async (data, setTransactions) => {
    try {
        const res = await axios.post(`${baseUrl}/transaction/`, data);
        setTransactions(res.data);
    } catch (error) {
        error && alert(error?.response?.data);
    }
}

// Deposit
export const deposit = async (data, setAmount) => {
    const reqOptions = {
        url: `${baseUrl}/wallet/deposit`,
        method: "POST",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        alert(res.data);
        setAmount('');
    } catch (error) {
        console.log(error?.response);
        error && alert(error?.response?.data?.message);
    }
}

// Withdraw
export const withdraw = async (data, setAmount) => {
    const reqOptions = {
        url: `${baseUrl}/wallet/withdraw`,
        method: "POST",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        alert(res.data);
        setAmount('');
    } catch (error) {
        console.log(error?.response);
        error && alert(error?.response?.data?.message);
    }
}

// Fetch All rates for a user
export const getUserRates = async (data, setRates) => {
    try {
        const res = await axios.get(`${baseUrl}/rate/${data.user}`);
        setRates(res.data);
    } catch (error) {
        console.log(error?.response);
        error && alert(error?.response?.data?.message);
    }
}

// User Details
export const getUser = async (data, setUserDetails) => {
    try {
        const res = await axios.get(`${baseUrl}/user/${data.userId}`, data);
        setUserDetails(res.data);
    } catch (error) {
        console.log(error);
    }
}

// User Update
export const updateUser = async (data, navigate) => {
    const reqOptions = {
        url: `${baseUrl}/user/update/${data.userId}`,
        method: "PUT",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        alert(res?.data);
        navigate('/profile')
    } catch (error) {
        console.log(error);
    }
}

// Delete Rate
export const deleteRate = async (data, setRatesUpdated) => {
    const reqOptions = {
        url: `${baseUrl}/admin/rate/delete/${data.rateId}`,
        method: "DELETE",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        if(res.data === "Rate Deleted!"){
            setRatesUpdated(res.data);
        }
        alert(res?.data);
    } catch (error) {
        console.log(error);
    }
}

// Create Rate
export const createRate = async (data, setRatesUpdated, setBtn) => {
    const reqOptions = {
        url: `${baseUrl}/admin/rate/create`,
        method: "POST",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        if(res.data === "New Rate Created"){
            setRatesUpdated(new Date().getUTCMilliseconds());
            setBtn("currentRate");
        }
        alert(res?.data);
    } catch (error) {
        console.log(error);
    }
}

// create FD
export const createFd = async (data, setBtn) => {
    const reqOptions = {
        url: `${baseUrl}/fd/create`,
        method: "POST",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        if(res.data === "Fd created!"){
            setBtn("fd");
        }
        alert(res?.data);
    } catch (error) {
        console.log(error);
        alert(error?.response?.data);
    }
}