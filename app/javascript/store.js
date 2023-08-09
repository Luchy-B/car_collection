import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './redux/Cars/carsSlice';
import reservationsReducer from './redux/Reservations/reservationsSlice';
import userReducer from './redux/user/userSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsReducer,
    user: userReducer,
  },
});

export default store;
