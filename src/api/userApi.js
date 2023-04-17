import axios from 'axios';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_UPDATE} from '../features/user/userSlice';

const baseUrl = `http://localhost:5000/api`;

// User Login
export const userLogin = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post(`${baseUrl}/user/signin`, data);
        dispatch(LOGIN_SUCCESS(res.data));
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate('/');
    } catch (error) {
        console.log(error);
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}

// Admin Login
export const adminLogin = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post(`${baseUrl}/user/login`, data);
        dispatch(LOGIN_SUCCESS(res.data));
        localStorage.setItem("user", JSON.stringify(res.data.userInfo));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate('/');
    } catch (error) {
        console.log(error);
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}