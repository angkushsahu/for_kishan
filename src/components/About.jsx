import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    async function callAboutPage() {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(error) {
            console.log(error);
            navigate("/login");
        }
    }

    useEffect(function() {
        callAboutPage();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <div className="profile-image">
                                <img src="" alt="Insert your_image" />
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS : <span>1/10</span></p>

                                <ul role="tablist" className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#home" id="home-tab" className="nav-link active" data-toggle="tab" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#profile" id="profile-tab" className="nav-link active" data-toggle="tab" role="tab">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" name="btnAddMore" value="Edit profile" className="profile-edit-btn" />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Work Link</p>
                                <a href="mailto:angkushsahu2502@gmail.com" rel="noreferrer" target="_blank">Mail</a>
                                <a href="https://www.github.com/angkushsahu" rel="noreferrer" target="_blank">Github</a>
                                <a href="https://www.linkedin.com/in/angkush-sahu-0409311bb" rel="noreferrer" target="_blank">Linked-in</a>
                                <a href="https://www.instagram.com/angkush_sahu" rel="noreferrer" target="_blank">Instagram</a>
                            </div>
                        </div>

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </React.Fragment>
    );
}

export default About;
