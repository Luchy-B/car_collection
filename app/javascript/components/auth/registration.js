/* eslint-disable camelcase */
import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = (event) => {
    axios
      .post(
        'http://127.0.0.1:3000/registrations',
        {
          user: {
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log('registration response', response);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
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
