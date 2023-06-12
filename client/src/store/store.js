import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from './features/plants';
import plantReducer from './features/plant';

const store = configureStore({
  reducer: {
    plants: plantsReducer,
    plant: plantReducer,
  }});

export default store;
