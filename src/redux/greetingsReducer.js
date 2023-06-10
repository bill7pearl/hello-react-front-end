import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000';

export const fetchGreetings = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch(`${API_URL}/greetings`);
    const data = await res.json();
    return data.greeting;
  },
);

const initialState = {
  greeting: '',
  error: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        error: '',
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;