import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginUser as apiLoginUser,
  registerUser as apiRegisterUser,
  validateToken as apiValidateToken,
  logoutUser as apiLogoutUser,
  patchUser as apiPatchUser,
  getUserById as apiGetUserById,
  deleteUserById as apiDeleteUserById,
} from '../../lib/apiClient';

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
          console.log(response);
          dispatch(setCurrentUser(response));
        } catch (error) {
          console.error('Error validating token', error);
        }
      }
    }
  };
};

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async(data, thunkAPI) => {
    try {
      const id = data.id;
      const response = await apiGetUserById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'user/deleteUserById',
  async(data, thunkAPI) => {
    try {
      const id = data.id;
      const response = await apiDeleteUserById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
)

export const patchUser = createAsyncThunk(
  'user/patchUser',
  async(data, thunkAPI) => {
    try {
      const id = data.id;
      const response = await apiPatchUser(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async(data, thunkAPI) => {
    try {
      const response = await apiLoginUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
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
  'user/registerUser',
  async(data, thunkAPI) => {
    try {
      const response = await apiRegisterUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
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
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.user = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(patchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.loading = false;
        state.error = null;
      })
      .addCase(patchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(deleteUserById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = null;
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = action.error.code;
      });
  }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
