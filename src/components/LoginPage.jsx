import React, { useRef, useCallback, useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import background from "../images/background.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";

const LoginPage = ({ setUser }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(false);
    /**
     * @todo change local isUser state to an actual check in the database for user information
     */
    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();

    /**
     * checks length of username and password lengths
     * @throws error in state, triggering an error message in the jsx
     * @returns local state back to default, sets user in global state(redux), navigates user to home page
     */

    const handleLogin = useCallback(() => {
        const usernameInput = usernameRef.current.value;
        const passwordInput = passwordRef.current.value;
        if (
            usernameInput.length < 5 ||
            usernameInput.length > 20 ||
            passwordInput.length < 8 ||
            passwordInput.length > 20
        ) {
            return setError(true);
        }
        setError(false);
        setIsUser(true);
        setUser(usernameRef);
        navigate("/home");
    }, []);
    return (
        <section className="primaryColors entryPage displayFlex justifyCenter">
            <div className="entryContainer displayFlex justifyCenter centerAlign">
                <div className="entryFunctionality accentColor borderRadius displayFlex justifyCenter centerAlign">
                    <div className="accentColor">
                        <h2 className="accentColor">Login:</h2>
                        <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            inputRef={usernameRef}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            inputRef={passwordRef}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => {
                                handleLogin();
                            }}
                            sx={{
                                color: "white",
                                borderColor: "white",
                            }}
                        >
                            Login
                        </Button>

                        {error && (
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
                        {/* {!isUser && (
                            <Alert severity="error">
                                Invalid Username or Password
                            </Alert>
                        )} */}
                    </div>
                </div>
                <img className="entryImg borderRadius" src={background} />
            </div>
        </section>
    );
};

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
