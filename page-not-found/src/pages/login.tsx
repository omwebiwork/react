import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("token", "token&^ihsdkjfnskokoko");
    navigate('/');
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "url(./bg.jpg)",
        padding: "50px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "30px",
          boxShadow: "0 1px 35px rgba(0, 0, 0, 0.15)",
          width: "100%",
          background: "#fff",
        }}
      >
        <Box
          sx={{
            width: "50%",
            flex: "0 0 50%",
            paddingRight: "8px",
          }}
        >
          <img
            src="/loginBanner.png"
            alt=".."
            style={{
              width: "100%",
              maxWidth: "450px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            flex: "0 0 50%",
            paddingLeft: "15px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "48px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Login
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              marginBottom: "25px",
            }}
          >
            welcome to requix
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
              />
            </Box>
            <Box
              sx={{
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
              </span>
            </Box>

            <Box>
              <Button
                type="submit"
                sx={{
                  padding: "12px 25px",
                  borderRadius: "10px",
                  width: "100%",
                  background: "#000",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
export default Login;