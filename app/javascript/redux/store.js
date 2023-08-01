import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './Cars/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;