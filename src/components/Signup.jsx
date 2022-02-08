import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    function handleInputs(event) {
        name = event.target.name;
        value = event.target.value;
        // The user will type in one field at a time, every time there is a change in any of the fields, this function will get invoked and the name of the particular field along with the value will get stored in the above name and value variable respectively. After that, the line below will set the user with its old values and the current input field with the new entered value

        setUser({ ...user, [name]: value });
    }

    async function postData(e) {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            // body: JSON.stringify({
            //     name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword
            // })
            body: JSON.stringify({ name, email, phone, work, password, cpassword }) // --> If the key-value pair has the same name, which is also true in this case, but I prefer the above one as it might be confusing
        })

        const data = await res.json();

        if (data.status === 422 || data.status === 500 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else { navigate("/login"); }
    }

    return (
        <React.Fragment>
            <section className="sign-up">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" id="name" value={user.name} onChange={handleInputs} autoComplete="off" placeholder="Enter your name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"></label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} autoComplete="off" placeholder="Enter your email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone"></label>
                                    <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} autoComplete="off" placeholder="Enter your contact-number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work"></label>
                                    <input type="text" name="work" id="work" value={user.work} onChange={handleInputs} autoComplete="off" placeholder="Enter your profession" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password"></label>
                                    <input type="password" name="password" id="password" value={user.password} onChange={handleInputs} autoComplete="off" placeholder="Enter your password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword"></label>
                                    <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} autoComplete="off" placeholder="Re-enter your password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="submit" className="btn btn-secondary form-submit" value="Sign Up Now" onClick={postData} />
                                </div>

                            </form>
                        </div>

                        {/* <div id="loginContainer">
                            // 
                            +The particulars sent by the user in your database
                            <div id="signupBox">
                                <h2 id="centerHeading">Sign Up</h2>
                                <form action="" id="form">
                                    <input type="text" name="signupName" id="signupName" placeholder="Enter your Name" />
                                    <input type="email" name="signupEmail" id="signupEmail" placeholder="Enter your email Id" />
                                    <input type="password" name="signupPassword" id="signupPassword" placeholder="Enter password" />
                                    <input type="password" name="signupconfirmPassword" id="signupconfirmPassword" placeholder="Re-enter your password" />
                                    <textarea name="signupMessage" id="signupMessage" placeholder="A message for me"></textarea>

                                    <button class="button" id="submitForSignup">Submit</button>
                                </form>
                            </div>
                        </div> */}


                        <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Signup;
