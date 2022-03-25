import React, { useRef, useCallback, useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import useAPI from "../hooks/useAPI";
import { useNavigate } from "react-router-dom";
import background from "../images/background.jpg";
import {
    Typography,
    Alert,
    AlertTitle,
    Button,
    TextField,
} from "@mui/material";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";

const LoginPage = ({ setUser }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [requirements, setRequirements] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const navigate = useNavigate();
    const { login } = useAPI();

    /**
     * checks length of username and password lengths
     * @throws error in state, triggering an error message in the jsx
     * @returns local state back to default, sets user in global state(redux), navigates user to home page
     */

    const handleLogin = useCallback(async () => {
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
        const res = await login(username, password);
        if (!res.data.success) {
            console.log(res.data.error);
            setInvalid(true);
        } else {
            setUser(res.data.data);
            setRequirements(false);
            navigate("/home");
        }
    }, []);
    return (
        <section className="entryPage displayFlex justifyCenter">
            <div className="entryContainer displayFlex justifyCenter centerAlign">
                <div className="entryFunctionality accentColor borderRadius displayFlex justifyCenter centerAlign">
                    <div className="accentColor displayFlex justifyCenter column">
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
                            endIcon={<RocketLaunchSharpIcon />}
                            sx={{ mb: 2, display: "flex", size: "large" }}
                        >
                            Login
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
                        {invalid && (
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 14 }}
                                >
                                    Invalid username or password.
                                </Typography>
                            </Alert>
                        )}
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
