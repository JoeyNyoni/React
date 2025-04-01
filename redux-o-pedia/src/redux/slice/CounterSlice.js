// reducers are pure functions that take the current state and an action as arguments, and return a new state result.
// actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
import { createSlice } from '@reduxjs/toolkit';
import { resetRedux } from '../action/actions';

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // Reducer functions to handle actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // Multiplier counter
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // }
  },
  extraReducers: (builder) => {
    // Add any extra reducers here if needed
    builder.addCase(resetRedux, (state, action) => {
      state.count = 10; // Reset counter when destination is reset
    });
  },
});

export const { increment, decrement, incrementMultiplier, decrementMultiplier, resetCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;