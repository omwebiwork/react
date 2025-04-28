import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import MeetingListPage from "./pages/MeetingListPage";
import theme from "./styles/them";
import Login from "./pages/login";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log("chekc ----", isAuthenticated);

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const PublicRoute = () => {
    const isAuthenticated = !!localStorage.getItem("token");
    console.log("chekc --s--", isAuthenticated);

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>

                    {/* All routes inside PrivateRoute require authentication */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<MeetingListPage />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
