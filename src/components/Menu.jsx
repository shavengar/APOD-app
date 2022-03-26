import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser, clearAPODS } from "../redux/actions";
import useAPI from "../hooks/useAPI";

const Menu = ({ user, clearUser, clearAPODS }) => {
    const { logout } = useAPI();

    return (
        <div className="primaryColors">
            {!user && (
                <div className="primaryColors displayFlex justifyCenter">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nav"
                        }
                        to="login"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nav"
                        }
                        to="signup"
                    >
                        Sign Up
                    </NavLink>
                </div>
            )}
            {user && (
                <div className="displayFlex justifyEven primaryColors">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nav"
                        }
                        to="home"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nav"
                        }
                        to="saved"
                    >
                        Saved
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nav"
                        }
                        to="login"
                        onClick={async () => {
                            await logout();
                            clearUser();
                            clearAPODS();
                        }}
                    >
                        Logout
                    </NavLink>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = {
    clearUser,
    clearAPODS,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
