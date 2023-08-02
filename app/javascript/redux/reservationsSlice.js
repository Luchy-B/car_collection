import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://localhost:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (_, thunkAPI) => {
    try {
        const response = await axios.get(API_URL);
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response);
    }
    }
);

const initialReservations = [
    {
      id: 1,
      car_name: "Item 1",
      date: "2023-08-02",
      city: "City 1",
    },
    {
      id: 2,
      car_name: "Item 2",
      date: "2023-08-03",
      city: "City 2",
    },  
  ];

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        data: initialReservations,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReservations.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchReservations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default reservationsSlice.reducer;