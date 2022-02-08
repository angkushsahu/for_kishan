import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";

function Logout() {

    const navigate = useNavigate();
    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    // promises
    useEffect(function() {
        fetch("/logout", {
            method: "GET",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            credentials: "include"
        })
        .then(res => {
            dispatch({ type: "USER", payload: false });
            navigate("/login");
            if (res.status !== 200) { throw new Error(res.error); }
        })
        .catch(error => console.log(error));
    });

    return (
        <React.Fragment>
            <h1>User Logout</h1>
        </React.Fragment>
    );
}

export default Logout;