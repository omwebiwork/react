// src/features/meetingsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Meeting {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    room: string;
}

interface MeetingsState {
    meetings: Meeting[];
}

const initialState: MeetingsState = {
    meetings: [],
};

const meetingsSlice = createSlice({
    name: "meetings",
    initialState,
    reducers: {
        setMeetings(state, action: PayloadAction<Meeting[]>) {
            state.meetings = action.payload;
        },
    },
});

export const { setMeetings } = meetingsSlice.actions;
export default meetingsSlice.reducer;
