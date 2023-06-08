import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPlants } from '../../lib/apiClient';

export const fetchPlants = createAsyncThunk(
  'plants/fetchPlants',
  async() => {
    const response = await getPlants();
    return response.data;
  }
);

const plantSlice = createSlice({
  name: 'plants',
  initialState: {
    loading: false,
    plantsList: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plantsList = action.payload;
        state.error = null;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.plantsList = [];
        state.error = action.error.code.message;
      });
  }
});

export default plantSlice.reducer;