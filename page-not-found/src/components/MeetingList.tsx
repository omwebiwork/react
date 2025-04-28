import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
// import { useDispatch } from 'react-redux';
// import { setMeetings } from '../features/meetingsSlice';
// import useMeetings from '../hooks/useMeetings';

const MeetingList: React.FC = () => {
    //   const { data, isLoading, error } = useMeetings();
    //   const dispatch = useDispatch();

    //   if (isLoading) return <div>Loading...</div>;
    //   if (error) return <div>Error loading meetings</div>;

    const { meetings } = useSelector((state: RootState) => state.meetings);

    return (
        <Box>
            {meetings.map((meeting) => (
                <Box
                    key={meeting.id}
                    sx={{
                        padding: "10px 0",
                        display: "flex",
                        alignItems: "center",
                        borderLeft: "3px solid #2acce9",
                        paddingLeft: "15px",
                        marginBottom: "15px",
                        background: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.10)",
                    }}>
                    <Box
                        sx={{
                            padding: "10px 10px 10px 0",
                            borderRight: "1px solid #ccc",
                            width: "100px",
                            flex: "0 0 100px",
                        }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "26px",
                                fontWeight: "700",
                                color: "#000",
                                marginBottom: "10px",
                            }}>
                            {meeting.startTime}
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "24px",
                                fontWeight: "700",
                                color: "#ccc",
                            }}>
                            {meeting.endTime}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            padding: "10px 0 10px 10px",
                        }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "26px",
                                fontWeight: "700",
                                color: "#000",
                                marginBottom: "10px",
                            }}>
                            {meeting.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#ccc",
                            }}>
                            {meeting.room}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default MeetingList;
