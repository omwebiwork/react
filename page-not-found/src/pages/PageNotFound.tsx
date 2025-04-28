import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <Box>
            <Box>Page not found</Box>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
        </Box>
    );
}

export default PageNotFound;
