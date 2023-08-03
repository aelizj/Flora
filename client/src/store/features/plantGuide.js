import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlantGuideById as apiGetPlantGuideById } from '../../lib/apiClient';

export const getPlantGuideById = createAsyncThunk(
  'plantGuide/getPlantGuideById',
  async(id) => {
    const response = await apiGetPlantGuideById(id);
    return response;
  }
);

const plantGuideSlice = createSlice({
  name: 'plantGuide',
  initialState: {
    loading: false,
    plantGuide: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlantGuideById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlantGuideById.fulfilled, (state, action) => {
        state.loading = false;
        state.plantGuide = action.payload;
        state.error = null;
      })
      .addCase(getPlantGuideById.rejected, (state, action) => {
        state.loading = false;
        state.plantGuide = {};
        state.error = action.error.code;
      });
  }
});

export default plantGuideSlice.reducer;
