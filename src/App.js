import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Menu from "./components/Menu";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import APODPage from "./components/APODPage";
import SavedPage from "./components/SavedPage";

function App() {
    return (
        <Router className="App">
            <Menu />
            <Routes>
                <Route
                    path="/login"
                    element={
                        <ProtectedRoutes isPrivate={false}>
                            <LoginPage />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <ProtectedRoutes isPrivate={false}>
                            <SignupPage />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoutes isPrivate={true}>
                            <APODPage />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/saved"
                    element={
                        <ProtectedRoutes isPrivate={true}>
                            <SavedPage />
                        </ProtectedRoutes>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
