import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    greetings: [],
    loading: false,
    error: "",
};

export const fetchGreetings = createAsyncThunk(
    "greetings/fetchGreetings",
    async () => {
        const url = "/api/greetings";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const greetingsSlice = createSlice({
    name: "greetings",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchGreetings.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchGreetings.fulfilled, (state, action) => {
                state.loading = false;
                state.greetings = action.payload;
            })
            .addCase(fetchGreetings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default greetingsSlice.reducer;