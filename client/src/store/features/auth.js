import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser, registerUser as apiRegisterUser, validateToken as apiValidateToken } from '../../lib/apiClient';

export function loadAuthState() {
  console.log('Inside loadAuthState function');

  return async (dispatch) => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated'));
      console.log('has AuthCookie? ' + authCookie)

    if (authCookie) {
      const isAuthenticated = authCookie.split('=')[1];
      console.log('isAuthenticated? ' + isAuthenticated)
      if (isAuthenticated) {
        try {
          const response = await apiValidateToken();
          console.log(response);
          dispatch(setCurrentUser(response));
        } catch (error) {
          console.log('Error validating token', error);
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
     });
  }
});

export const { setCurrentUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
