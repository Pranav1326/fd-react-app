import axios from 'axios';
import { baseUrl } from './url';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTRATION_FAILURE, REGISTRATION_START, OTP_AUTH_FAIL} from '../features/user/userSlice';

// const baseUrl = `http://localhost:5000/api`;

// User Login
export const userLogin = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post(`${baseUrl}/user/signin`, data);
        dispatch(LOGIN_SUCCESS(res.data));
        sessionStorage.setItem("fdt", JSON.stringify(res.data.token));
        sessionStorage.setItem("usrt", JSON.stringify(res.data.userType));
        navigate('/profile');
    } catch (error) {
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}

// Admin Login
export const adminLogin = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post(`${baseUrl}/admin/signin`, data);
        dispatch(LOGIN_SUCCESS(res.data));
        sessionStorage.setItem("fdt", JSON.stringify(res.data.token));
        sessionStorage.setItem("usrt", JSON.stringify(res.data.userType));
        navigate('/admindashboard');
    } catch (error) {
        console.log(error);
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}

// Superadmin Login
export const superadminLogin = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post(`${baseUrl}/superadmin/signin`, data);
        dispatch(LOGIN_SUCCESS(res.data));
        sessionStorage.setItem("fdt", JSON.stringify(res.data.token));
        sessionStorage.setItem("usrt", JSON.stringify(res.data.userType));
        navigate('/superadmindashboard');
    } catch (error) {
        console.log(error);
    }
}

// Logout
export const logout = async (dispatch, navigate) => {
    try {
        dispatch(LOGOUT());
        sessionStorage.removeItem("fdt");
        sessionStorage.removeItem("usrt");
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

// Registration
export const register = async (data, dispatch, setOtp) => {
    dispatch(REGISTRATION_START());
    try {
        const res = await axios.post(`${baseUrl}/user/signup`, data);
        alert(res.data);
        setOtp(true);
    } catch (error) {
        console.log(error);
        dispatch(REGISTRATION_FAILURE(error?.response?.data));
    }
}

// Registration with OTP
export const otpRegister = async (data, dispatch, navigate, setUserExists) => {
    try {
        const res = await axios.post(`${baseUrl}/user/signup/auth`, data);
        alert(res.data);
        setUserExists(true);
        navigate('/auth');
    } catch (error) {
        console.log(error);
        dispatch(OTP_AUTH_FAIL(error?.response?.data));
    }
}