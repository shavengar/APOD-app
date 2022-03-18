import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isPrivate, user, children }) => {
    const redirectTo = isPrivate ? "/login" : "/home";
    //determines access to components depending on if they are logged in or not
    if ((isPrivate && user) || (!isPrivate && !user)) {
        return <>{children}</>;
    } else {
        return <Navigate to={redirectTo} />;
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
