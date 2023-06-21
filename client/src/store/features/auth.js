import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser, registerUser as apiRegisterUser } from '../../lib/apiClient';
import jwt_decode from 'jwt-decode';

export function loadAuthState() {
  return (dispatch) => {
    const isAuthenticated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated'))
      .split('=')[1];

    if (isAuthenticated) {
      dispatch(setCurrentUser());
    }
  }
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async(loginData, thunkAPI) => {
    try {
      const response = await apiLoginUser(loginData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async(userData, thunkAPI) => {
    try {
      const response = await apiRegisterUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: null,
  },
  reducers: {
    setCurrentUser: (state) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    }
  },
  extraReducers : (builder) => {
    builder
     .addCase(loginUser.pending, (state) => {
       state.loading = true;
       state.error = null;
     })
     .addCase(loginUser.fulfilled, (state, action) => {
      const { token } = action.payload;
      const decoded = jwt_decode(token);
      state.isAuthenticated = true;
      state.user = decoded;
      state.loading = false;
      state.error = null;
     })
     .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.error.code;
     })
     .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
     })
     .addCase(registerUser.fulfilled, (state, action) => {
      const { token } = action.payload;
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token);
      state.isAuthenticated = true;
      state.user = decoded;
      state.loading = false;
      state.error = null;
     })
     .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.error.code;
     });
  }
});

export const { setCurrentUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;