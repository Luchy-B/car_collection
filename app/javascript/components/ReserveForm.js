import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../redux/Cars/carsSlice';
import { createReservation } from '../redux/Cars/reservationsSlice';

const ReserveForm = ({user, selectedItem}) => {
  const dispatch = useDispatch();
  const initialFormState = {
    date: '',
    city: '',
    user_id: user.id,
    car_id: selectedItem ? +selectedItem.id : 0,
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const { cars } = useSelector((store) => store.cars);

  const [reserveData, setReserveData] = useState(initialFormState);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserveData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setReserveData(initialFormState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const shouldCreate = window.confirm('Are you sure you want to create this reservation?');
    if (shouldCreate) {
      await dispatch(createReservation({ reservation: reserveData}));
    }
    resetForm();
  };

  const cities = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "San Francisco",
    "Miami",
    "Washington, D.C.",
    "Boston",
    "Atlanta",
    "Dallas",
  ];

  const dateLimits = () => {
    const today = new Date();
    const oneWeekAfter = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const year = oneWeekAfter.getFullYear();
    let month = oneWeekAfter.getMonth() + 1;
    let day = oneWeekAfter.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date"
            name="date"
            value={reserveData.date}
            min={dateLimits()}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <select name="city"
            value={reserveData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label>
          Car:
          {selectedItem ?
            (
              <span>{selectedItem.name}</span>
            ) : (
              <select name="car_id"
                value={Number(reserveData.car_id)}
                onChange={handleChange}
                required
              >
                <option value="">Select a car</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </select>
            )
          }
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReserveForm.prototype = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  selectedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

ReserveForm.defaultProps = {
  selectedItem: null,
}


export default ReserveForm;