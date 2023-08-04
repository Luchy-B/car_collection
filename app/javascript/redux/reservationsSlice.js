import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";

const API_URL = '/api/v1/reservations';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_URL);
      // const response = await axios.get(API_URL);
      console.log('API Response:', response);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      return thunkAPI.rejectWithValue('Failed to fetch reservations');
    }
  },
);

const initialReservations = [
  {
    id: 1,
    car_name: 'Ferrari 2023',
    date: '2023-08-02',
    city: 'Abuja, Nigeria',
  },
  {
    id: 2,
    car_name: 'Ferrari 2022',
    date: '2023-08-03',
    city: 'Abuja, Nigeria',
  },
];

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: initialReservations,
  },

  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchReservations.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchReservations.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchReservations.rejected, (state) => {
  //       state.loading = false;
  //       state.error = true;
  //     });
  // },
  extraReducers: {
    [fetchReservations.fulfilled]: (state, action) => {
      let newState = state.reservations;
      newState = action.payload;
      return newState;
    },
  },
});

export default reservationsSlice.reducer;
