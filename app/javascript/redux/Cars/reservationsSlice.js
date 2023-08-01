import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseReservationUrl = 'http://127.0.0.1:3000/api/v1/reservations';

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reservationData, thunkAPI) => {
    try {
      const response = await fetch(baseReservationUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: true,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createReservation.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(createReservation.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));   
  },
});

export default reservationsSlice.reducer;
