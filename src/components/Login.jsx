import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../App.js";

function Login() {

    const navigate = useNavigate();

        // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
        else {
            dispatch({ type: "USER", payload: true });
            navigate("/");
        }
    }

    return (
        <React.Fragment>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                        <div className="signin-image">
                            <figure>
                                <img src="" alt="Image_here" />
                            </figure>
                            <NavLink to="/login" className="signin-image-link">Create Account</NavLink>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Log In</h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="email"></label>
                                    <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="off" placeholder="Enter your email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password"></label>
                                    <input type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="off" placeholder="Enter your password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="submit" className="btn btn-secondary form-submit" value="Login Now" onClick={loginUser} />
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Login;
