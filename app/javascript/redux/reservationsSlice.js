import { createSlice, craetAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response);
    }
    }
);

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        data: [],
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