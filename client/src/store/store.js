import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import plantGuidesReducer from './features/plantGuides';
import plantGuideReducer from './features/plantGuide';

const store = configureStore({
  reducer: {
    user: userReducer,
    plantGuides: plantGuidesReducer,
    plantGuide: plantGuideReducer,
  }});

export default store;
