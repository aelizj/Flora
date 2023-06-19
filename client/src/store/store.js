import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import plantsReducer from './features/plants';
import plantReducer from './features/plant';

const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
    plant: plantReducer,
  }});

export default store;
