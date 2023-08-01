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
      return initialUser;
    } catch (error) {
      return error.message;
    }
  },
);

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

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
      }));
  },
});

export default userSlice.reducer;
