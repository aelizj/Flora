import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPlantGuides as apiGetPlantGuides } from '../../lib/apiClient';
import { createPlantGuide as apiCreatePlantGuide } from '../../lib/apiClient';

export const getPlantGuides = createAsyncThunk(
  'plantGuides/getPlantGuides',
  async() => {
    const response = await apiGetPlantGuides();
    return response;
  }
);

export const createPlantGuide = createAsyncThunk(
  'plantGuides/createPlantGuide',
  async(data) => {
    const response = await apiCreatePlantGuide(data);
    return response;
  }
);

const plantGuidesSlice = createSlice({
  name: 'plantGuides',
  initialState: {
    loading: false,
    plantGuidesArray: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlantGuides.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlantGuides.fulfilled, (state, action) => {
        state.loading = false;
        state.plantGuidesArray = [...action.payload];
        state.error = null;
      })
      .addCase(getPlantGuides.rejected, (state, action) => {
        state.loading = false;
        state.plantGuidesArray = [];
        state.error = action.error.code;
      })
      .addCase(createPlantGuide.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPlantGuide.fulfilled, (state, action) => {
        state.loading = false;
        state.plantGuidesArray = [...state.plantGuidesArray, action.payload[0]];
      })
      .addCase(createPlantGuide.rejected, (state, action) => {
        state.loading = false;
        state.plantGuidesArray = [...state.plantGuidesArray];
        state.error = action.error.code;
      });
  }
});

export default plantGuidesSlice.reducer;
