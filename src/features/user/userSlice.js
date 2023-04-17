import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: JSON.parse(localStorage.getItem("token")) || null,
    isFetching: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN_START: (state) => {
            state.token = null;
            state.isFetching = true;
            state.error = false;
        },
        LOGIN_SUCCESS: (state, action) => {
            state.token = action.payload.token;
            state.isFetching = false;
            state.error = false;
        },
        LOGIN_FAILURE: (state) => {
            state.token = null;
            state.isFetching = false;
            state.error = true;
        },
        LOGOUT: (state) => {
            state.token = null;
            state.isFetching = false;
            state.error = false;
        },
        USER_UPDATE: (state, action) => {
            state.token = action.payload;
            state.isFetching = false;
            state.error = false;
        },
    },
});

export const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_UPDATE } = userSlice.actions;

export default userSlice.reducer;