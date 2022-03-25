import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import rocket from "../images/rocket.jpg";
import {
    Typography,
    Alert,
    AlertTitle,
    Button,
    TextField,
} from "@mui/material";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";

const SignupPage = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [requirements, setRequirements] = useState(false);
    const [inUse, setInUse] = useState(false);
    const { signup } = useAPI();
    const navigate = useNavigate();

    /**
     * checks length of username and password lengths
     * @throws error in state, triggering an error message in the jsx
     * @todo check to see if user is in database and throw error if so
     * @returns local state back to default and navigates user to login page
     * @todo actually add user to database once backend is set up
     *
     */

    const handleSignup = useCallback(async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (
            username.length < 5 ||
            username.length > 20 ||
            password.length < 8 ||
            password.length > 20
        ) {
            return setRequirements(true);
        }
        const res = await signup(username, password);
        if (!res.data.success) {
            setInUse(true);
        } else {
            setRequirements(false);
            setInUse(false);
            navigate("/login");
        }
    }, []);

    return (
        <section className="entryPage displayFlex justifyCenter">
            <div className="entryContainer displayFlex justifyCenter centerAlign">
                <div className="entryFunctionality accentColor borderRadius displayFlex justifyCenter centerAlign">
                    <div className="accentColor displayFlex justifyCenter column">
                        <h2 className="accentColor">Sign Up:</h2>
                        <TextField
                            id="createUsername"
                            label="Set Username"
                            variant="outlined"
                            inputRef={usernameRef}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="createPassword"
                            label="Set Password"
                            variant="outlined"
                            type="password"
                            inputRef={passwordRef}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => {
                                handleSignup();
                            }}
                            endIcon={<RocketLaunchSharpIcon />}
                            sx={{ mb: 2, display: "flex", size: "large" }}
                        >
                            Sign Up
                        </Button>
                        {requirements && (
                            <Alert severity="info" sx={{ mb: 2 }}>
                                <AlertTitle>Info</AlertTitle>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 14 }}
                                >
                                    Username Requirements:
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    - Must have at least 5 characters
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    - Must have fewer than 20 characters
                                </Typography>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 14 }}
                                >
                                    Password Requirements:
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    - Must have at least 8 characters
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    - Must have fewer than 20 characters
                                </Typography>
                            </Alert>
                        )}
                        {inUse && (
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 14 }}
                                >
                                    Username already in use.
                                </Typography>
                            </Alert>
                        )}
                    </div>
                </div>
                <img className="entryImg borderRadius" src={rocket} />
            </div>
        </section>
    );
};

export default SignupPage;
