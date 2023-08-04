import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';

const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);
  
  const { reservations } = useSelector(
    (store) => store.reservations,
  );

  console.log(reservations);
  
  return (
    <div className="reserve_link_container">
      <h2 className="reserve_link_title">My Reservations</h2>
      {reservations && reservations.length > 0 ? (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>
                Name:
                {reservation.car_name}
              </p>
              <p>
                Date:
                {reservation.date}
              </p>
              <p>
                City:
                {reservation.city}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default Reservation;
