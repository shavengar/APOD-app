import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser } from "../redux/actions";

const Menu = ({ user, clearUser }) => {
    return (
        <div>
            {!user && (
                <>
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="signup">Sign Up</NavLink>
                </>
            )}
            {user && (
                <>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="saved">Saved</NavLink>
                    <NavLink
                        to="login"
                        onClick={() => {
                            clearUser();
                        }}
                    >
                        Logout
                    </NavLink>
                </>
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
