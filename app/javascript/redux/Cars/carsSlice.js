import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCar = createAsyncThunk('cars/addCar', async (carData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/cars', carData);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding car:', error.message);
    throw error;
  }
});

const carsSlice = createSlice({
  name: 'car',
  initialState: {
    cars: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      })
      .addCase(addCar.rejected, () => {

      });
  },
});

export default carsSlice.reducer;
