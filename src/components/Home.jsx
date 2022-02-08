import React, { useState, useEffect } from 'react';

function Home() {

    const [userName, setUserName] = useState("");
    const [show, setShow] = useState(false);

    async function userHomePage() {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const data = res.json();
            setUserName(data.name);
            setShow(true);
        }
        catch(error){ console.log(error); }
    }

    useEffect(function() { userHomePage(); }, []);

    return (
        <React.Fragment>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">Welcome</p>
                    <h1>{userName}</h1>
                    <h2>{ show? "Happy to see you back" : "Welcome to our website" }</h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
