import { createSlice } from "@reduxjs/toolkit";
import { resetRedux } from "../action/actions";

const initialState = () => {
  return { 
    destinations: [
      {
        name: "Hong Kong",
        days: 5,
        fact: "One of the most densely populated cities in the world.",
      },
      {
        name: "Tokyo",
        days: 7,
        fact: "The world's most populous metropolis.",
      },
      {
        name: "Bangkok",
        days: 4,
        fact: "Known for its vibrant street life and cultural landmarks.",
      },
      {
        name: "Singapore",
        days: 6,
        fact: "A global financial hub with a tropical climate.",
      },
      {
        name: "Seoul",
        days: 5,
        fact: "Famous for its pop culture and technology.",
      }
    ],
    selectedDestination: null,
    showDetails: false,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.selectedDestination = action.payload;
    },
    resetDestination: (state) => {
      state.selectedDestination = null;
    },
  },
  extraReducers: (builder) => {
    // Add any extra reducers here if needed
    builder.addCase(resetRedux, (state, action) => {
      state.selectedDestination = null;; // Reset counter when destination is reset
    });
  },
});

export const { destinationClicked, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;