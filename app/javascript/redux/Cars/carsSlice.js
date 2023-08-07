import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCar = createAsyncThunk('cars/addCar', async (carData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/cars', carData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.error = null;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
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
      .addCase(deleteCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCar.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
