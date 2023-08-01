import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  return (
    <div className="form-container">
      <div>
        <div className="forms">
          <h2>Login</h2>
          <form className="form">
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={data.email}
              required
            />

            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              value={data.password}
              required
            />

            <button className="submit" type="submit">
              Login
            </button>
          </form>
          <p>
            Create an Account?
            <Link to="/"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
