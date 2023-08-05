import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => (
  <>
    <div className="main">
      <h1>Welcome to Car Collection.</h1>
      <div className="main-container">
        <NavLink className="main-btn" to="login">
          Login
        </NavLink>
        <NavLink className="main-btn" to="registration">
          Register
        </NavLink>
      </div>
    </div>
  </>
);

export default Main;
