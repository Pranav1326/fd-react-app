import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: JSON.parse(sessionStorage.getItem("fdt")) || null,
    userType: JSON.parse(sessionStorage.getItem("usrt")),
    isFetching: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        REGISTRATION_START: (state) => {
            state.token = null;
            state.userType = null;
            state.isFetching = true;
            state.error = false;
        },
        OTP_AUTH_FAIL: (state, action) => {
            state.token = null;
            state.userType = null;
            state.isFetching = false;
            state.error = action.payload;
        },
        REGISTRATION_FAILURE: (state, action) => {
            state.token = null;
            state.userType = null;
            state.isFetching = false;
            state.error = action.payload;
        },
        LOGIN_START: (state) => {
            state.token = null;
            state.userType = null;
            state.isFetching = true;
            state.error = false;
        },
        LOGIN_SUCCESS: (state, action) => {
            state.token = action.payload.token;
            state.userType = action.payload.userType;
            state.isFetching = false;
            state.error = false;
        },
        LOGIN_FAILURE: (state) => {
            state.token = null;
            state.userType = null;
            state.isFetching = false;
            state.error = true;
        },
        LOGOUT: (state) => {
            state.token = null;
            state.userType = null;
            state.isFetching = false;
            state.error = false;
        },
        USER_UPDATE: (state, action) => {
            state.token = action.payload;
            // eslint-disable-next-line
            state.userType = state.userType;
            state.isFetching = false;
            state.error = false;
        },
    },
});

export const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_UPDATE, REGISTRATION_START, REGISTRATION_FAILURE, OTP_AUTH_FAIL } = userSlice.actions;

export default userSlice.reducer;