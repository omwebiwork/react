import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { timeFormatter } from "../utils/timeformater";

function Header() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        boxShadow: "0 5px 10px rgba(0,0,0,0.15)",
        padding: "10px"
      }}
    >
      <Box
        sx={{
          maxWidth: "130px",
          width: "100%",
          lineHeight: "10px",
        }}
      >
        <img
          src="./logo.png"
          alt=".."
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#000",
          }}
          variant="h1"
        >
          {timeFormatter(now)}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
