/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/user/userSlice';

const Login = () => {
  const { logged_in } = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  const handleSubmit = (event) => {
    dispatch(loginUser(data));
    navigate('/');
    setData({
      email: '',
      password: '',
      loginErrors: '',
    });
    event.preventDefault();
  };

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-container">
      <div>
        <div className="forms">
          <h2>Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              required
            />

            <button className="submit" type="submit">
              Login
            </button>
          </form>
          <p>
            Create an Account?
            <Link to="/"> Go Back</Link>
          </p>

          {logged_in ? (
            <p className="status">Logged in successfully.</p>
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
