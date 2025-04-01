import { createAction } from "@reduxjs/toolkit";

// Action creators are functions that return an action object
// They are used to create actions that can be dispatched to the Redux store

export const resetRedux = createAction("redux/reset");