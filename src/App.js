import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Error from './components/Error.jsx';
import Logout from './components/Logout.jsx';
import { initialState, reducer } from './UseReducer.js';

export const UserContext = createContext();

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/about"  element={<About />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/logout" element={<Logout />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />

        </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
