/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/user/userSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = (event) => {
    dispatch(createUser(data));
    setData({
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />

        <input
          name="password_confirmation"
          type="password"
          placeholder="Password"
          value={data.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
