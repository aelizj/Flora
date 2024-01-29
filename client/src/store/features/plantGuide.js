import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPlantGuideById as apiGetPlantGuideById,
  patchPlantGuideById as apiPatchPlantGuideById,
  deletePlantGuideById as apiDeletePlantGuideById,
} from '../../lib/apiClient';
import {  } from "../../lib/apiClient";

export const getPlantGuideById = createAsyncThunk(
  'plantGuide/getPlantGuideById',
  async(id) => {
    const response = await apiGetPlantGuideById(id);
    return response;
  }
);

export const patchPlantGuideById = createAsyncThunk(
  'plantGuide/patchPlantGuideById',
  async(data, thunkAPI) => {
    try {
      const id = data.id;
      const response = await apiPatchPlantGuideById(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
);

export const deletePlantGuideById = createAsyncThunk(
  'plantGuide/deletePlantGuideById',
  async(id) => {
    const response = await apiDeletePlantGuideById(id);
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
      })
      .addCase(patchPlantGuideById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchPlantGuideById.fulfilled, (state, action) => {
        const { plantGuide } = action.payload;
        state.plantGuide = plantGuide;
        state.loading = false;
        state.error = null;
      })
      .addCase(patchPlantGuideById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(deletePlantGuideById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePlantGuideById.fulfilled, (state, action) => {
        state.loading = false;
        state.plantGuide = {};
        state.error = null;
      })
      .addCase(deletePlantGuideById.rejected, (state, action) => {
        state.loading = false;
        state.plantGuide = action.payload;
        state.error = action.error.code;
      });
  }
});

export default plantGuideSlice.reducer;
