import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import plantsReducer from './reducers/plantsReducer';

const store = configureStore({
  reducer: {
    plants: plantsReducer,
  }}, applyMiddleware(thunk));

export default store;