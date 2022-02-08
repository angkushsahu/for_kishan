import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    async function userContact() {
        try {
            const res = await fetch("/getuserData", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const data = await res.json();
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

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
        userContact();
        // eslint-disable-next-line
    }, []);

    // Storing userData in states
    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [name]: value });
    }

    // send the userData to backend
    async function contactForm(event) {
        event.preventDefault();

        const { name, email, phone, message } = userData;

        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message })
            });

            const userData = await res.json();

            if (!userData) { console.log("Message not sent"); }
            else { setUserData({ ...userData, message: "" }); }
        }
        catch(error) { console.log(error); }
    }

    return (
        <React.Fragment>
            <div className="contact_info">
                <div className="container_fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-around align-items-center">

                            {/* Phone number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="Phone image_here" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">Phone</div>
                                    <div className="contact_info_text">+91 99999 - 88888</div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="Email image_here" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">Email</div>
                                    <div className="contact_info_text">anonymous@abc.com</div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="Phone image_here" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">Address</div>
                                    <div className="contact_info_text">Jorhat, Assam, India</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us form */}
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">Get in touch</div>
                                <form method="POST" id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-center">

                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" name="name" value={userData.name} onClick={handleInput} placeholder="Your name" required="true" />

                                        <input type="email" id="contact_form_email" className="contact_form_email input_field" name="email" value={userData.email} onClick={handleInput} placeholder="Your e-mail" required="true" />

                                        <input type="number" id="contact_form_phone" className="contact_form_phone input_field" name="phone" value={userData.phone} onClick={handleInput} placeholder="Your contact number" required="true" />

                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea cols="30" rows="10" className="text_field contact_form_message" name="message" value={userData.message} onClick={handleInput} placeholder="Message...."></textarea>
                                    </div>

                                    <div className="contact_form_button">
                                        <button type="submit" className="button btn btn-secondary contact_submit_button" onClick={contactForm}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
