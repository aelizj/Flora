import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import plantsReducer from './reducers/plantsReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
})

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;