import React, { useEffect } from "react";
import MeetingList from "../components/MeetingList";
import { useDispatch } from "react-redux";
import { setMeetings } from "../store/slice/meetingSlice";
import { Box, Button, Typography } from "@mui/material";
// import { useQuery } from "react-query";
// import { getMeetings } from "../services/meeting";

const MeetingListPage: React.FC = () => {
    const dispatch = useDispatch();
    // const {
    //     data: meetingData,
    //     isLoading,
    //     error,
    // } = useQuery(["meetings"], getMeetings, {
    //     // refetchInterval: 30000, // Poll every 30 seconds
    // });

    // console.log("meting ----------", meetingData);
    const meetingData = [
        {
            id: 1,
            startTime: "10:00",
            endTime: "11:00",
            title: "Annual 2025 meeting",
            room: "Room A100",
        },
        {
            id: 2,
            startTime: "11:10",
            endTime: "12:00",
            title: "calebration Jan 25 meeting",
            room: "Exam AKJZ ZC800",
        },
        {
            id: 3,
            startTime: "12:30",
            endTime: "13:40",
            title: "Annual Function 2025 meeting",
            room: "Room ACV540",
        },
        {
            id: 4,
            startTime: "14:00",
            endTime: "15:00",
            title: "parent & family joint 2025 meeting",
            room: "Room S504",
        },
        {
            id: 5,
            startTime: "15:00",
            endTime: "18:00",
            title: "Annual exam 2025 meeting",
            room: "Room F5203",
        },
        {
            id: 6,
            startTime: "18:10",
            endTime: "22:00",
            title: "Prev Annual results 2025 meeting",
            room: "Room A200",
        },
    ];
    

    useEffect(() => {
        if (meetingData) {
            dispatch(setMeetings(meetingData));
        }
    }, [meetingData, dispatch]);
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading meetings</div>;

    return (
        <Box
            sx={{
                background: "#f7f7f7",
            }}>
            <Box
                sx={{
                    padding: "20px",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: "10px",
                    }}>
                    <Box
                        sx={{
                            marginBottom: "15px",
                        }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                            }}
                            variant="h1">
                            Upcoming Meetings
                        </Typography>
                    </Box>
                    <Box>
                        <Button></Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "calc(100vh - 168px)",
                        overflowY: "auto",
                    }}>
                    <MeetingList />
                </Box>
            </Box>
        </Box>
    );
};

export default MeetingListPage;
