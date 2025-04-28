import { combineReducers } from "@reduxjs/toolkit";
import meetingsReducer from "./slice/meetingSlice";

export const combinedReducer = combineReducers({
    meetings: meetingsReducer,
});
