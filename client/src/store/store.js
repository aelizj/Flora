import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import plantsReducer from './features/plants';
import plantReducer from './features/plant';

const store = configureStore({
  reducer: {
    user: userReducer,
    plants: plantsReducer,
    plant: plantReducer,
  }});

export default store;
