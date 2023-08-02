import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './redux/carsSlice';
import reservationsReducer from './redux/reservationsSlice';

const store = configureStore({
  reducer: {
    car: carsReducer,
    reservation: reservationsReducer,
  },
});

export default store;
