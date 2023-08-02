import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './Cars/carsSlice';
import reservationsReducer from './Cars/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
