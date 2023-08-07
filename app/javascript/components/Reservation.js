import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/Reservations/reservationsSlice';

const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const { reservations } = useSelector(
    (store) => store.reservations,
  );

  return (
    <div className="reserve_link_container">
      <h2 className="reserve_link_title">My Reservations</h2>
      {reservations && reservations.length > 0 ? (
        <ul className="reservation_link_body">
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p className="reserve-link-name">
                {reservation.car_name}
              </p>
              <p className="reserve-link-name">
                {reservation.date}
              </p>
              <p className="reserve-link-name">
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
