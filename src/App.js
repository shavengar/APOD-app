import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
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
import useAPI from "./hooks/useAPI";
import { setUser } from "./redux/actions/user.actions";
import { setFavorites } from "./redux/actions/apod.actions";

function App({ user, setUser, setFavorites }) {
    const { getFavesByUser, verify } = useAPI();

    useEffect(() => {
        const getFavorites = async () => {
            if (user) {
                const res = await getFavesByUser();
                if (res.data.success) {
                    setFavorites(res.data.data);
                }
            }
        };
        getFavorites();
    }, [user]);

    useEffect(() => {
        const checkUser = async () => {
            const res = await verify();
            if (res.data.success) {
                setUser(res.data.data);
            }
        };
        checkUser();
    }, []);

    return (
        <Router>
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = { setUser, setFavorites };

export default connect(mapStateToProps, mapDispatchToProps)(App);
