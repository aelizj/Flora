import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser, registerUser as apiRegisterUser, validateToken as apiValidateToken, logoutUser as apiLogoutUser } from '../../lib/apiClient';

export function loadAuthState() {
  return async (dispatch) => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated'));

    if (authCookie) {
      const isAuthenticated = authCookie.split('=')[1];
      if (isAuthenticated) {
        try {
          const response = await apiValidateToken();
          dispatch(setCurrentUser(response));
        } catch (error) {
          console.error('Error validating token', error);
        }
      }
    }
  };
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

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async(thunkAPI) => {
    try {
      const response = await apiLogoutUser();
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
      const response = await apiRegisterUser(userData);
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
    setCurrentUser: (state, response) => {
      state.isAuthenticated = true;
      state.user = response.payload;
    },
  },
  extraReducers : (builder) => {
    builder
     .addCase(loginUser.pending, (state) => {
       state.loading = true;
       state.error = null;
     })
     .addCase(loginUser.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
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
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
     })
     .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.error.code;
     })
     .addCase(logoutUser.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    })
    .addCase(logoutUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.code;
    })
  }
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
