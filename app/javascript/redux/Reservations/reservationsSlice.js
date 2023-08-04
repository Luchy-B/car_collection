import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";

const API_URL = '/api/v1/reservations';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('API Error:', error);
      return thunkAPI.rejectWithValue('Failed to fetch reservations');
    }
  },
);

const initialState = {
  reservations: [],
  isLoading: true,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        reservations: action.payload,
      }))
      .addCase(fetchReservations.rejected, (state) => ({
        ...state,
        isLoading: true,
      }));
  },
});

export default reservationsSlice.reducer;
