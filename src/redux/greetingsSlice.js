import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: [],
  loading: false,
  error: '',
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const url = 'http://127.0.0.1:3000/api/greetings';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        greeting: action.payload,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
