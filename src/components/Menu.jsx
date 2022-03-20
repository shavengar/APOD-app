import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser } from "../redux/actions";

const Menu = ({ user, clearUser }) => {
    return (
        <div className="bgColor">
            {!user && (
                <div className="displayFlex justifyCenter">
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
                <div className="displayFlex justifyEven">
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
                        onClick={() => {
                            clearUser();
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
