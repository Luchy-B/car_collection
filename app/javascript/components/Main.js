/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Main = () => {
  const { cars, isLoading } = useSelector((store) => store.cars);
  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (cars.length === 0) {
    return (
      <div className="loading">
        <h2>No cars Available</h2>
      </div>
    );
  }
  return (
    <div className="main-container">
      {cars.map((element) => (
        <div key={element.id} className="vehicle-holder main-content">
          <div className="vehicle-circle mainImg">
            <NavLink to={`/details/${element.id}`}>
              <img className="vehicle" src={element.snapshot_url} alt="categoryIcon" />
            </NavLink>
          </div>

          <div className="main-description">
            <h3 className="vehicle-model">
              { element.name}
            </h3>
            <p className="vehicle-description">
              { element.description }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
