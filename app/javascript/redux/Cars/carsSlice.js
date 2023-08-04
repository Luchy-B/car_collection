import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/cars';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCar = createAsyncThunk(
  'car/getCar',
  async (carId, thunkAPI) => {
    try {
      const getUrl = `${url}/${carId}`;
      const resp = await fetch(getUrl, { method: 'GET' });
      const data = await resp.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId, thunkAPI) => {
    try {
      const deleteUrl = `${url}/${carId}`;
      const resp = await fetch(deleteUrl, { method: 'DELETE' });
      const data = await resp.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addCar = createAsyncThunk('cars/addCar', async (carData, thunkAPI) => {
  try {
    const response = await axios.post(url, carData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  cars: [],
  car: [],
  isLoading: true,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCars.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        cars: action.payload,
      }))
      .addCase(getCars.rejected, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCar.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCar.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        car: action.payload,
      }))
      .addCase(getCar.rejected, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteCar.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteCar.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(deleteCar.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addCar.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addCar.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default carsSlice.reducer;
