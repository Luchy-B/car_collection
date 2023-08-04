import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './redux/Cars/carsSlice';
import reservationsReducer from './redux/Reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    car: carsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
