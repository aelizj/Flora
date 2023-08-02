import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPlants as apiGetPlants } from '../../lib/apiClient';
import { createPlant as apiCreatePlant } from '../../lib/apiClient';

export const getPlants = createAsyncThunk(
  'plants/getPlants',
  async() => {
    const response = await apiGetPlants();
    return response;
  }
);

export const createPlant = createAsyncThunk(
  'plants/createPlant',
  async(newPlant) => {
    const response = await apiCreatePlant(newPlant);
    return response;
  }
);

const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    loading: false,
    plantsArray: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plantsArray = [...action.payload];
        state.error = null;
      })
      .addCase(getPlants.rejected, (state, action) => {
        state.loading = false;
        state.plantsArray = [];
        state.error = action.error.code;
      })
      .addCase(createPlant.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPlant.fulfilled, (state, action) => {
        state.loading = false;
        state.plantsArray = [...state.plantsArray, action.payload[0]];
      })
      .addCase(createPlant.rejected, (state, action) => {
        state.loading = false;
        state.plantsArray = [...state.plantsArray];
        state.error = action.error.code;
      });
  }
});

export default plantsSlice.reducer;
