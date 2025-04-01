import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slice/CounterSlice';
import { destinationReducer } from './slice/DestinationSlice';

// Setup Redux store
// only one store per application!!!
export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

console.log(store.getState()); // Log the initial state of the store