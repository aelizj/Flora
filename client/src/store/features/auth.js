import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.isAuthenticated = !!action.payload;
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      const { token } = action.payload;
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token);
      state.isAuthenticated = true;
      state.user = decoded;
    }
  },
});

export const { setCurrentUser, loginUser } = authSlice.actions;

export default authSlice.reducer;