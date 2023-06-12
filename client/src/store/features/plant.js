import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlantById as apiGetPlantById } from '../../lib/apiClient';

export const getPlantById = createAsyncThunk(
  'plant/getPlantById',
  async(id) => {
    const response = await apiGetPlantById(id);
    return response;
  }
);

const plantSlice = createSlice({
  name: 'plant',
  initialState: {
    loading: false,
    plantObj: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.plantObj = action.payload;
        state.error = null;
      })
      .addCase(getPlantById.rejected, (state, action) => {
        state.loading = false;
        state.plantObj = {};
        state.error = action.error.code;
      });
  }
});

export default plantSlice.reducer;
