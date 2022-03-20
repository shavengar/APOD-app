import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import rocket from "../images/rocket.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";

const SignupPage = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [invalid, setInvalid] = useState(false);
    const navigate = useNavigate();

    /**
     * checks length of username and password lengths
     * @throws error in state, triggering an error message in the jsx
     * @todo check to see if user is in database and throw error if so
     * @returns local state back to default and navigates user to login page
     * @todo actually add user to database once backend is set up
     *
     */

    const handleSignup = useCallback(() => {
        const usernameInput = usernameRef.current.value;
        const passwordInput = passwordRef.current.value;
        if (
            usernameInput.length < 5 ||
            usernameInput.length > 20 ||
            passwordInput.length < 8 ||
            passwordInput.length > 20
        ) {
            return setInvalid(true);
        }
        setInvalid(false);
        navigate("/login");
    }, []);

    return (
        <section className="entryPage bgColor displayFlex justifyCenter">
            <div className="entryContainer displayFlex justifyCenter centerAlign">
                <div className="entryFunctionality borderRadius displayFlex justifyCenter centerAlign">
                    <div>
                        <h2>Sign Up:</h2>
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
                            sx={{
                                color: "white",
                                borderColor: "white",
                            }}
                        >
                            Sign Up
                        </Button>
                        {invalid && (
                            <Alert severity="error">
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
                    </div>
                </div>
                <img className="entryImg borderRadius" src={rocket} />
            </div>
        </section>
    );
};

export default SignupPage;
