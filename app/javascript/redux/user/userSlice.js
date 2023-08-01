import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/registrations';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (initialUser) => {
    try {
      const res = await axios.post(
        url,
        {
          user: {
            ...initialUser,
          },
        },
        { withCredentials: true },
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (initialUser) => {
    try {
      const res = await axios.post(
        'http://127.0.0.1:3000/session',
        {
          user: {
            ...initialUser,
          },
        },
        { withCredentials: true },
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => ({
        ...state,
      }))
      .addCase(createUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
      }))
      .addCase(createUser.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      }))
      .addCase(loginUser.pending, (state) => ({
        ...state,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      }));
  },
});

export default userSlice.reducer;
