import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './redux/Cars/carsSlice';
import reservationsReducer from './redux/Reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
